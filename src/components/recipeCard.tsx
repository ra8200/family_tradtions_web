import { Card } from '@/components/ui/card';

const RecipeCard = ({ name, description }) => {
  return (
    <Card className="mb-4">
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default RecipeCard;
