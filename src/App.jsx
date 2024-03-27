import Header from "./components/Header";
import RecipesCollection from "./components/RecipesCollection";
import { RecipeProvider } from "./components/RecipesContext";

function App() {
  return (
    <RecipeProvider>
      <>
        <Header />
        <RecipesCollection />
      </>
    </RecipeProvider>
  );
}

export default App;
