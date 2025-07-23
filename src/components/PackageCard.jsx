import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const PackageCard = ({ plan, price, period, description, features, isPopular }) => {
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg ${
      isPopular ? 'border-2 border-primary transform -translate-y-2' : 'border border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}
      
      <div className="bg-white p-8 h-full">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 font-heading">{plan}</h3>
          <div className="mt-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">{price}</span>
            <span className="text-gray-500 ml-1">/{period}</span>
          </div>
          <p className="mt-2 text-gray-600 font-body">{description}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-body">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8">
       <Link
        to="/contact"
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors text-center inline-block ${
            isPopular
            ? 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        >
        Get Started
        </Link>

        </div>
      </div>
    </div>
  );
};

export default PackageCard;