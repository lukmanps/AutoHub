import express from 'express';
import { createListing, getUserListing } from '../controllers/listing.controller.js';
import verifyUser from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createListing);
router.get('/:id',verifyUser , getUserListing);

export default router;