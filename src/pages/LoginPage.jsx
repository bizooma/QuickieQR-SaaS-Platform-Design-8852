import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout title="Sign In to Your Account">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;