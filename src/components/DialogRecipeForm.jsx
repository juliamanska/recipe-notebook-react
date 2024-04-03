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
          className="mt-6 text-md bg-brownSugar text-white hover:scale-125 hover:bg-brownSugar"
        >
          Add new recipe
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-isabelline rounded-lg py-8">
        <DialogHeader>
          <DialogTitle className="text-3xl font-mono">New recipe</DialogTitle>
          <DialogDescription className="text-md">
            Fill the form to add new recipe!
          </DialogDescription>
        </DialogHeader>
        <RecipeForm />
      </DialogContent>
    </Dialog>
  );
}

export default DialogCloseButton;
