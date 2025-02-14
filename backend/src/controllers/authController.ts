import { Request, Response } from 'express';
import { User } from '../models/User';
import { generateToken, verifyToken } from '../utils/jwt';
import bcrypt from 'bcrypt';

// Register a new user
export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Login a user
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);
        res.status(200).json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Logout a user
export const logout = (req: Request, res: Response) => {
    res.status(200).json({ message: 'User logged out successfully' });
};

// Middleware to authenticate user
export const authenticate = (req: Request, res: Response, next: Function) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    verifyToken(token)
        .then((decoded) => {
            req.userId = decoded.id;
            next();
        })
        .catch(() => {
            return res.status(401).json({ message: 'Unauthorized' });
        });
};