import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    

    
}, {timestamps: true});

const userCollection = mongoose.model('User', userSchema);

export default userCollection;