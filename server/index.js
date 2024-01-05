import express from 'express';
import cors from 'cors'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';

//Routers
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();


//Database Connection
connectDB();

//Server Implementation
const port = 3000;
app.listen(port, () => {
    console.log(`::::: Server Started on Port: ${port} :::::`);
});

//Enable CORS
app.use(cors());

app.use(express.json());

app.use(cookieParser());

//Routes
app.use('/api', userRouter);
app.use('/api/auth', authRouter);

//Error-Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

