import express from 'express';
import connectDB from './config/db.js';

import userRouter from './routes/user.route.js';
const app = express();


//Database Connection
connectDB();

const port = 3000;
app.listen(port, () => {
    console.log(`::::: Server Started on Port: ${port} :::::`);
});

app.use('/api/user', userRouter);

