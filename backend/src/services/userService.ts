import { User } from '../models/User';
import { Session } from '../models/Session';
import { hashPassword, comparePassword } from '../utils/authUtils';
import { sign } from '../utils/jwt';
import { Request, Response } from 'express';

// Function to register a new user
export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Function to login a user
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = sign({ id: user._id });
        res.status(200).json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Function to get user profile
export const getUserProfile = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
};

// Function to update user profile
export const updateUserProfile = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updates = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error });
    }
};

// Function to delete user account
export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};