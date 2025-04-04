import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-cyan-500/20 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2 text-gray-400">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>by AI Diagnosis Team</span>
        </div>
        <div className="text-center text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} AI Diagnosis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;