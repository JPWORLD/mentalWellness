# Healthcare Chatbot Frontend Documentation

## Overview
The Healthcare Chatbot frontend is a React-based application designed to provide users with a secure and engaging chat experience focused on mental and physical wellness. It allows users to interact with an AI model, manage their chat history, and customize their experience through various themes and settings.

## Features
1. **User Authentication**
   - Secure login and registration using JWT authentication.
   - OAuth integration for Google Login.
   - Persistent sessions to maintain user interactions.

2. **Chat System**
   - Utilizes the Ollama Gemma:2B model for generating health-related responses.
   - Real-time message streaming with typing animations for a natural feel.

3. **Chat History**
   - Automatic loading of previous chats upon user login.
   - Search functionality within chat history.

4. **Personalized AI Training**
   - Fine-tunes the AI model based on past user conversations.
   - Flagging mechanisms to detect harmful or irrelevant inputs.

5. **Frontend Customization**
   - Multiple themes (Light, Dark, Sepia).
   - Adjustable font sizes for accessibility.
   - Responsive design for both desktop and mobile users.

6. **Backend Integration**
   - RESTful APIs for chat communication and user management.
   - Session management and model inference requests handled by the backend.

7. **Data Privacy & Security**
   - User chat data is encrypted before storage.
   - Role-based authentication to prevent unauthorized access.
   - Options for users to delete or export their chat history.

## Getting Started
To get started with the Healthcare Chatbot frontend, follow these steps:

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd healthcare-chatbot/frontend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Application**
   ```
   npm start
   ```

4. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`.

## Folder Structure
- **public/**: Contains static files such as `index.html` and `manifest.json`.
- **src/**: Contains the main application code.
  - **components/**: Reusable components like Chat, Login, Register, etc.
  - **pages/**: Different pages of the application.
  - **services/**: API calls and authentication logic.
  - **styles/**: CSS files for global styles and themes.
  - **utils/**: Utility functions for local storage and theme management.
  - **types/**: TypeScript types and interfaces.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.