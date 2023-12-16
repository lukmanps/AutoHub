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
    },

    password: {
        type: String,
        required: true,
    },

    profileImage: {
        type: String,
        default: 'https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png'
    }
    

    
}, {timestamps: true});

const userCollection = mongoose.model('User', userSchema);

export default userCollection;