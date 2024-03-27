import { useRecipeContext } from "./RecipesContext";

const RecipesCollection = () => {
  const { recipeName, ingredients, recipeDescription } = useRecipeContext();

  const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

  const newRecipe = {
    name: recipeName,
    ingredients: ingredients,
    recipe: recipeDescription,
  };
  const updatedRecipes = [...existingRecipes, newRecipe];

  localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

  return (
    <div>
      <h2>Recipes</h2>
      <div className="recipe-cards">
        {updatedRecipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p>Ingredients:</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}: {ingredient.quantity} {ingredient.unit}
                </li>
              ))}
            </ul>
            <p>Recipe:</p>
            <p>{recipe.recipe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesCollection;
