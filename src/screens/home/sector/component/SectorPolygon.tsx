import { Card } from "@/components/ui/card";
import { PolygonProps, SectorProps } from "../type";
import { ReactElement } from "react";

const SectorPolygon = ({ sectors, isTransform }: PolygonProps): ReactElement[] => {
  const colorHex = ({ name }: SectorProps): string => {
    if (name !== "") {
      return "bg-[#D4EAD3] hover:bg-[#94E290] hover:shadow-inner-hex text-black";
    } else {
      return "bg-slate-400/25 shadow-inner-hex";
    }
  };
  const transform = (row: number): string => {
    switch (row) {
      case 1:
        return "translateX(0%) translateY(0)";
      case 2:
        return "translateX(82.5%) translateY(-50%)";
      case 3:
        return "translateX(0%) translateY(-100%)";
    }
    return "";
  };

  return sectors.map((sector) => {
    return (
      <Card
        key={`${sector.name}-${sector.col}-${sector.row}`}
        style={{
          gridColumn: sector.col,
          gridRow: sector.row,
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          transform: isTransform ? transform(sector.row) : "",
        }}
        className={`flex h-[17rem] w-[17rem] lg:w-[200px] lg:h-[200px] items-center justify-center border-0 bg-[#D4EAD3] text-center font-staatliches transition-all duration-300 dark:text-black text-3xl ${colorHex(sector)}`}
      >
        {sector.name}
      </Card>
    );
  });
};

export default SectorPolygon;
