import { useEffect } from "react";
import { useRecipeContext } from "./RecipesContext";
import RecipeCard from "./RecipeCard";

const RecipesCollection = () => {
  const { filteredRecipes, refreshRecipes } = useRecipeContext();

  useEffect(() => {
    refreshRecipes();
  }, []);

  return (
    <div className="recipe-cards">
      {filteredRecipes.map((recipe, index) => (
        <RecipeCard key={index} index={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesCollection;
