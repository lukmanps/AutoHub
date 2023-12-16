import express from 'express';
import { login, signInWithGoogle, signup } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/register', signup);
router.post('/login', login);
router.post('/Oauth', signInWithGoogle)

export default router;