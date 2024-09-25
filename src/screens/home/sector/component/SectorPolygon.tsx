import { Card } from "@/components/ui/card";
import { PolygonProps, SectorProps } from "../type";
import { ReactElement } from "react";

const SectorPolygon = ({ sectors }: PolygonProps): ReactElement[] => {
  const colorHex = ({ name, row, col }: SectorProps): string => {
    if (name !== "") {
      return "bg-[#32802E]/50 hover:bg-green-600";
    } else if ((row === 6 && col === 1) || (row === 7 && col === 2)) {
      return "bg-slate-700/5 shadow-inner-hex";
    } else {
      return "bg-slate-700/30 shadow-inner-hex";
    }
  };
  const transform = (row: number): string => {
    switch (row) {
      case 1:
        return "translateX(126%) translateY(0)";
      case 2:
        return "translateX(208.5%) translateY(-50%)";
      case 3:
        return "translateX(126%) translateY(-100%)";
      case 4:
        return "translateX(208.5%) translateY(-150%)";
      case 5:
        return "translateX(126%) translateY(-200%)";
      case 6:
        return "translateX(208.5%) translateY(-250%)";
      case 7:
        return "translateX(126%) translateY(-300%)";
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
          transform: transform(sector.row),
        }}
        className={`flex h-[200px] w-[200px] items-center justify-center border-0 text-center font-staatliches text-sm text-white transition-all duration-300 dark:text-black lg:text-2xl ${colorHex(sector)}`}
      >
        {sector.name}
      </Card>
    );
  });
};

export default SectorPolygon;
