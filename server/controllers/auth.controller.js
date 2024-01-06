import userCollection from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req, res, next) => {
    console.log(req.body, ' :Data from client');
    const { username, email, phoneNumber, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userCollection({ username, email, phoneNumber, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (err) {
        err.message = 'User already exists'
        next(err);
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await userCollection.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = await bcrypt.compare(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong Credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_KEY);
        const { password: pass, __v, updatedAt, ...data } = validUser._doc;
        res.cookie('access_token', token, { maxAge: 86400, httpOnly: true }).status(200).json(data);
    } catch (err) {
        next(err);
    }
}

export const signInWithGoogle = async (req, res, next) => {
    const { username, email, photo } = req.body;
    try {
        const user = await userCollection.findOne({ email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
            const { password: pass, __v, updatedAt, ...data } = user._doc;
            res
                .status(200)
                .cookie('access_token', token, { maxAge: 86400, httpOnly: true })
                .json(data);
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hash(generatedPassword, 10);
            const newUser = new userCollection({
                username: username.split(" ").join("").toLowerCase(),
                email: email,
                password: hashedPassword,
                profileImage: photo
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_KEY);
            const { password: pass, __v, updatedAt, ...data } = newUser._doc;
            res
                .status(200)
                .cookie('access_token', token, { maxAge: 86400, httpOnly: true })
                .json(data);
        }
    } catch (error) {
        next(error)
    }
}




