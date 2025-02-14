export interface User {
    id: string;
    username: string;
    email: string;
    chatHistory: Chat[];
}

export interface Chat {
    id: string;
    userId: string;
    messages: Message[];
    timestamp: Date;
}

export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface Session {
    id: string;
    userId: string;
    startTime: Date;
    endTime: Date;
    chatHistory: Chat[];
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
}

export interface Theme {
    name: string;
    properties: {
        [key: string]: string;
    };
}