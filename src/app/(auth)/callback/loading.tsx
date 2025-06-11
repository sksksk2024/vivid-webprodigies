import { Loader2 } from 'lucide-react';
import React from 'react';

const AuthLoading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default AuthLoading;
