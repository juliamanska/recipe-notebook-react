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

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index][event.target.name] = event.target.value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", unit: "g", quantity: "" }]);
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
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={ingredient.name}
            placeholder="ingredient"
            onChange={(event) => handleIngredientChange(index, event)}
          />
          <input
            type="number"
            name="quantity"
            value={ingredient.quantity}
            placeholder="quantity"
            onChange={(event) => handleIngredientChange(index, event)}
          />
          <select
            name="unit"
            value={ingredient.unit}
            id="selectUnit"
            onChange={(event) => handleIngredientChange(index, event)}
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
