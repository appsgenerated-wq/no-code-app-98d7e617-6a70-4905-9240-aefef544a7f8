import Manifest from '@mnfst/sdk';

const manifest = new Manifest();

const apiService = {
    // Recipe Methods
    getAllRecipes: async () => {
        return await manifest.from('recipes').read();
    },

    getMyRecipes: async () => {
        const user = await manifest.from('users').me();
        if (!user) throw new Error('Not authenticated');
        return await manifest.from('recipes').read({ filter: { 'author.id': user.id }});
    },

    getRecipeById: async (id) => {
        return await manifest.from('recipes').read(id);
    },

    createRecipe: async (recipeData) => {
        return await manifest.from('recipes').create(recipeData);
    },

    updateRecipe: async (id, recipeData) => {
        return await manifest.from('recipes').update(id, recipeData);
    },

    deleteRecipe: async (id) => {
        return await manifest.from('recipes').delete(id);
    }
};

export default apiService;
