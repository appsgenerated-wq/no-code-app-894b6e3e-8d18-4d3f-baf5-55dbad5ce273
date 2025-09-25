import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { BoltIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <BoltIcon className="h-8 w-8 text-blue-600" />,
      title: 'Live Bidding Action',
      description: 'Experience the thrill of real-time auctions. Place bids instantly and never miss a deal.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
      title: 'Secure & Trusted',
      description: 'Our platform ensures secure transactions and verified sellers for a worry-free experience.'
    },
    {
      icon: <ScaleIcon className="h-8 w-8 text-blue-600" />,
      title: 'Fair & Transparent',
      description: 'All bids are public, and the highest bidder wins. A level playing field for everyone.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero 
          title="The Ultimate Online Auction Marketplace"
          subtitle="Discover rare collectibles, unique items, and unbeatable deals. Start bidding or selling today with BidHub."
          primaryAction={user ? { text: 'Go to Dashboard', href: '/dashboard' } : { text: 'Start Bidding', href: '/register' }}
          secondaryAction={{ text: 'Browse Auctions', href: '/auctions' }}
        />
        
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Why BidHub?</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                A better way to buy and sell
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                BidHub combines cutting-edge technology with a user-friendly interface to create the best auction experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ready to find your next treasure?</h2>
                <p className="mt-4 text-xl text-gray-600">Join thousands of satisfied users. Sign up for free and start your auction journey today.</p>
                <div className="mt-8">
                    <Button href="/register" size="lg">Create Your Free Account</Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
