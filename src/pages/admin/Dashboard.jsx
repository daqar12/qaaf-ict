import React from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API
  const stats = [
    { name: 'Total Services', value: '8', change: '+2', changeType: 'positive' },
    { name: 'Portfolio Items', value: '24', change: '+5', changeType: 'positive' },
    { name: 'Team Members', value: '6', change: '0', changeType: 'neutral' },
    { name: 'Testimonials', value: '15', change: '+3', changeType: 'positive' },
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium">{stat.name}</h3>
              <div className="flex items-baseline mt-2">
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.change !== '0' && (
                  <span className={`ml-2 text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start pb-4 border-b border-gray-100">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p className="font-medium">New service added</p>
                <p className="text-sm text-gray-500">Web Development service was added 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start pb-4 border-b border-gray-100">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Portfolio updated</p>
                <p className="text-sm text-gray-500">E-commerce project was updated 5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;