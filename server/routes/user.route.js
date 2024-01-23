import express from 'express';
import { test, updateUser, getUserListing } from '../controllers/user.controller.js';
import verifyUser from '../utils/verifyUser.js';
const router = express.Router();

router.get('/test', test);
router.post('/update-user-info/:id', verifyUser, updateUser);
router.get('/listing/:id',verifyUser, getUserListing);


export default router;