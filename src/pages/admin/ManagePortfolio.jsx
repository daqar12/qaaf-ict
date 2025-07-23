import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const ManagePortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      description: 'A full-featured online store with payment integration',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      description: 'Secure banking application for iOS and Android',
      demoUrl: '#',
      codeUrl: '#',
      featured: false
    }
  ]);

  const [isEditing, setIsEditing] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Web',
    image: '',
    description: '',
    demoUrl: '',
    codeUrl: '',
    featured: false
  });

  const categories = ['Web', 'Mobile', 'SaaS', 'Design'];

  const handleEdit = (item) => {
    setIsEditing(item.id);
    setFormData({
      title: item.title,
      category: item.category,
      image: item.image,
      description: item.description,
      demoUrl: item.demoUrl,
      codeUrl: item.codeUrl,
      featured: item.featured
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPortfolioItems(portfolioItems.map(item => 
        item.id === isEditing ? { ...item, ...formData } : item
      ));
    } else {
      const newItem = {
        id: Math.max(...portfolioItems.map(item => item.id)) + 1,
        ...formData
      };
      setPortfolioItems([...portfolioItems, newItem]);
    }
    setIsEditing(null);
    setFormData({
      title: '',
      category: 'Web',
      image: '',
      description: '',
      demoUrl: '',
      codeUrl: '',
      featured: false
    });
  };

  const handleDelete = (id) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Portfolio</h1>
          <button 
            onClick={() => setIsEditing('new')}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Add New Item
          </button>
        </div>
        
        {(isEditing === 'new' || isEditing) && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {isEditing === 'new' ? 'Add New Portfolio Item' : 'Edit Portfolio Item'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
                {formData.image && (
                  <div className="mt-2">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Demo URL</label>
                  <input
                    type="url"
                    name="demoUrl"
                    value={formData.demoUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Code URL</label>
                  <input
                    type="url"
                    name="codeUrl"
                    value={formData.codeUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
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
                <label htmlFor="featured">Featured Project</label>
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
                      title: '',
                      category: 'Web',
                      image: '',
                      description: '',
                      demoUrl: '',
                      codeUrl: '',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full mb-3">
                  {item.category}
                </span>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-primary text-white px-3 py-1 rounded hover:bg-secondary mr-3 transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                      if (window.confirm("Are you sure you want to delete this portfolio ?")) {
                        handleDelete(item.id);
                      }
                    }}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-secondary mr-3 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagePortfolio;