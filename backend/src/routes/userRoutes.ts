import express from 'express';
import { getUserProfile, updateUserProfile, deleteUser } from '../controllers/userController';
import { authenticate } from '../utils/jwt';

const router = express.Router();

// Route to get user profile
router.get('/profile', authenticate, getUserProfile);

// Route to update user profile
router.put('/update', authenticate, updateUserProfile);

// Route to delete user account
router.delete('/delete', authenticate, deleteUser);

export default router;