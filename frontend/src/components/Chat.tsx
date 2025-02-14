import React, { useEffect, useState } from 'react';
import { sendMessage, getChatHistory } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import './Chat.css';

const Chat = () => {
    const { user } = useAuth();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchChatHistory = async () => {
            const history = await getChatHistory(user.id);
            setMessages(history);
        };
        fetchChatHistory();
    }, [user.id]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        const newMessage = {
            userId: user.id,
            content: input,
            timestamp: new Date().toISOString(),
        };

        const response = await sendMessage(newMessage);
        setMessages((prev) => [...prev, response]);
        setInput('');
        setLoading(false);
    };

    return (
        <div className="chat-container">
            <div className="chat-history">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.userId === user.id ? 'sent' : 'received'}`}>
                        <p>{msg.content}</p>
                        <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={loading}
                />
                <button type="submit" disabled={loading}>Send</button>
            </form>
            {loading && <div className="typing-indicator">Typing...</div>}
        </div>
    );
};

export default Chat;