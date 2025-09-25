import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import DashboardPage from '../screens/DashboardPage';
import PrivateRoute from '../components/PrivateRoute';

// Added these recipe pages
import RecipesPage from '../screens/RecipesPage';
import RecipeDetailPage from '../screens/RecipeDetailPage';
import RecipeFormPage from '../screens/RecipeFormPage';

const AppNavigator = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Public Recipe Routes */}
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailPage />} />

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/recipes/new" element={<RecipeFormPage />} />
        <Route path="/recipes/edit/:id" element={<RecipeFormPage />} />
      </Route>
    </Routes>
  );
};

export default AppNavigator;
