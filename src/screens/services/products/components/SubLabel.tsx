import { ProdModal } from "../types";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const SubLabel = ({ item }: Omit<ProdModal, "open" | "handleOpenChange">) => {
  const {
    productDetails: { name, description, seatCapacity },
    productDescriptions: { content, dimensions, wattage },
  } = item;

  return (
    <div className="hidden space-y-10 py-10 lg:flex lg:flex-col">
      {/* Name and Description */}
      <div className="space-y-1 lg:flex lg:flex-col">
        <Label variant={"heading1"} className="tracking-wider text-white">
          {name}
        </Label>
        <Label className="font-semibold text-white">{description}</Label>
        <Label className="hidden font-semibold text-white md:block">
          Seat Capacity: {seatCapacity}
        </Label>
      </div>

      {/* Product Details */}
      <div className="flex h-fit justify-between text-center text-white">
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Code */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Contents</Label>
          <Label>Slot: {content.slots}</Label>
          <Label>Powerbank: {content.powerbanks}</Label>
        </div>

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Dimension */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Size</Label>
          <Label>h: {dimensions.h}</Label>
          <Label>w: {dimensions.w}</Label>
          <Label>l: {dimensions.l}</Label>
        </div>

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Wattage */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Wattage</Label>
          <Label>Standby: {wattage.standBy}</Label>
          <Label>fullLoad: {wattage.fullLoad}</Label>
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
