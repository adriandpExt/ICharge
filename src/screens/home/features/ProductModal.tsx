import { Dialog, DialogContent } from "@/components/dialog/Dialog";
import { ProdModal } from "./types";

const ProductModal = ({ item, open, handleOpenChange }: ProdModal) => {
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-h-md grid h-[615px] w-[90%] grid-cols-1 border-0 bg-black/25 p-20 shadow-inner shadow-green-700 lg:w-[1024px] lg:grid-cols-2"
        style={{ borderRadius: "2.5rem" }}
      >
        
        {/* background polygons */}
        <div
          className="inherit absolute -z-50 h-full w-full rounded-[2.5rem] border-[#414141] bg-[#414141]/50 backdrop-blur-xl"
          style={{
            clipPath: "polygon(0% 0%, 21% 0%, 61% 100%, 0% 100%)",
          }}
        ></div>
        <div
          className="inherit absolute -z-50 h-full w-full rounded-[2.5rem] backdrop-blur-xl bg-green-400/20"
          style={{
            clipPath: "polygon(100% 0%, 20% 0%, 60% 100%, 100% 100%)",
          }}
        ></div>
        {/* background polygons */}

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
        <div className="hidden space-y-10 py-10 lg:block">
          <h1 className="font-sans text-7xl font-bold tracking-tighter text-white">
            {item.name}
          </h1>
          <h1 className="font-sans font-semibold text-white">
            {item.description}
          </h1>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
