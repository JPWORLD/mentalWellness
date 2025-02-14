import express from 'express';
import { sendMessage, getChatHistory, streamMessages } from '../controllers/chatController';

const router = express.Router();

// Route to send a message
router.post('/send', sendMessage);

// Route to get chat history
router.get('/history', getChatHistory);

// Route to stream messages for real-time interaction
router.get('/stream', streamMessages);

export default router;