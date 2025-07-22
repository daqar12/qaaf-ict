import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We create custom websites and web applications tailored to your specific business requirements. Our solutions are responsive, user-friendly, and optimized for performance.',
      features: [
        'Custom website design',
        'E-commerce solutions',
        'Content management systems',
        'Web application development',
      ],
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/12492/12492551.png"
        alt="Cloud"
        className="h-12 w-12 object-contain"
      />
    ),
    },
    {
      title: 'Mobile App Development',
      description: 'Our mobile solutions help you reach your customers wherever they are. We develop native and cross-platform apps for iOS and Android.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'App maintenance & support',
      ],
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/8750/8750881.png"
        alt="Cloud"
        className="h-12 w-12 object-contain"
      />
    ),
    },
    {
      title: 'SaaS & Software Solutions',
      description: 'Cloud-based software solutions that grow with your business. We build scalable, secure, and reliable SaaS applications.',
      features: [
        'Custom SaaS development',
        'Cloud integration',
        'API development',
        'Scalable architecture',
      ],
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/656/656974.png"
        alt="Cloud"
        className="h-12 w-12 object-contain"
      />
    ),
    },
    {
      title: 'ICT Consulting',
      description: 'Our experts help you navigate digital transformation with strategic IT consulting services tailored to your business goals.',
      features: [
        'Digital strategy',
        'Technology assessment',
        'IT infrastructure planning',
        'Digital transformation',
      ],
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/4526/4526832.png"
        alt="Cloud"
        className="h-12 w-12 object-contain"
      />
    ),
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 -mt-16">
        <div className="text-center mb-16 py-16 bg-gradient-to-r from-primary to-accent text-white rounded-[10px]">
          <h1 className="text-4xl font-bold mb-4 font-heading">Our Services</h1>
          <p className="text-xl text-white-600 max-w-2xl mx-auto font-body">
            Comprehensive ICT solutions designed to empower your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-start">
                  <div className="text-5xl mr-6">{service.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 font-heading">{service.title}</h2>
                    <p className="text-gray-600 mb-4 font-body">{service.description}</p>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 font-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
                    >
                      Get a free consultation <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 font-heading">Not sure what you need?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-body">
            Our experts can help assess your business and recommend the right solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-md"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;