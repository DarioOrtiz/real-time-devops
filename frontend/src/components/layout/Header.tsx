import React from 'react';
import { Bell, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-gray-800">FSDD Overview</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Bell className="w-5 h-5" />
        </button>
        <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};
