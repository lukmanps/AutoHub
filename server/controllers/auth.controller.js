import userCollection from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res, next) => {
    const { username, email, password, phoneNumber } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userCollection({ username, email, password: hashPassword, phoneNumber });
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (err) {
        console.log(err);
        next(err);
    }

}