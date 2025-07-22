import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-accent hover:border-opacity-50 border border-transparent h-full flex flex-col">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2 font-heading">{service.title}</h3>
      <p className="text-gray-600 mb-4 font-body flex-grow">{service.description}</p>
      <Link
        to={`/services#${service.id}`}
        className="text-primary font-medium flex items-center hover:text-secondary transition-colors mt-auto"
      >
        Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;