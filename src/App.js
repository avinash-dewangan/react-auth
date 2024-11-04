import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

const App = () => {
    // Function to check if the user is authenticated
    const isAuthenticated = () => {
        return localStorage.getItem('isAuthenticated') === 'true';
    };
  
    const router = createBrowserRouter([
       {
        element: <Layout />, // Layout with Navbar for all child routes
        children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/login',
            element: isAuthenticated() ? <Navigate to="/dashboard" /> : <Login /> // Redirect if logged in
        },
        {
            path: '/dashboard',
            element: (
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard />
                </ProtectedRoute>
            ),
        },
    ]}
    ]);

    return <RouterProvider router={router} />
   

};

export default App;
