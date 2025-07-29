import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiZap } = FiIcons;

const Pricing = () => {
  const features = [
    "Unlimited QR code generation",
    "Real-time analytics & tracking",
    "Custom branding & colors",
    "Dynamic URL management",
    "Multiple export formats",
    "Global CDN delivery",
    "Mobile-optimized landing pages",
    "Priority customer support",
    "API access for developers",
    "Team collaboration tools"
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            One plan, all features included. No hidden fees, no surprises. 
            Start your free trial today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            
            <div className="text-center mb-10">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiZap} className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pro Plan</h3>
              <p className="text-gray-600">Everything you need to grow</p>
            </div>

            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-2">
                <span className="text-5xl font-bold text-gray-900">$9</span>
                <div className="text-left ml-2">
                  <div className="text-2xl font-bold text-gray-900">.95</div>
                  <div className="text-gray-600 text-sm">per month</div>
                </div>
              </div>
              <p className="text-gray-500 mt-2">Billed monthly, cancel anytime</p>
            </div>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 mb-6 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            
            <p className="text-center text-gray-500 text-sm">
              14-day free trial • No credit card required
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Need a custom solution for your enterprise?</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium underline">
            Contact our sales team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;