import { Label } from "@/components/ui/label";
import { ProdModal } from "../types";
import { Separator } from "@/components/ui/separator";

const SubLabel = ({ item }: Omit<ProdModal, "open" | "handleOpenChange">) => {
  const {
    name,
    description,
    wattage: { standBy, fullLoad },
    powerbanks,
    dimension,
    code,
  } = item;

  return (
    <div className="hidden space-y-10 py-10 lg:flex lg:flex-col">
      {/* Name and Description */}
      <Label variant={"heading1"} className="tracking-wider text-white">
        {name}
      </Label>
      <Label className="font-semibold text-white">{description}</Label>

      {/* Product Details */}
      <div className="flex h-fit justify-between text-center text-white">
        {/* Powerbanks */}
        {name === "iCharge Standee" ? (
          <></>
        ) : (
          <>
            <Separator
              orientation="vertical"
              className="h-48 border-2 border-white"
            />
            <div className="flex flex-col space-y-5">
              <Label className="text-xl">Powerbanks</Label>
              <Label>{powerbanks}</Label>
            </div>

            <Separator
              orientation="vertical"
              className="h-48 border-2 border-white"
            />
          </>
        )}

        {/* wattage or dimension */}
        {name === "iCharge Standee" ? (
          code?.map((item, index) => (
            <>
              <Separator
                orientation="vertical"
                className="h-48 border-2 border-white"
              />
              <div className="flex flex-col space-y-5">
                <Label className="text-xl">{item} Dimension</Label>
                <Label>{dimension[index]?.h}mm</Label>
                <Label>{dimension[index]?.l}mm</Label>
                <Label>{dimension[index]?.w}mm</Label>
              </div>
            </>
          ))
        ) : (
          <div className="flex flex-col space-y-5">
            <Label className="text-xl">Wattage</Label>
            <Label>{standBy}W</Label>
            <Label>{fullLoad}W</Label>
          </div>
        )}

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
      </div>
    </div>
  );
};

export default SubLabel;
