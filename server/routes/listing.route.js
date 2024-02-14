import express from 'express';
import { createListing, getUserListing, getListing } from '../controllers/listing.controller.js';
import verifyUser from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createListing);
router.get('/userListing/:id',verifyUser , getUserListing);
router.get('/listing/:id', getListing);

export default router;