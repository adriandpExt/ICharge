import { Label } from "@/components/ui/label";
import { ProdModal } from "../types";
import { Separator } from "@/components/ui/separator";

const SubLabel = ({ item }: Omit<ProdModal, "open" | "handleOpenChange">) => {
  const { name, description, slots, powerbanks, code } = item;

  return (
    <div className="hidden space-y-10 py-10 lg:flex lg:flex-col">
      {/* Name and Description */}
      <Label variant={"heading1"} className="tracking-wider text-white">
        {name}
      </Label>
      <Label className="font-semibold text-white">{description}</Label>

      {/* Product Details */}
      <div className="flex h-fit justify-between text-center text-white">
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Code */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Code</Label>
          <Label>{code}</Label>
        </div>

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Slots */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Slots</Label>
          <Label>{slots}</Label>
        </div>

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Powerbanks */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">Powerbanks</Label>
          <Label>{powerbanks}</Label>
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
