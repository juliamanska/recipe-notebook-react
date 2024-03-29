import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RecipeForm from "./RecipeForm";

function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="add-button mt-6 text-md bg-brownSugar text-white hover:scale-125 hover:bg-brownSugar"
        >
          Add new recipe
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New recipe</DialogTitle>
          <DialogDescription>
            Fill the form to add new recipe!
          </DialogDescription>
        </DialogHeader>
        <RecipeForm />
      </DialogContent>
    </Dialog>
  );
}

export default DialogCloseButton;
