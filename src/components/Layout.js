// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar will be displayed on every page */}
      <Outlet /> {/* Renders the matching child route */}
    </div>
  );
};

export default Layout;
