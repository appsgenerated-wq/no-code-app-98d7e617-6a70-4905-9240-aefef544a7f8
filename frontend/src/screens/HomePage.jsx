import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { SparklesIcon, UsersIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
      title: 'Share Your Creations',
      description: 'Easily upload and share your favorite recipes with a community of food lovers.'
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
      title: 'Discover New Flavors',
      description: 'Explore a vast collection of recipes from around the world, for any occasion.'
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-blue-600" />,
      title: 'Join the Community',
      description: 'Connect with other home cooks, save your favorite recipes, and build your own cookbook.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero
          title="Share, Discover, and Cook" 
          subtitle="Welcome to RecipeVerse, the ultimate platform for food enthusiasts. Find your next favorite meal or share your own culinary masterpieces."
          primaryAction={{ text: 'Explore Recipes', href: '/recipes' }}
          secondaryAction={!user ? { text: 'Join for Free', href: '/register' } : { text: 'My Dashboard', href: '/dashboard' }}
        />

        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything You Need to Get Cooking</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">A perfect blend of community and utility for every home cook.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join RecipeVerse Today</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Start your culinary journey with us. It's free to join!</p>
            <div className="mt-8">
                <Button href="/register" size="lg">Create Your Account</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
