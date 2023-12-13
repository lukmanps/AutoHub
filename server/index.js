import express from 'express';
import connectDB from './config/db.js';

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

app.use(express.json());

//Routes
app.use('/api/user', userRouter);
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

