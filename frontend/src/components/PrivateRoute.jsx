import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <ArrowPathIcon className="h-8 w-8 text-blue-600 animate-spin" />
        </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
