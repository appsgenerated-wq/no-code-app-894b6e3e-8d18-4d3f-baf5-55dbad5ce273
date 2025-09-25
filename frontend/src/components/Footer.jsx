import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-2xl font-bold text-white">BidHub</h3>
            <p className="text-gray-400 text-base">The best place to find unique items and great deals through online auctions.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Auctions</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/auctions" className="text-base text-gray-300 hover:text-white">Browse All</Link></li>
                  <li><Link to="/auctions/new" className="text-base text-gray-300 hover:text-white">List an Item</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Account</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/dashboard" className="text-base text-gray-300 hover:text-white">My Dashboard</Link></li>
                  <li><Link to="/login" className="text-base text-gray-300 hover:text-white">Login</Link></li>
                  <li><Link to="/register" className="text-base text-gray-300 hover:text-white">Register</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-gray-300 hover:text-white">About</Link></li>
                  <li><Link to="/contact" className="text-base text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2024 BidHub, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
