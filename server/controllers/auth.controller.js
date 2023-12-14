import userCollection from "../models/user.model.js";
import bcrypt from 'bcrypt';

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