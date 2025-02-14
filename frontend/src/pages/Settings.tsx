import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/api';
import { useAuth } from '../hooks/useAuth';

const Settings = () => {
    const { user } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const fetchUserProfile = async () => {
            const profile = await getUserProfile(user.id);
            setUsername(profile.username);
            setEmail(profile.email);
            setTheme(profile.theme || 'light');
        };

        fetchUserProfile();
    }, [user.id]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        await updateUserProfile({ username, email, theme });
        alert('Profile updated successfully!');
    };

    return (
        <div className="settings-container">
            <h1 className="text-2xl font-bold">Settings</h1>
            <form onSubmit={handleUpdateProfile} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Theme</label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="sepia">Sepia</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;