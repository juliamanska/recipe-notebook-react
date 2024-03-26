import { useState } from "react";

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([
    { name: "", unit: "", quantity: "" },
  ]);

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index][event.target.name] = event.target.value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", unit: "g", quantity: "" }]);
  };

  return (
    <form>
      <h3>Name</h3>
      <input type="text" placeholder="name" required />
      <h3>Ingredients</h3>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={ingredient.name}
            placeholder="ingredient"
            onChange={(event) => handleIngredientChange(index, event)}
            required
          />
          <input
            type="number"
            name="quantity"
            value={ingredient.quantity}
            placeholder="quantity"
            onChange={(event) => handleIngredientChange(index, event)}
            required
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
      <input type="text" placeholder="recipe" required />
      <br />
      <input type="submit" value="Add recipe" />
    </form>
  );
};

export default RecipeForm;
