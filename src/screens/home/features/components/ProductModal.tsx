import { Dialog, DialogContent } from "@/components/dialog/Dialog";
import { ProdModal } from "../types";
import SubLabel from "./SubLabel";
import BgPolygon from "./BgPolygon";
import { useEffect } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const ProductModal = ({ item, open, handleOpenChange }: ProdModal) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-h-md grid h-[615px] w-[90%] grid-cols-1 border-0 bg-black/25 p-20 shadow-inner shadow-green-700 lg:w-[1024px] lg:grid-cols-2"
        style={{ borderRadius: "2.5rem" }}
      >
        <BgPolygon />
        <div className="space-y-5 p-0 lg:hidden">
          <h1 className="font-sans text-xl font-bold tracking-tighter text-white">
            {item.name}
          </h1>
          <h1 className="text-md font-sans font-semibold text-white">
            {item.description}
          </h1>
        </div>
        <div>
          <img
            src={item.image}
            className="relative h-[307.5px] w-[100%] object-contain lg:top-[32%]"
          />
        </div>
        <SubLabel item={item} />
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
