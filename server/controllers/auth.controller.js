import userCollection from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userCollection({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (err) {
        res.status(409).json(err.message);
    }

}