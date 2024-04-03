import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([
    { name: "", unit: "", quantity: "" },
  ]);
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  return (
    <RecipeContext.Provider
      value={{
        recipeName,
        setRecipeName,
        ingredients,
        setIngredients,
        recipeDescription,
        setRecipeDescription,
        recipes,
        setRecipes,
        filteredRecipes,
        setFilteredRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
