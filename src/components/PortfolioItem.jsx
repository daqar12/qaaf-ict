import React, { useState } from 'react';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const PortfolioItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md h-64"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6 ${isHovered ? 'opacity-90' : ''}`}>
        <h3 className="text-white text-xl font-bold mb-1 font-heading">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 font-body">{project.category}</p>
        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-primary bg-opacity-80 hover:bg-opacity-100 px-3 py-1 rounded text-sm transition-colors"
          >
            <EyeIcon className="h-4 w-4 mr-1" /> Demo
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-gray-700 bg-opacity-80 hover:bg-opacity-100 px-3 py-1 rounded text-sm transition-colors"
            >
              <CodeBracketIcon className="h-4 w-4 mr-1" /> Code
            </a>
          )}
        </div>
      </div>
      
      {/* Category badge */}
      <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)} transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        {project.category}
      </span>
    </div>
  );
};

// Helper function for category colors
const getCategoryColor = (category) => {
  switch (category.toLowerCase()) {
    case 'web':
      return 'bg-blue-100 text-blue-800';
    case 'mobile':
      return 'bg-purple-100 text-purple-800';
    case 'saas':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default PortfolioItem;