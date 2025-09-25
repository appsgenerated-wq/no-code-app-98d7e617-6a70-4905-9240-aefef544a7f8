import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../context/AuthContext';
import { BookOpenIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-2xl font-bold text-blue-600">
              <BookOpenIcon className="h-8 w-8 mr-2"/>
              RecipeVerse
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/recipes" className="text-gray-600 hover:text-gray-900 transition-colors">Explore Recipes</Link>
            {user && <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">My Recipes</Link>}
          </nav>
          
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <span className='hidden sm:inline text-gray-700'>Welcome, {user.name}!</span>
                <Button variant="secondary" size="sm" onClick={logout}>Logout</Button>
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
