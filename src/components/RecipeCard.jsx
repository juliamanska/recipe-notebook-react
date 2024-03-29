import AlertDialogRemove from "./AlertDialogRemove";
import { useRecipeContext } from "./RecipesContext";

const RecipeCard = ({ recipe }) => {
  const { recipes, setRecipes } = useRecipeContext();

  const removeRecipe = (idToRemove) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== idToRemove);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div
      key={recipe.id}
      className=" relative m-5 lg:mx-48 p-6 bg-isabelline shadow-lg rounded"
    >
      <h3 className="text-2xl font-bold text-center mb-4">{recipe.name}</h3>

      <hr />
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients.map((ingredient, idx) => (
          <li key={idx} className="list-disc ml-6 mb-4">
            {ingredient.quantity} {ingredient.unit}
          </li>
        ))}
      </ul>
      <p>Recipe:</p>
      <p className="break-words ml-4">{recipe.recipe}</p>
      <button
        className="absolute right-3 top-2 opacity-50 hover:opacity-100 hover:font-semibold"
        onClick={() => removeRecipe(recipe.id)}
      >
        Remove recipe
      </button>
    </div>
  );
};

export default RecipeCard;
