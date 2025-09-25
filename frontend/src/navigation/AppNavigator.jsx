import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import DashboardPage from '../screens/DashboardPage';
import PrivateRoute from '../components/PrivateRoute';

const AppNavigator = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* TODO: Add auction list and detail pages here */}
      <Route path="/auctions" element={<div><h1>All Auctions</h1><p>Coming Soon!</p></div>} />
      <Route path="/auctions/:id" element={<div><h1>Auction Detail</h1><p>Coming Soon!</p></div>} />

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* TODO: Add create item page here */}
        <Route path="/items/new" element={<div><h1>List New Item</h1><p>Coming Soon!</p></div>} />
      </Route>
    </Routes>
  );
};

export default AppNavigator;
