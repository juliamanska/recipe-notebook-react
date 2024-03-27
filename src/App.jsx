import Header from "./components/Header";
import RecipeForm from "./components/RecipeForm";
import RecipesCollection from "./components/RecipesCollection";
import { RecipeProvider } from "./components/RecipesContext";

function App() {
  return (
    <RecipeProvider>
      <>
        <Header />
        <RecipeForm />
        <RecipesCollection />
      </>
    </RecipeProvider>
  );
}

export default App;
