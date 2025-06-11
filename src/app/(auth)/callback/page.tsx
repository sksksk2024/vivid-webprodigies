import { onAuthenticateUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react';

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser();

  if (auth.status === 200 || auth.status === 201) {
    // Redirect to the dashboard or home page
    redirect('/dashboard');
  } else if (
    auth.status === 403 ||
    auth.status === 400 ||
    auth.status === 404 ||
    auth.status === 500
  ) {
    // Redirect to the error page
    redirect('/sign-in');
  }
  return <div>AuthCallbackPage</div>;
};

export default AuthCallbackPage;
