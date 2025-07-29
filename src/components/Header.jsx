import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiUser, FiMenu, FiX } = FiIcons;

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2.5 rounded-xl">
              <SafeIcon icon={FiZap} className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Quickie QR
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link to="/generator" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Generator
            </Link>
            {isLoggedIn && (
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Dashboard
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-6">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => setIsLoggedIn(true)}
                  className="hidden sm:block text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => setIsLoggedIn(true)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </button>
                <button 
                  className="md:hidden text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <SafeIcon icon={mobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2.5 rounded-full">
                  <SafeIcon icon={FiUser} className="w-5 h-5 text-white" />
                </div>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
        >
          <div className="px-6 py-6 space-y-4">
            <Link 
              to="/" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/generator" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Generator
            </Link>
            {isLoggedIn && (
              <Link 
                to="/dashboard" 
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {!isLoggedIn && (
              <button 
                onClick={() => {
                  setIsLoggedIn(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Sign In
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;