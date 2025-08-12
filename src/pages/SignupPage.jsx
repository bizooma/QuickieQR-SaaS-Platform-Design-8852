import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import SignupForm from '../components/Auth/SignupForm';

const SignupPage = () => {
  return (
    <AuthLayout title="Create Your Account">
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;