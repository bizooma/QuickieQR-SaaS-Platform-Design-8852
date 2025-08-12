import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap } = FiIcons;

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-xl mb-6">
          <SafeIcon icon={FiZap} className="w-12 h-12 text-white" />
        </div>
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="w-16 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
        />
        
        <p className="mt-6 text-gray-600 font-medium">Loading...</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;