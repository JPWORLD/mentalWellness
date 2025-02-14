# Healthcare Chatbot Backend Documentation

## Overview
The Healthcare Chatbot is a full-stack application designed to provide users with a secure and engaging conversational AI assistant focused on mental and physical health. The backend is built using Node.js and Express, with MongoDB as the database for storing user data and chat history.

## Features
1. **User Authentication & Session Management**
   - Secure login and registration using JWT authentication.
   - OAuth integration for Google Login.
   - Persistent sessions to maintain user interactions.

2. **Chat System**
   - Utilizes the Ollama Gemma:2B model for generating health-related responses.
   - Real-time message streaming with typing animations.

3. **Chat History & Database Storage**
   - Stores chat history in MongoDB, allowing users to retrieve previous conversations.
   - Implements search functionality within chat history.

4. **Personalized AI Training**
   - Fine-tunes the AI model based on past user conversations.
   - Implements flagging mechanisms for harmful or irrelevant inputs.

5. **Backend API**
   - RESTful APIs for chat communication, user management, and authentication.
   - Swagger UI for API documentation.

6. **Data Privacy & Security**
   - User chat data is encrypted before storage.
   - Role-based authentication to prevent unauthorized access.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- TypeScript

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd healthcare-chatbot/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root of the `backend` directory and add the necessary configuration settings (e.g., database connection string, JWT secret).

### Running the Application
1. Start the server:
   ```
   npm run start
   ```

2. The server will run on `http://localhost:5000` (or the port specified in your configuration).

### API Documentation
- Access the Swagger UI at `http://localhost:5000/api-docs` to explore available endpoints and their usage.

## Directory Structure
```
backend
├── src
│   ├── controllers         # Controllers for handling requests
│   ├── models              # MongoDB models
│   ├── routes              # API routes
│   ├── services            # Business logic
│   ├── utils               # Utility functions
│   ├── app.ts              # Express app initialization
│   ├── config.ts           # Configuration settings
│   ├── database.ts         # Database connection
│   └── server.ts           # Server startup
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This documentation
```

## Future Enhancements
- Voice chat support with text-to-speech integration.
- Live AI-assisted therapist scheduling.
- Multi-language support for global accessibility.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.