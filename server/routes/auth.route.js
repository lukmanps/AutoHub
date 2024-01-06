import express from 'express';
import { login, signInWithGoogle, signup, signOut } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/register', signup);
router.post('/login', login);
router.post('/Oauth', signInWithGoogle);
router.get('/signout', signOut);

export default router;