import React from 'react';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Cloud Computing in 2023',
      excerpt: 'Exploring the latest trends and innovations shaping the cloud computing landscape this year.',
      category: 'Technology',
      date: 'May 15, 2023',
      readTime: '5 min read',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    },
    {
      id: 2,
      title: 'Why Mobile-First Design is More Important Than Ever',
      excerpt: 'With mobile traffic dominating web usage, learn why prioritizing mobile design is crucial for business success.',
      category: 'Design',
      date: 'April 28, 2023',
      readTime: '4 min read',
      author: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
    },
    {
      id: 3,
      title: 'Digital Transformation: A Guide for Small Businesses',
      excerpt: 'Practical steps small businesses can take to embrace digital transformation and stay competitive.',
      category: 'Business',
      date: 'April 10, 2023',
      readTime: '7 min read',
      author: 'Ahmed Qaaf',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      id: 4,
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'How low-code platforms are democratizing software development and what it means for businesses.',
      category: 'Development',
      date: 'March 22, 2023',
      readTime: '6 min read',
      author: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt: 'Essential security measures to protect your business data with a distributed workforce.',
      category: 'Security',
      date: 'March 5, 2023',
      readTime: '8 min read',
      author: 'David Kim',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3'
    },
    {
      id: 6,
      title: 'How AI is Revolutionizing Customer Service',
      excerpt: 'Exploring the impact of artificial intelligence on customer support and engagement strategies.',
      category: 'AI',
      date: 'February 18, 2023',
      readTime: '5 min read',
      author: 'Lisa Rodriguez',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813a743e'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'technology', name: 'Technology' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'development', name: 'Development' },
    { id: 'security', name: 'Security' },
    { id: 'ai', name: 'AI' }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Blog & Insights</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Stay updated with the latest technology trends, company news, and industry insights.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.id === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold mb-3 font-heading">
                    <a href="#" className="hover:text-primary transition-colors">{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-4 font-body">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 font-heading">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6 font-body">
            Get the latest tech insights and company news delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;