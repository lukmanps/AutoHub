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
        next(err);
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await userCollection.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = await bcrypt.compare(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong Credential'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_KEY);
        const {password: pass,__v, updatedAt, ...data} = validUser._doc;
        console.log(data);
        res
        .cookie('access-token', token, {httpOnly: true})
        .status(200)
        .json(data)
    } catch (err) {
        next(err);
    }
}





