"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import RecipeCard from '@/components/recipeCard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home () {
  const [searchTerm, setSearchTerm] = useState('');
  const pathname = usePathname();

  const recipes = [
    { id: 1, name: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, name: 'Chicken Curry', description: 'A spicy and savory chicken curry.' },
    // Add more recipes here...
  ];

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <Link href="/books/createBook">
          <Button className="flex-1">Create Recipe Book</Button>
        </Link>
        <Link href="/recipes/createRecipe">
          <Button className="flex-1">Create Recipe</Button>
        </Link>
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