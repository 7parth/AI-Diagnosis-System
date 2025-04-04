# AI-Powered Diagnosis System

AI-Powered Diagnosis System is a web application designed to provide users with a smart and secure platform for health diagnosis. It leverages advanced AI algorithms to analyze user symptoms and provide accurate health insights.

## Features

- **Real-time Analysis**: Get instant health insights powered by AI.
- **Smart Diagnosis**: Advanced machine learning for accurate health assessments.
- **Secure & Private**: Enterprise-grade security for user data.
- **Interactive Chat Interface**: Communicate with an AI health assistant for personalized diagnosis.

## Project Structure

The project is divided into two main parts:

### Frontend
- Built with **React** and **Vite**.
- Styled using **TailwindCSS**.
- Provides an interactive user interface for health diagnosis.

### Backend
- Built with **Node.js** and **Express**.
- Uses **MongoDB** for data storage.
- Integrates with **Google Generative AI** for chatbot responses.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- A `.env` file with the required API keys and configurations.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/AI-Powered-Diagnosis-System.git
   cd AI-Powered-Diagnosis-System
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd Frontend
   npm install
   cd ../Backend
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `Backend/src` directory.
   - Add the required keys (e.g., `MONGO_URI`, `LANGFLOW_CHATBOT_KEY`, etc.).

4. Start the backend server:
   ```bash
   cd Backend
   node server.js
   ```

5. Start the frontend development server:
   ```bash
   cd Frontend
   npm run dev
   ```

6. Open the application in your browser at `http://localhost:5173`.

## API Endpoints

### Chat Endpoint
- **POST** `/api/chat`
- **Description**: Sends a user message to the AI chatbot and receives a response.
- **Request Body**:
  ```json
  {
    "message": "Describe your symptoms here"
  }
  ```
- **Response**:
  ```json
  {
    "message": "AI-generated response"
  }
  ```

## Technologies Used

### Frontend
- React
- Vite
- TailwindCSS
- React Router
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Google Generative AI
- dotenv

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- **Google Generative AI** for powering the chatbot.
- **TailwindCSS** for seamless styling.
- The open-source community for their amazing tools and libraries.
