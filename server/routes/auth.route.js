import express from 'express';
import { signup } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/register', signup);

export default router;