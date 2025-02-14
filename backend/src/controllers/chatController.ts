import { Request, Response } from 'express';
import Chat from '../models/Chat';
import User from '../models/User';
import { streamMessages } from '../services/chatService';

// Send a message
export const sendMessage = async (req: Request, res: Response) => {
    const { userId, messageContent } = req.body;

    try {
        const newMessage = new Chat({
            userId,
            messageContent,
            timestamp: new Date(),
        });

        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error });
    }
};

// Get chat history
export const getChatHistory = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const chatHistory = await Chat.find({ userId }).sort({ timestamp: -1 });
        res.status(200).json(chatHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving chat history', error });
    }
};

// Stream messages for real-time interaction
export const streamMessages = (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        streamMessages(userId, res);
    } catch (error) {
        res.status(500).json({ message: 'Error streaming messages', error });
    }
};