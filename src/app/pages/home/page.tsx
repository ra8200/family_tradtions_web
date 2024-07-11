import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import RecipeCard from '@/components/recipeCard';

export default function HomePage () {
  const [searchTerm, setSearchTerm] = useState('');

  const recipes = [
    { id: 1, name: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, name: 'Chicken Curry', description: 'A spicy and savory chicken curry.' },
    // Add more recipes here...
  ];

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <Button className="flex-1">Create Recipe Book</Button>
        <Button className="flex-1">Create Recipe</Button>
      </div>
      <div className="mb-4">
        <Input
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} />
        ))}
      </div>
    </div>
  );
};