import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../state/contexts/Auth.Context';

const ProtectedLayout: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error('ProtectedLayout debe estar dentro del AuthProvider');
  }

  const { user } = authContext;

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
