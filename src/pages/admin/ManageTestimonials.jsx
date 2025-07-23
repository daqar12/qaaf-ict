import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { StarIcon } from '@heroicons/react/24/solid';

const ManageTestimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'ABC Corp',
      quote: 'Excellent service and support throughout our project. Highly recommended!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'XYZ Tech',
      quote: 'The team delivered beyond our expectations. Will work with them again.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      featured: false
    }
  ]);

  const [isEditing, setIsEditing] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    quote: '',
    rating: 5,
    avatar: '',
    featured: false
  });

  const handleEdit = (testimonial) => {
    setIsEditing(testimonial.id);
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      quote: testimonial.quote,
      rating: testimonial.rating,
      avatar: testimonial.avatar,
      featured: testimonial.featured
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTestimonials(testimonials.map(t => 
        t.id === isEditing ? { ...t, ...formData } : t
      ));
    } else {
      const newTestimonial = {
        id: Math.max(...testimonials.map(t => t.id)) + 1,
        ...formData
      };
      setTestimonials([...testimonials, newTestimonial]);
    }
    setIsEditing(null);
    setFormData({
      name: '',
      position: '',
      company: '',
      quote: '',
      rating: 5,
      avatar: '',
      featured: false
    });
  };

  const handleDelete = (id) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Testimonials</h1>
          <button 
            onClick={() => setIsEditing('new')}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Add New Testimonial
          </button>
        </div>
        
        {(isEditing === 'new' || isEditing) && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {isEditing === 'new' ? 'Add New Testimonial' : 'Edit Testimonial'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Avatar URL</label>
                <input
                  type="url"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                {formData.avatar && (
                  <div className="mt-2">
                    <img 
                      src={formData.avatar} 
                      alt="Preview" 
                      className="h-16 w-16 object-cover rounded-full"
                    />
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Testimonial</label>
                <textarea
                  name="quote"
                  value={formData.quote}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <StarIcon
                        className={`h-8 w-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="featured">Featured Testimonial</label>
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(null);
                    setFormData({
                      name: '',
                      position: '',
                      company: '',
                      quote: '',
                      rating: 5,
                      avatar: '',
                      featured: false
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className={`bg-white rounded-lg shadow-md p-6 ${testimonial.featured ? 'border-2 border-primary' : ''}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}{testimonial.company && `, ${testimonial.company}`}
                  </p>
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
              
              <blockquote className="text-gray-600 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                {testimonial.featured && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="bg-primary text-white px-3 py-1 rounded hover:bg-secondary mr-3 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this testimonial?")) {
                        handleDelete(testimonial.id);
                      }
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-secondary mr-3 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageTestimonials;