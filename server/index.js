import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(()=> {
    console.log('***** Connected To Database *****');
}).catch(() => {
    console.log('Database connection failed!')
})

const port = 3000;
app.listen(port, () => {
    console.log(`::::: Server Started on Port: ${port} :::::`);
})
