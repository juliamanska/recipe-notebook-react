const RecipeForm = () => {
  return (
    <form>
      <h3>Name</h3>
      <input type="text" placeholder="name" required />
      <h3>Ingredients</h3>
      <input type="text" placeholder="ingredients" required />
      <select name="selectUnit" id="selectUnit">
        <option value="g">g</option>
        <option value="ml">ml</option>
        <option value="amount">amount</option>
      </select>
      <h3>Recipe</h3>
      <input type="text" placeholder="recipe" required />
      <br />
      <input type="submit" value="Add recipe" />
    </form>
  );
};

export default RecipeForm;
