import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ chatHistory, onChatSelect }) => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Chat History</h2>
            <ul className="chat-list">
                {chatHistory.map((chat, index) => (
                    <li key={index} className="chat-item">
                        <Link to="#" onClick={() => onChatSelect(chat)}>
                            {chat.title || `Chat ${index + 1}`}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="sidebar-footer">
                <Link to="/settings" className="sidebar-link">Settings</Link>
                <Link to="/logout" className="sidebar-link">Logout</Link>
            </div>
        </div>
    );
};

export default Sidebar;