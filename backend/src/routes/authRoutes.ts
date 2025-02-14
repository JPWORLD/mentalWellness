import express from 'express';
import { register, login, logout } from '../controllers/authController';
import { validateRegistration, validateLogin } from '../utils/validator';

const router = express.Router();

// Route for user registration
router.post('/register', validateRegistration, register);

// Route for user login
router.post('/login', validateLogin, login);

// Route for user logout
router.post('/logout', logout);

export default router;