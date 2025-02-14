import { Chat } from '../models/Chat';
import { User } from '../models/User';
import { Session } from '../models/Session';

// Save a new message to the database
export const saveMessage = async (userId: string, message: string, sessionId: string) => {
    const chatMessage = new Chat({
        userId,
        message,
        sessionId,
        timestamp: new Date(),
    });

    await chatMessage.save();
    return chatMessage;
};

// Retrieve chat history for a user
export const getChatHistory = async (userId: string) => {
    const chatHistory = await Chat.find({ userId }).sort({ timestamp: 1 });
    return chatHistory;
};

// Stream messages for real-time interaction
export const streamMessages = async (sessionId: string, callback: (message: any) => void) => {
    const session = await Session.findById(sessionId);
    if (!session) {
        throw new Error('Session not found');
    }

    // Simulate message streaming
    const interval = setInterval(async () => {
        const messages = await Chat.find({ sessionId }).sort({ timestamp: 1 });
        messages.forEach((message) => {
            callback(message);
        });
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup function to stop streaming
};