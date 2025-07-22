import React from 'react';
import TeamMember from '../components/TeamMember';
import { BuildingOfficeIcon, LightBulbIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const About = () => {
  const team = [
    {
      name: 'Ahmed Qaaf',
      position: 'Founder & CEO',
      bio: 'Technology visionary with 15+ years of experience in digital transformation and enterprise solutions.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      socialLinks: [
        { name: 'LinkedIn', url: '#', icon: <LinkedInIcon /> }
      ]
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      bio: 'Software architect specializing in scalable cloud solutions and microservices.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      socialLinks: [
        { name: 'LinkedIn', url: '#', icon: <LinkedInIcon /> }
      ]
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud infrastructure.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      socialLinks: [
        { name: 'LinkedIn', url: '#', icon: <LinkedInIcon /> }
      ]
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started as a small IT consultancy firm with 3 employees.'
    },
    {
      year: '2014',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, marking our transition to larger projects.'
    },
    {
      year: '2018',
      title: 'Expanded Services',
      description: 'Launched our SaaS development division to meet growing market demand.'
    },
    {
      year: '2022',
      title: 'International Presence',
      description: 'Opened offices in 3 countries, serving clients across 4 continents.'
    }
  ];

  return (
    <div className="py-16 -mt-14">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 rounded-[10px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">About Qaaf ICT Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Smart Solutions, Brighter Future
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">Our Story</h2>
              <p className="text-gray-700 mb-6 font-body">
                Founded on June 15, 2025, Qaaf ICT Solutions was born from a bold vision — to empower Somali businesses and organizations through cutting-edge digital innovation. While young in years, our foundation is built on passion, expertise, and a relentless drive to create transformative technology solutions.          </p>
              <p className="text-gray-700 mb-6 font-body">
                From day one, our goal has been clear: to simplify digital adoption and deliver tools that truly drive growth and impact. We started as a small but determined team of technologists, strategists, and creatives committed to reshaping how businesses interact with technology.         </p>
              <p className="text-gray-700 mb-6 font-body">
                Today, Qaaf ICT Solutions is growing into a trusted name for modern ICT services, mobile apps, SaaS platforms, and web systems, serving businesses that seek not just software, but real results. We believe in collaboration, transparency, and innovation—working hand-in-hand with clients to craft solutions tailored to their unique challenges and ambitions.
              </p>  
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Our team working" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-accent transition-colors duration-300">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Innovation</h3>
              <p className="text-gray-600 font-body">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-accent transition-colors duration-300">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Integrity</h3>
              <p className="text-gray-600 font-body">
                We build trust through transparency, honesty, and ethical business practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-accent transition-colors duration-300">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Excellence</h3>
              <p className="text-gray-600 font-body">
                We're committed to delivering exceptional quality in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-primary transform -translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-16 md:pl-0' : 'md:pl-16 md:pr-0'}`}
              >
                <div className={`bg-white p-6 rounded-lg shadow-md relative z-10 ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
                  <div className="absolute -top-4 left-6 md:left-auto md:right-6 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{milestone.title}</h3>
                  <p className="text-gray-600 font-body">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white rounded-[10px]">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl font-bold mb-6 font-heading">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Let's discuss how we can help your business grow with technology.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-accent text-primary rounded-lg hover:bg-opacity-90 transition-all font-bold text-lg shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

// Helper component for LinkedIn icon
const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default About;