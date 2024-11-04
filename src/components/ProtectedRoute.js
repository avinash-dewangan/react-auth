import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

