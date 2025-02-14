import React, { useEffect, useState } from 'react';
import { fetchChatHistory } from '../services/api';

const ChatHistory: React.FC = () => {
    const [chatHistory, setChatHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadChatHistory = async () => {
            try {
                const history = await fetchChatHistory();
                setChatHistory(history);
            } catch (error) {
                console.error('Error fetching chat history:', error);
            } finally {
                setLoading(false);
            }
        };

        loadChatHistory();
    }, []);

    if (loading) {
        return <div>Loading chat history...</div>;
    }

    return (
        <div className="chat-history">
            <h2>Chat History</h2>
            {chatHistory.length === 0 ? (
                <p>No chat history available.</p>
            ) : (
                <ul>
                    {chatHistory.map((chat, index) => (
                        <li key={index}>
                            <strong>{new Date(chat.timestamp).toLocaleString()}</strong>: {chat.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChatHistory;