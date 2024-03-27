import { useRecipeContext } from "./RecipesContext";

const RecipeCard = ({ index, recipe }) => {
  const { recipes, setRecipes } = useRecipeContext();

  const removeRecipe = (indexToRemove) => {
    const updatedRecipes = recipes.filter((_, idx) => idx !== indexToRemove);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div>
      <div key={index} className="recipe-card">
        <h3>{recipe.name}</h3>
        <p>Ingredients:</p>
        <ul>
          {recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>
              {ingredient.name}: {ingredient.quantity} {ingredient.unit}
            </li>
          ))}
        </ul>
        <p>Recipe:</p>
        <p>{recipe.recipe}</p>
        <button onClick={() => removeRecipe(index)}>X</button>
      </div>
    </div>
  );
};

export default RecipeCard;
