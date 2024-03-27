import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([
    { name: "", unit: "", quantity: "" },
  ]);
  const [recipeDescription, setRecipeDescription] = useState("");

  return (
    <RecipeContext.Provider
      value={{
        recipeName,
        setRecipeName,
        ingredients,
        setIngredients,
        recipeDescription,
        setRecipeDescription,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
