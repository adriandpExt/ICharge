import { Dialog, DialogContent } from "@/components/dialog/Dialog";
import { ProdModal } from "./types";

const ProductModal = ({ item, open, handleOpenChange }: ProdModal) => {
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-h-md grid h-[615px] w-[90%] grid-cols-1 border-x-[1.5px] border-y-2 border-green-500 border-x-green-600 border-y-green-500 bg-black/25 p-20 shadow-inner shadow-green-700 backdrop-blur-2xl lg:w-[1024px] lg:grid-cols-2"
        style={{ borderRadius: "2.5rem" }}
      >
        <div className="space-y-5 p-0 lg:hidden">
          <h1 className="text-xl font-bold tracking-tighter text-white font-sans">
            {item.name}
          </h1>
          <h1 className="text-md font-semibold text-white font-sans">
            {item.description}
          </h1>
        </div>
        <div>
          <img
            src={item.image}
            className="relative h-[307.5px] w-[100%] object-contain lg:top-[32%]"
          />
        </div>
        <div className="hidden space-y-10 py-10 lg:block">
          <h1 className="text-7xl font-bold tracking-tighter font-sans text-white">
            {item.name}
          </h1>
          <h1 className="font-semibold text-white font-sans">{item.description}</h1>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
