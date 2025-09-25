import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center text-2xl font-bold mb-4">
              <BookOpenIcon className="h-8 w-8 mr-2"/>
              RecipeVerse
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Share, discover, and cook amazing recipes from a community of food lovers.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/recipes" className="text-gray-400 hover:text-white transition-colors">Explore Recipes</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RecipeVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
