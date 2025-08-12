import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import UpdatePasswordForm from '../components/Auth/UpdatePasswordForm';

const UpdatePasswordPage = () => {
  return (
    <AuthLayout title="Set New Password">
      <UpdatePasswordForm />
    </AuthLayout>
  );
};

export default UpdatePasswordPage;