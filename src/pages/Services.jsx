import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import PackageCard from '../components/PackageCard';  // Correct relative path
const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All services' },
    { id: 'packages', name: 'PACKAGES' },
  ];

  const services = [
    {
      id: 'web',
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
          alt="Web Development"
          className="h-12 w-12 object-contain"
        />
      ),
    },
    {
      id: 'mobile',
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
          alt="Mobile App"
          className="h-12 w-12 object-contain"
        />
      ),
    },
    {
      id: 'saas',
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
          alt="SaaS"
          className="h-12 w-12 object-contain"
        />
      ),
    },
    {
      id: 'consulting',
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
          alt="Consulting"
          className="h-12 w-12 object-contain"
        />
      ),
    },
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : activeFilter === 'packages'
      ? [] // Will be replaced with PackageCard
      : services.filter(service => service.id === activeFilter);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 -mt-16">
        <div className="text-center mb-16 py-16 bg-gradient-to-r from-primary to-accent text-white rounded-[10px]">
          <h1 className="text-4xl font-bold mb-4 font-heading">Our Services</h1>
          <p className="text-xl text-white-600 max-w-2xl mx-auto font-body">
            Comprehensive ICT solutions designed to empower your business and drive growth.
          </p>
        </div>

        {/* Filter Component */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Services or Packages Display */}
        {activeFilter === 'packages' ? (
  <div className="mb-16">
    {/* Title above packages */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold font-heading text-gray-800">
        Choose your Plan
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-2 font-body">
        Select the plan that best fits your business needs.
      </p>
    </div>

    {/* Package cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <PackageCard 
        plan="Basic Plan"
        price="$20"
        period="month"
        description="Perfect for startups or small businesses looking to establish an online presence."
        features={[
           'Custom responsive website (up to 5 pages)',
            'Basic UI/UX design',
            'Mobile-friendly layout',
            'Standard email support'
        ]}
        isPopular={false}
      />
      <PackageCard 
        plan="Plus Plan"
        price="$100"
        period="6 months"
        description="Ideal for growing businesses that need advanced website functionality and better visibility."
        features={[
          'Advanced website with up to 15 pages',
          'Payment gateway integration (EVC+)',
          'Priority customer support',
          'On-page SEO optimization',
          'Content updates and maintenance'
        ]}
        isPopular={true}
      />
      <PackageCard 
        plan="Premium Plan"
        price="$250"
        period="year"
        description="Enterprise-grade solutions for businesses requiring full-scale web and app solutions."
        features={[
          'Fully customized web application',
          'Unlimited pages & advanced UI/UX',
          'E-commerce integration & payment gateway',
          '24/7 premium support',
          'Advanced SEO & analytics',
          'Monthly performance reports'
        ]}
        isPopular={false}
      />
    </div>
  </div>
) : 
  (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredServices.map((service, index) => (
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
        )}

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
          <p className='mt-4 text-gray-600 font-body'><Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-md -mb-6"
          >
            Our Portfolio
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;