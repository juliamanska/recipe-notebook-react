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
        className="p-1 px-2 mt-7 w-full text-lg rounded-xl border focus:border-brownSugar"
        onChange={(e) => setSearchValue(e.target.value)}
        type="search"
        id="mySearch"
        placeholder="Search the recipe"
      />
    </form>
  );
};

export default SearchRecipes;
