import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { Sidebar } from '../components/Sidebar';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl">Healthcare Chatbot</h1>
                <ThemeSwitcher />
            </header>
            <div className="flex flex-grow">
                <Sidebar />
                <main className="flex-grow p-4">
                    <h2 className="text-xl mb-4">Welcome to Your Healthcare Assistant</h2>
                    <p className="mb-4">
                        This chatbot is designed to assist you with mental and physical wellness. 
                        Please log in or register to start chatting with our AI assistant.
                    </p>
                    <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Login
                    </Link>
                    <Link to="/register" className="ml-4 bg-green-500 text-white px-4 py-2 rounded">
                        Register
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;