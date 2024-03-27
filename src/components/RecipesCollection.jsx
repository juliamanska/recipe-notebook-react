import { useEffect } from "react";
import { useRecipeContext } from "./RecipesContext";
import RecipeCard from "./RecipeCard";

const RecipesCollection = () => {
  const { recipes, setRecipes } = useRecipeContext();

  useEffect(() => {
    const recipeStorage = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(recipeStorage);
  }, [setRecipes]);

  return (
    <div>
      <div className="recipe-cards">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} index={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesCollection;
