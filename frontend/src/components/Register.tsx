import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/auth';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await registerUser({ username, email, password });
            history.push('/login'); // Redirect to login after successful registration
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl mb-4">Register</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;