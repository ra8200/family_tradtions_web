const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function fetchRecipeBooks() {
  const response = await fetch(`${API_URL}/recipeBooks`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipe books');
  }
  return response.json();
}
