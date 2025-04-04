import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Activity, Brain, Shield } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
            AI-Powered Health Diagnosis
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Experience the future of healthcare with our advanced AI diagnosis system.
            Get instant insights about your health concerns.
          </p>
          
          <button
            onClick={() => navigate('/chat')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <Bot className="inline-block mr-2 h-6 w-6" />
            Start Diagnosis
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <Activity className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
            <p className="text-gray-400">Get instant health insights powered by advanced AI algorithms.</p>
          </div>
          
          <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <Brain className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Diagnosis</h3>
            <p className="text-gray-400">Advanced machine learning for accurate health assessments.</p>
          </div>
          
          <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <Shield className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-400">Your health data is protected with enterprise-grade security.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;