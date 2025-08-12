import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';

const { FiZap } = FiIcons;

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <Link to="/" className="inline-flex items-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2.5 rounded-xl">
              <SafeIcon icon={FiZap} className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Quickie QR
            </span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </motion.div>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;