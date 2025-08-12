import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import ResetPasswordForm from '../components/Auth/ResetPasswordForm';

const ResetPasswordPage = () => {
  return (
    <AuthLayout title="Reset Your Password">
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;