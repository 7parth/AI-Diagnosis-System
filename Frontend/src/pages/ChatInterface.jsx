import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I\'m your AI health assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    const response = await axios.post("http://localhost:5000/api/chat", { message: input });
    setInput('');

    // Add bot message
    setMessages(prev => [...prev, { type: 'bot', content: response.data.message }]);
  };

  return (
    <main className="flex-grow flex flex-col max-w-4xl mx-auto p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg flex-grow flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-cyan-400">AI Health Assistant</h2>
        </div>

        <div className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2 ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`p-2 rounded-full ${
                message.type === 'user' ? 'bg-blue-600' : 'bg-cyan-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-5 w-5" />
                ) : (
                  <Bot className="h-5 w-5" />
                )}
              </div>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600'
                  : 'bg-gray-700'
              }`}>
                {message.type === 'bot' ? (
                  <ReactMarkdown className="prose prose-invert max-w-none">
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your symptoms..."
              className="flex-grow px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ChatInterface;