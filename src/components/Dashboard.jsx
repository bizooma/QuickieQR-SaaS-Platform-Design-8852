import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBarChart3, FiEye, FiDownload, FiCalendar, FiMapPin, FiSmartphone, FiPlus } = FiIcons;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total QR Codes', value: '24', icon: FiBarChart3, color: 'text-blue-600' },
    { label: 'Total Scans', value: '1,847', icon: FiEye, color: 'text-cyan-600' },
    { label: 'This Month', value: '312', icon: FiCalendar, color: 'text-green-600' },
    { label: 'Downloads', value: '156', icon: FiDownload, color: 'text-orange-600' }
  ];

  const recentCodes = [
    { id: 1, name: 'Product Launch Campaign', scans: 234, created: '2024-01-15', type: 'URL' },
    { id: 2, name: 'Restaurant Menu', scans: 89, created: '2024-01-14', type: 'URL' },
    { id: 3, name: 'Event Registration', scans: 156, created: '2024-01-13', type: 'URL' },
    { id: 4, name: 'Contact Card', scans: 67, created: '2024-01-12', type: 'vCard' },
    { id: 5, name: 'WiFi Access', scans: 45, created: '2024-01-11', type: 'WiFi' }
  ];

  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage your QR codes and track performance</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <SafeIcon icon={stat.icon} className={`w-8 h-8 ${stat.color}`} />
                </div>
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl">
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span>Create New QR</span>
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200">
            Export Data
          </button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="border-b border-gray-200">
            <nav className="flex space-x-12">
              {['overview', 'analytics', 'codes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Recent Activity */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-8">Recent QR Codes</h3>
                <div className="space-y-6">
                  {recentCodes.slice(0, 5).map((code) => (
                    <div key={code.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="text-gray-900 font-medium mb-1">{code.name}</h4>
                        <p className="text-gray-500 text-sm">{code.type} • {code.created}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-600 font-semibold text-lg">{code.scans}</p>
                        <p className="text-gray-500 text-sm">scans</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-8">Quick Insights</h3>
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <SafeIcon icon={FiMapPin} className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Top Location</span>
                    </div>
                    <span className="text-gray-900 font-semibold">New York, NY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-cyan-100 p-3 rounded-xl">
                        <SafeIcon icon={FiSmartphone} className="w-6 h-6 text-cyan-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Top Device</span>
                    </div>
                    <span className="text-gray-900 font-semibold">iPhone</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-xl">
                        <SafeIcon icon={FiCalendar} className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Best Day</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Tuesday</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">Analytics Overview</h3>
              <div className="h-64 flex items-center justify-center text-gray-500">
                <p>Analytics charts would be displayed here</p>
              </div>
            </div>
          )}

          {activeTab === 'codes' && (
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">All QR Codes</h3>
              <div className="space-y-6">
                {recentCodes.map((code) => (
                  <div key={code.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">{code.name}</h4>
                      <p className="text-gray-500 text-sm">{code.type} • Created {code.created}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-blue-600 font-semibold text-lg">{code.scans}</p>
                        <p className="text-gray-500 text-sm">scans</p>
                      </div>
                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <SafeIcon icon={FiDownload} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;