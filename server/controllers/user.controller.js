import bcrypt from 'bcrypt';
import userCollection from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
    res.json({
        message: 'Hello World!'
    })
}

export const updateUser = async(req, res, next) => {
    console.log(req.user, " :: USer deaitla");
    if(req.user.id !== req.params.id) return next(errorHandler(401, 'You can only update your account!'));

    try {
        console.log(req.body);
        if(req.body.password) {
            req.body.password = await bcrypt(req.body.password, 10);
        }

        const updatedUser = await userCollection.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                profileImage: req.body.profileImage
            }
        }, {new: true});
        
        const {password, __v, updatedAt, ...data} = updatedUser._doc;

        res.status(200).json(data);
        
    } catch (error) {
        next(error);
    }
}