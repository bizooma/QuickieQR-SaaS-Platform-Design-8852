import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiZap, FiShield, FiTrendingUp } = FiIcons;

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Generate QR Codes
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                In Seconds
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create professional QR codes for your business, events, and campaigns. 
              Track performance, customize designs, and scale your reach effortlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center mb-20"
          >
            <Link
              to="/generator"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center space-x-3 group shadow-lg hover:shadow-xl"
            >
              <span>Start Creating</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-4 text-gray-600">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <SafeIcon icon={FiZap} className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-lg font-medium">Lightning Fast</span>
            </div>
            <div className="flex flex-col items-center space-y-4 text-gray-600">
              <div className="bg-cyan-100 p-4 rounded-2xl">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-cyan-600" />
              </div>
              <span className="text-lg font-medium">Secure & Reliable</span>
            </div>
            <div className="flex flex-col items-center space-y-4 text-gray-600">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-lg font-medium">Analytics Included</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;