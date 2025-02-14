import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL based on your backend configuration

// Set up axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for adding JWT token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API calls
export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const fetchChatHistory = async () => {
  const response = await api.get('/chat/history');
  return response.data;
};

export const sendMessage = async (messageData) => {
  const response = await api.post('/chat/send', messageData);
  return response.data;
};

export const streamMessages = async (callback) => {
  const eventSource = new EventSource(`${API_URL}/chat/stream`);
  eventSource.onmessage = (event) => {
    callback(JSON.parse(event.data));
  };
  return eventSource;
};

export const deleteChatHistory = async () => {
  const response = await api.delete('/chat/history');
  return response.data;
};