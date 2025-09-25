import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

const Header = () => {
  const { user, logout } = useAuth();

  const navLinkClasses = ({ isActive }) => 
    `text-base font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              BidHub
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/auctions" className={navLinkClasses}>Auctions</NavLink>
              {user && <NavLink to="/dashboard" className={navLinkClasses}>Dashboard</NavLink>}
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className='hidden sm:inline text-sm text-gray-600'>Welcome, {user.name}</span>
                <Button variant="outline" size="sm" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button href="/login" variant="secondary" size="sm">Sign In</Button>
                <Button href="/register" size="sm">Get Started</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
