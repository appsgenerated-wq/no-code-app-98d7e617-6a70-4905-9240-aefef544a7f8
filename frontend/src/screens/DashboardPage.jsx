import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import apiService from '../services/apiService';
import Button from '../components/Button';
import Header from '../components/Header';
import { PlusIcon } from '@heroicons/react/24/solid';
import Card from '../components/Card';

const DashboardPage = () => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMyRecipes = async () => {
      if (!user) return;
      try {
        setLoading(true);
        const data = await apiService.getMyRecipes();
        setRecipes(data || []);
      } catch (err) {
        setError('Failed to fetch your recipes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyRecipes();
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
        try {
            await apiService.deleteRecipe(id);
            setRecipes(recipes.filter(r => r.id !== id));
        } catch (err) {
            setError('Failed to delete recipe.');
        }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Recipes</h1>
            <Button href="/recipes/new">
                <PlusIcon className="h-5 w-5 mr-2"/>
                Add Recipe
            </Button>
        </div>

        {loading && <p>Loading recipes...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && recipes.length === 0 && (
            <div className="text-center bg-white p-12 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium text-gray-900">No recipes yet!</h3>
                <p className="mt-2 text-gray-500">Get started by adding your first recipe.</p>
                <div className="mt-6">
                    <Button href="/recipes/new">
                        <PlusIcon className="h-5 w-5 mr-2"/>
                        Add Your First Recipe
                    </Button>
                </div>
            </div>
        )}

        {!loading && recipes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map(recipe => (
                    <Card key={recipe.id} className="flex flex-col">
                        <div className="flex-grow">
                            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">{recipe.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3">{recipe.description}</p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-200 flex justify-end space-x-2">
                            <Button href={`/recipes/edit/${recipe.id}`} variant="secondary" size="sm">Edit</Button>
                            <Button onClick={() => handleDelete(recipe.id)} variant="danger" size="sm">Delete</Button>
                        </div>
                    </Card>
                ))}
            </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
