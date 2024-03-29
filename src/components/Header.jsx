import DialogRecipeForm from "./DialogRecipeForm";
import logo from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between bg-isabelline p-10 py-5 mx-5 lg:mx-48 rounded shadow-xl">
      <img className="max-h-20" src={logo} /> <DialogRecipeForm />
    </header>
  );
};

export default Header;
