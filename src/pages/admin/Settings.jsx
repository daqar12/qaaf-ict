import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteTitle: 'Qaaf ICT Solutions',
    siteDescription: 'Empowering Your Digital Future',
    primaryColor: '#007BFF',
    accentColor: '#00CFFF',
    maintenanceMode: false,
    googleAnalyticsId: '',
    contactEmail: 'info@qaafict.com',
    seoKeywords: 'ICT, Technology, Web Development, Mobile Apps'
  });

  const [currentTab, setCurrentTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const tabs = [
    { id: 'general', name: 'General' },
    { id: 'appearance', name: 'Appearance' },
    { id: 'seo', name: 'SEO' },
    { id: 'analytics', name: 'Analytics' }
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    currentTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              {currentTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Site Title</label>
                    <input
                      type="text"
                      name="siteTitle"
                      value={settings.siteTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Site Description</label>
                    <textarea
                      name="siteDescription"
                      value={settings.siteDescription}
                      onChange={handleChange}
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={settings.contactEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="maintenanceMode"
                      name="maintenanceMode"
                      checked={settings.maintenanceMode}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="maintenanceMode">Maintenance Mode</label>
                  </div>
                </div>
              )}
              
              {currentTab === 'appearance' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Primary Color</label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        name="primaryColor"
                        value={settings.primaryColor}
                        onChange={handleChange}
                        className="w-16 h-10 mr-4"
                      />
                      <span>{settings.primaryColor}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Accent Color</label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        name="accentColor"
                        value={settings.accentColor}
                        onChange={handleChange}
                        className="w-16 h-10 mr-4"
                      />
                      <span>{settings.accentColor}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {currentTab === 'seo' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">SEO Keywords</label>
                    <textarea
                      name="seoKeywords"
                      value={settings.seoKeywords}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Comma separated keywords"
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">Separate keywords with commas</p>
                  </div>
                </div>
              )}
              
              {currentTab === 'analytics' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Google Analytics ID</label>
                    <input
                      type="text"
                      name="googleAnalyticsId"
                      value={settings.googleAnalyticsId}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="UA-XXXXX-Y"
                    />
                  </div>
                </div>
              )}
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <button
                  type="submit"
                  disabled={isSaving}
                  className={`px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors ${
                    isSaving ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSaving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;