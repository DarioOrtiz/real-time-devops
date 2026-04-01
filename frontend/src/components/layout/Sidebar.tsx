import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Server, Activity, Settings, LogOut } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard', active: true },
    { icon: Server, label: 'Applications', to: '/applications', active: false },
    { icon: Activity, label: 'Metrics', to: '/metrics', active: false },
    { icon: Settings, label: 'Settings', to: '/settings', active: false },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-500">
          FSDD<span className="text-white">.io</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.to}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};