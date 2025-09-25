import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Button from '../components/Button';
import { PlusIcon } from '@heroicons/react/24/solid';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="py-10">
          <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
                    <p className="mt-1 text-lg text-gray-500">Welcome back, {user?.name}!</p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <Button href="/items/new">
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        List a New Item
                    </Button>
                </div>
            </div>
          </header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            {/* Placeholder for user's items and bids */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">My Items for Sale</h3>
                    <p className="text-gray-600">You have no active items for sale. List one today!</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">My Active Bids</h3>
                    <p className="text-gray-600">You have not placed any bids yet. Browse auctions to get started!</p>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
