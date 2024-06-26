import { useRecipeContext } from "./RecipesContext";

const RecipeForm = () => {
  const {
    recipeName,
    setRecipeName,
    ingredients,
    setIngredients,
    recipeDescription,
    setRecipeDescription,
    API_URL,
    refreshRecipes,
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
    const newIngredient = { id: Date.now(), name: "", unit: " ", quantity: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", recipeName);
    data.append("recipe", recipeDescription);
    ingredients.forEach((ingredient, index) => {
      data.append(`ingredients[${index}][name]`, ingredient.name);
      data.append(`ingredients[${index}][quantity]`, ingredient.quantity);
      data.append(`ingredients[${index}][unit]`, ingredient.unit);
    });

    fetch(API_URL + "recipeapi/recipeproject/AddRecipes", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        refreshRecipes();
      });
    setRecipeName("");
    setIngredients([{ name: "", unit: "", quantity: "" }]);
    setRecipeDescription("");
  };
  const removeIngredients = (id) => {
    const reducedIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredients(reducedIngredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold text-lg">Name</h3>
      <input
        type="text"
        placeholder="name"
        value={recipeName}
        className="rounded-lg p-1 mb-3"
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
      <h3 className="font-bold text-lg">Ingredients</h3>
      {ingredients.map((ingredient) => (
        <div className="flex mb-2" key={ingredient.id}>
          <input
            type="text"
            name="name"
            value={ingredient.name}
            placeholder="ingredient"
            className="w-full rounded-lg p-1 mr-2"
            onChange={(event) => handleIngredientChange(ingredient.id, event)}
            required
          />
          <input
            type="number"
            min={0}
            name="quantity"
            value={ingredient.quantity}
            placeholder="quantity"
            className="w-full rounded-lg p-1 mr-2"
            onChange={(event) => handleIngredientChange(ingredient.id, event)}
          />
          <select
            name="unit"
            value={ingredient.unit}
            id="selectUnit"
            className="w-1/2 rounded-lg p-1 mr-2"
            onChange={(event) => handleIngredientChange(ingredient.id, event)}
          >
            <option value="amount"> </option>
            <option value="g">g</option>
            <option value="ml">ml</option>
            <option value="tsp">tsp</option>
            <option value="tbsp">tbsp</option>
            <option value="glass">glass</option>
            <option value="piece">piece</option>
          </select>
          <button
            className="ml-1 scale-x-125 text-lg opacity-50 hover:opacity-100 hover:font-semibold"
            onClick={() => removeIngredients(ingredient.id)}
          >
            X
          </button>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          className=" p-1 px-4 bg-brownSugar w-1/3 text-white rounded-3xl opacity-75 hover:scale-105 hover:opacity-100"
          onClick={addIngredient}
        >
          Next ingredient
        </button>
      </div>

      <h3 className="font-bold text-lg">Recipe</h3>
      <textarea
        placeholder="recipe"
        value={recipeDescription}
        className=" w-full rounded-lg p-1 mb-3"
        onChange={(e) => setRecipeDescription(e.target.value)}
        rows={1}
      />
      <div className="flex justify-end">
        <input
          className="w-1/3 text-lg font-semibold p-2 px-4 bg-black text-white rounded-3xl hover:scale-105"
          type="submit"
          value="Add recipe"
        />
      </div>
    </form>
  );
};

export default RecipeForm;
