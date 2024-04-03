import { useEffect, useState } from "react";
import { useRecipeContext } from "./RecipesContext";

const SearchRecipes = () => {
  const { recipes, setFilteredRecipes } = useRecipeContext();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.match(new RegExp(`${searchValue}`, "gi"))
    );
    setFilteredRecipes(filteredRecipes);
  }, [searchValue, recipes]);

  return (
    <form>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="search"
        id="mySearch"
        placeholder="Search the recipe"
      />
    </form>
  );
};

export default SearchRecipes;
