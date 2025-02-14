import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { config } from '../config';

const JWT_SECRET = config.JWT_SECRET;
const JWT_EXPIRATION = config.JWT_EXPIRATION;

// Generate a JWT token
export const generateToken = (userId: string) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

// Verify a JWT token
export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};

// Middleware to authenticate JWT token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};