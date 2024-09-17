import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

interface ProductModal {
  item: number;
  open: boolean;
  handleOpenChange: () => void;
}

const ProductModal = ({ item, open, handleOpenChange }: ProductModal) => {
  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
        <AlertDialogContent className="bg-blend-lighten">
          <AlertDialogHeader>
            <AlertDialogDescription>{item}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProductModal;
