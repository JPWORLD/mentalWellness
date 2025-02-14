import { Request, Response } from 'express';
import UserService from '../services/userService';

// Get user profile
export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const userProfile = await UserService.getUserProfile(userId);
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user profile', error });
    }
};

// Update user profile
export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const updatedData = req.body;
        const updatedProfile = await UserService.updateUserProfile(userId, updatedData);
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error });
    }
};

// Delete user account
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        await UserService.deleteUser(userId);
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user account', error });
    }
};