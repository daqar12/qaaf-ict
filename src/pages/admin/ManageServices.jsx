import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const ManageServices = () => {
  const [services, setServices] = useState([
    { id: 1, title: 'Web Development', description: 'Custom websites and dashboards', icon: '💻', active: true },
    { id: 2, title: 'Mobile App Development', description: 'iOS and Android solutions', icon: '📱', active: true },
    { id: 3, title: 'SaaS Solutions', description: 'Cloud-based applications', icon: '☁️', active: true },
    { id: 4, title: 'ICT Consulting', description: 'Digital transformation strategies', icon: '📊', active: false },
  ]);

  const [isEditing, setIsEditing] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', icon: '', active: true });

  const handleEdit = (service) => {
    setIsEditing(service.id);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      active: service.active
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
      setServices(services.map(s => 
        s.id === isEditing ? { ...s, ...formData } : s
      ));
    } else {
      const newService = {
        id: Math.max(...services.map(s => s.id)) + 1,
        ...formData
      };
      setServices([...services, newService]);
    }
    setIsEditing(null);
    setFormData({ title: '', description: '', icon: '', active: true });
  };

  const handleDelete = (id) => {
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Services</h1>
          <button 
            onClick={() => setIsEditing('new')}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Add New Service
          </button>
        </div>
        
        {(isEditing === 'new' || isEditing) && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {isEditing === 'new' ? 'Add New Service' : 'Edit Service'}
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
                  <label className="block text-gray-700 mb-2">Icon</label>
                  <input
                    type="text"
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
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
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="active"
                  name="active"
                  checked={formData.active}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="active">Active</label>
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
                    setFormData({ title: '', description: '', icon: '', active: true });
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl">{service.icon}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{service.title}</td>
                  <td className="px-6 py-4">{service.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      service.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {service.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(service)}
                    className="bg-primary text-white px-3 py-1 rounded hover:bg-secondary mr-3 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this service?")) {
                        handleDelete(service.id);
                      }
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 transition duration-300"
                  >
                    Delete
                  </button>
                </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;