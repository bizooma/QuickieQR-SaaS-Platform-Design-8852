import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import SafeIcon from '../../common/SafeIcon';

const { FiMail, FiAlertCircle, FiLoader, FiCheckCircle } = FiIcons;

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to send reset instructions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reset Your Password</h2>
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
          <div className="flex items-center">
            <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-red-500 mr-3" />
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}
      
      {success ? (
        <div className="text-center">
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
            <div className="flex items-center">
              <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
              <p className="text-green-700 text-sm">Password reset instructions have been sent to your email.</p>
            </div>
          </div>
          
          <p className="mb-6 text-gray-600">
            Please check your inbox and follow the instructions to reset your password.
          </p>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus:outline-none font-medium"
          >
            Return to Login
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              We'll send you instructions to reset your password.
            </p>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
            >
              {isLoading ? (
                <>
                  <SafeIcon icon={FiLoader} className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Sending instructions...
                </>
              ) : (
                'Send Reset Instructions'
              )}
            </button>
          </div>
          
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Back to login
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ResetPasswordForm;