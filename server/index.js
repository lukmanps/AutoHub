import express from 'express';
import cors from 'cors'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';

//Routers
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

const app = express();


//Database Connection
connectDB();

//Server Implementation
const port = 3000;
app.listen(port, () => {
    console.log(`::::: Server Started on Port: ${port} :::::`);
});

//Enable CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // Allow cookies to be sent with the request
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

//Routes
app.use('/api', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

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

