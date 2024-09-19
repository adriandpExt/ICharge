import { ProdModal } from "../types";
import { Separator } from "@/components/ui/separator";

const SubLabel = ({ item }: Omit<ProdModal, "open" | "handleOpenChange">) => {
  const {
    name,
    description,
    subLabel: { slot, size, wattage },
  } = item;
  return (
    <div className="hidden space-y-10 py-10 lg:block">
      <h1 className="font-sans text-7xl font-bold tracking-tighter text-white">
        {name}
      </h1>
      <h1 className="font-sans font-semibold text-white">{description}</h1>
      <div className="flex h-fit justify-between text-center text-white">
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
        <div className="space-y-5">
          <h1 className="font-sans text-xl">Slot</h1>
          <h1 className="font-sans">{slot}</h1>
        </div>
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
        <div className="space-y-5">
          <h1 className="font-sans text-xl">Size</h1>
          <h1 className="font-sans">H {size.h}mm</h1>
          <h1 className="font-sans">L {size.l}mm</h1>
          <h1 className="font-sans">W {size.w}mm</h1>
        </div>
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
        <div className="space-y-5">
          <h1 className="font-sans text-xl">Size</h1>
          <h1 className="font-sans">Standby {wattage.standBy}W</h1>
          <h1 className="font-sans">Full load {wattage.fullLoad}W</h1>
        </div>
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
      </div>
    </div>
  );
};

export default SubLabel;
