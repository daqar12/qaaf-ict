import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and dashboards tailored to your business needs.',
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
      description: 'iOS and Android solutions to reach your customers anywhere.',
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/8750/8750881.png"
        alt="Cloud"
        className="h-12 w-12 object-contain"
      />
    ),
    },
    {
      title: 'SaaS Solutions',
      description: 'Cloud-based applications for scalable business growth.',
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
      description: 'Digital transformation strategies to future-proof your business.',
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/4526/4526832.png"
        alt="Cloud"
        className="h-12 w-12 object-contain"
      />
    ),
    },
  ];

  const whyChooseUs = [
    'Local Insight, Global Standards',
    'End‑to‑End Digital Delivery',
    'Secure & Reliable Architecture',
    'Startup‑Friendly Pricing & SaaS Leasing',
  ];

  return (
    <div className="overflow-x-hidden -mt-4">
      {/* Hero Section */}
      <section className="relative  py-20 md:py-28 lg:py-36 bg-gradient-to-r from-primary to-accent text-white rounded-[10px] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden ">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay rounded-[10px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-accent/80 rounded-[10px]"></div>
        </div>

         <div className="relative rounded-[10px] max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-center justify-start">
          {/* Left Side (Text and Buttons) */}
          <div className="text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-heading leading-tight">
              Empowering Your Business <br className="hidden lg:block" /> With Technology
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-body leading-relaxed">
              Innovative ICT solutions to drive your business forward in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 text-lg"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300 text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Side (Logo) */}
          <div className="mt-10 lg:mt-0 lg:ml-48 flex justify-center">
            <img
              src="/mylogo.png"
              alt="Company Logo"
              className="w-65 h-auto"
            />
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Our Core Services
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30 group"
              >
                <div className="text-5xl mb-6 group-hover:text-accent transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 font-heading group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-body leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn more <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
                Why Choose <span className="text-primary">Qaaf ICT</span> Solutions?
              </h2>
              <ul className="space-y-5">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 bg-accent/20 p-2 rounded-full mr-4">
                      <svg
                        className="h-6 w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-lg text-gray-700 font-body leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 bg-neutral rounded-2xl p-10 shadow-inner">
              <div className="bg-white rounded-xl p-8 shadow-md h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Smart Solutions, Brighter Future
                </h3>
                <p className="text-gray-600 mb-8 font-body leading-relaxed">
                  At Qaaf ICT Solutions, we combine technical expertise with business acumen to deliver
                  solutions that not only solve today's challenges but also position your business for
                  future success in an ever-evolving digital landscape.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-md"
                >
                  Learn more about us
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 mx-auto font-body leading-relaxed">
            Let's build your digital future together with tailored technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-accent text-primary rounded-xl hover:bg-opacity-90 transition-all font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Home;