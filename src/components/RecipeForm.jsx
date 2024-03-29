import { useRecipeContext } from "./RecipesContext";

const RecipeForm = () => {
  const {
    recipeName,
    setRecipeName,
    ingredients,
    setIngredients,
    recipeDescription,
    setRecipeDescription,
    recipes,
    setRecipes,
  } = useRecipeContext();

  const handleIngredientChange = (id, event) => {
    const newIngredients = ingredients.map((ingredient) =>
      ingredient.id === id
        ? { ...ingredient, [event.target.name]: event.target.value }
        : ingredient
    );
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    const newIngredient = { id: Date.now(), name: "", unit: "g", quantity: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: recipeName,
      ingredients: ingredients,
      recipe: recipeDescription,
    };
    setRecipes([...recipes, newRecipe]);
    setRecipeName("");
    setIngredients([{ name: "", unit: "", quantity: "" }]);
    setRecipeDescription("");
    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        placeholder="name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
      <h3>Ingredients</h3>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <input
            type="text"
            name="name"
            value={ingredient.name}
            placeholder="ingredient"
            onChange={(event) => handleIngredientChange(ingredient.id, event)}
            required
          />
          <input
            type="number"
            min={0}
            name="quantity"
            value={ingredient.quantity}
            placeholder="quantity"
            onChange={(event) => handleIngredientChange(ingredient.id, event)}
          />
          <select
            name="unit"
            value={ingredient.unit}
            id="selectUnit"
            onChange={(event) => handleIngredientChange(ingredient.id, event)}
          >
            <option value="g">g</option>
            <option value="ml">ml</option>
            <option value="amount">amount</option>
          </select>
        </div>
      ))}
      <button onClick={addIngredient}>Add</button>
      <h3>Recipe</h3>
      <input
        type="text"
        placeholder="recipe"
        value={recipeDescription}
        onChange={(e) => setRecipeDescription(e.target.value)}
      />
      <br />
      <input type="submit" value="Add recipe" />
    </form>
  );
};

export default RecipeForm;
