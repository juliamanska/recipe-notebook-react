import DialogRecipeForm from "./DialogRecipeForm";
import logo from "../assets/icons/logo.svg";
import SearchRecipes from "./SearchRecipes";

const Header = () => {
  return (
    <header className="md:flex justify-between bg-isabelline p-10 py-5 mx-5 lg:mx-48 rounded shadow-xl">
      <div className="md:flex gap-7">
        <img className="max-h-20" src={logo} /> <SearchRecipes />
      </div>
      <DialogRecipeForm />
    </header>
  );
};

export default Header;
