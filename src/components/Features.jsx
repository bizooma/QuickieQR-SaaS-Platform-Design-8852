import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBarChart3, FiPalette, FiDownload, FiLink, FiSmartphone, FiGlobe } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiBarChart3,
      title: "Real-time Analytics",
      description: "Track scans, locations, devices, and user behavior with detailed insights and reports."
    },
    {
      icon: FiPalette,
      title: "Custom Designs",
      description: "Brand your QR codes with custom colors, logos, and frames to match your identity."
    },
    {
      icon: FiDownload,
      title: "Multiple Formats",
      description: "Download in PNG, SVG, PDF, or EPS formats for any use case or print requirement."
    },
    {
      icon: FiLink,
      title: "Dynamic URLs",
      description: "Update destination URLs without regenerating codes. Perfect for campaigns and events."
    },
    {
      icon: FiSmartphone,
      title: "Mobile Optimized",
      description: "Landing pages automatically optimize for the scanning device and screen size."
    },
    {
      icon: FiGlobe,
      title: "Global CDN",
      description: "Lightning-fast loading worldwide with our distributed content delivery network."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From basic QR generation to advanced analytics and branding, 
            we've got all the tools you need to succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={feature.icon} className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;