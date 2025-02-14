import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chat from '../components/Chat';
import ChatHistory from '../components/ChatHistory';
import Sidebar from '../components/Sidebar';
import { fetchChatHistory } from '../services/api';
import { useAuth } from '../utils/localStorage';

const ChatPage = () => {
    const { userId } = useParams();
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const loadChatHistory = async () => {
            try {
                const history = await fetchChatHistory(userId);
                setChatHistory(history);
            } catch (error) {
                console.error('Error fetching chat history:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            loadChatHistory();
        }
    }, [userId, user]);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    {loading ? (
                        <div>Loading chat history...</div>
                    ) : (
                        <ChatHistory chatHistory={chatHistory} />
                    )}
                </div>
                <Chat userId={userId} />
            </div>
        </div>
    );
};

export default ChatPage;