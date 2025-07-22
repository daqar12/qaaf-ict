import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold font-heading">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm font-body">{testimonial.position}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-4 font-body">
        "{testimonial.quote}"
      </blockquote>
      <div className="text-sm text-gray-500 font-body">
        {testimonial.company && (
          <span className="font-medium">Company: {testimonial.company}</span>
        )}
      </div>
    </div>
  );
};

export default Testimonial;