import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('***** Connected to Database *****');
    })
    .catch((err) => {
        console.log(err)
    })
};

export default connectDB;