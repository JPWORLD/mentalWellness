# Healthcare Chatbot

## Overview
The Healthcare Chatbot is a full-stack application designed to provide users with a secure and engaging conversational AI assistant focused on mental and physical health. The chatbot leverages the Ollama Gemma:2B model to generate responses and offers features such as user authentication, chat history, and personalized AI training.

## Features
1. **User Authentication & Session Management**
   - Secure login and registration using JWT authentication.
   - OAuth integration for Google Login.
   - Persistent sessions to maintain chat history.

2. **Chat System with Ollama Gemma:2B Model**
   - Real-time chat experience with message streaming.
   - Typing animations for a natural interaction feel.
   - Focused on mental and physical wellness topics.

3. **Chat History & Database Storage**
   - MongoDB database for storing user chat history.
   - Automatic loading of previous chats upon user login.
   - Search functionality within chat history.

4. **Personalized AI Training for Users**
   - Fine-tuning the AI model based on past user conversations.
   - Flagging mechanisms to detect harmful or irrelevant inputs.

5. **Frontend Customization & Themes**
   - Multiple themes (Light, Dark, Sepia).
   - Adjustable font sizes for accessibility.
   - Responsive UI for both desktop and mobile users.

6. **Backend API with Node.js & Express**
   - RESTful APIs for chat communication and user management.
   - Swagger UI for API documentation.

7. **Data Privacy & Security**
   - Encryption of user chat data before storage.
   - Role-based authentication to prevent unauthorized access.
   - Options for users to delete or export chat history.

8. **Future Enhancements**
   - Voice chat support with text-to-speech integration.
   - Live AI-assisted therapist scheduling.
   - Multi-language support for global accessibility.

## Tech Stack
- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT, OAuth
- **AI Model**: Ollama Gemma:2B
- **Deployment**: Docker

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Docker (for containerized deployment)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd healthcare-chatbot
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd backend
   npm run start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run start
   ```

3. Access the application at `http://localhost:3000`.

### Docker Deployment
To run the application using Docker, execute:
```
docker-compose up
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Thanks to the contributors and the community for their support and feedback.
