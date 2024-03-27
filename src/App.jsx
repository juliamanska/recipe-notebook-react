import Header from "./components/Header";
import RecipeForm from "./components/RecipeForm";
import { RecipeProvider } from "./components/RecipesContext";

function App() {
  return (
    <RecipeProvider>
      <>
        <Header />
        <RecipeForm />
      </>
    </RecipeProvider>
  );
}

export default App;
