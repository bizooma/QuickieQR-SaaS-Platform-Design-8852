import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiTwitter, FiLinkedin, FiGithub, FiMail } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2.5 rounded-xl">
                <SafeIcon icon={FiZap} className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Quickie QR
              </span>
            </Link>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              The fastest way to create, customize, and track QR codes for your business. 
              Join thousands of companies using Quickie QR to connect with their customers.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <SafeIcon icon={FiTwitter} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <SafeIcon icon={FiGithub} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <SafeIcon icon={FiMail} className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/generator" className="text-gray-600 hover:text-gray-900 transition-colors">QR Generator</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Quickie QR. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;