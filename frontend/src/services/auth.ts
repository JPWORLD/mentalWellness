import axios from 'axios';
import { setToken, removeToken } from '../utils/localStorage';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL as needed

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = () => {
    removeToken();
};

export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

const getToken = () => {
    return localStorage.getItem('token');
};