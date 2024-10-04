import { Label } from "@/components/ui/label";
import { ProdModal } from "../types";
import { Separator } from "@/components/ui/separator";

const SubLabel = ({ item }: Omit<ProdModal, "open" | "handleOpenChange">) => {
  const {
    name,
    description,
    subLabel: { slot, size, wattage },
  } = item;
  return (
    <div className="hidden space-y-10 py-10 lg:flex lg:flex-col">
      <Label variant={"heading1"} className="tracking-wider text-white">
        {name}
      </Label>
      <Label className="font-semibold text-white">{description}</Label>
      <div className="flex h-fit justify-between text-center text-white">
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Slot</Label>
          <Label>{slot}</Label>
        </div>
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Size</Label>
          <Label>H {size.h}mm</Label>
          <Label>L {size.l}mm</Label>
          <Label>W {size.w}mm</Label>
        </div>
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Wattage</Label>
          <Label>Standby {wattage.standBy}W</Label>
          <Label>Full load {wattage.fullLoad}W</Label>
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
