import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'HR Management SaaS',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Corporate Website',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Inventory Management System',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'saas', name: 'SaaS Solutions' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Portfolio</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Explore our successful projects and see how we've helped businesses grow.
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
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

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <PortfolioItem key={index} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-500">No projects found in this category</h3>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 font-heading">Have a project in mind?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-body">
              Let's discuss how we can bring your ideas to life with our expertise.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-bold text-lg shadow-lg"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;