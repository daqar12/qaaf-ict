import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CogIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

const AdminSidebar = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: <ChartBarIcon className="h-5 w-5" />
    },
    {
      name: 'Services',
      path: '/admin/manage-services',
      icon: <BriefcaseIcon className="h-5 w-5" />
    },
    {
      name: 'Portfolio',
      path: '/admin/manage-portfolio',
      icon: <DocumentTextIcon className="h-5 w-5" />
    },
    {
      name: 'Team',
      path: '/admin/manage-team',
      icon: <UserGroupIcon className="h-5 w-5" />
    },
    {
      name: 'Testimonials',
      path: '/admin/manage-testimonials',
      icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: <CogIcon className="h-5 w-5" />
    }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-primary to-accent text-white h-screen fixed left-0 top-0 p-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center justify-center mb-4 p-4 bg-white/10 rounded-lg">
        <img
            src="/mylogo.png"
            alt="Qaaf ICT Logo"
            className="h-10 w-10 object-contain mr-2"
        />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Qaaf ICT
        </h1>
       </div>

      
      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === item.path
                ? 'bg-white text-primary font-semibold shadow-md'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      
      {/* Logout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <button className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
