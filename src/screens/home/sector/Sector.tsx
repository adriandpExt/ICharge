import { PageContainer } from "@/components";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ReactElement } from "react";

interface SectorProps {
  name: string;
  col: number;
  row: number;
}

const sectorsDesktop: SectorProps[] = [
  { name: "", col: 1, row: 2 },
  { name: "", col: 1, row: 3 },
  { name: "TRANSPORT", col: 1, row: 4 },
  { name: "HOSPITALITY", col: 1, row: 5 },
  { name: "", col: 1, row: 6 },
  { name: "", col: 2, row: 1 },
  { name: "EVENTS", col: 2, row: 3 },
  { name: "", col: 2, row: 4 },
  { name: "HEALTHCARE", col: 2, row: 5 },
  { name: "RETAIL", col: 2, row: 6 },
  { name: "", col: 2, row: 7 },
];

// const sectorsMobile = [
//   { name: "", col: 2, row: 2 },
//   { name: "RETAIL", col: 1, row: 3 },
//   { name: "TRANSPORT", col: 2, row: 3 },
//   { name: "HOSPITALITY", col: 2, row: 4 },
//   { name: "EVENTS", col: 1, row: 5 },
//   { name: "HEALTHCARE", col: 2, row: 5 },
//   { name: "", col: 2, row: 6 },
// ];

const Sector = (): ReactElement => {
  const renderSectors = (
    sectors: { name: string; col: number; row: number }[],
  ) => {
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
          return "translateX(125%) translateY(0)";
        case 2:
          return "translateX(208.5%) translateY(-50%)";
        case 3:
          return "translateY(-100%) translateX(125%)";
        case 4:
          return "translateX(208.5%) translateY(-150%)";
        case 5:
          return "translateY(-200%) translateX(125%)";
        case 6:
          return "translateX(208.5%) translateY(-250%)";
        case 7:
          return "translateY(-300%) translateX(125%)";
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
          className={`flex h-[200px] ${colorHex(sector)} w-[190px] items-center justify-center border-0 text-center font-staatliches text-sm text-white transition-all duration-300 dark:text-black lg:text-2xl`}
        >
          {sector.name}
        </Card>
      );
    });
  };

  return (
    <PageContainer className="flex flex-col lg:h-[85svh]">
      <h1 className="pb-14 text-center font-staatliches text-6xl dark:text-white">
        Sectors
      </h1>
      <Label className="flex text-center text-3xl custom-lg:hidden">
        NOT SUPPORTED (TO BE UPDATED)
      </Label>
      <Card
        className="inherit absolute mx-auto hidden w-fit translate-x-[13.5%] translate-y-[8%] border-0 shadow-none custom-lg:grid"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          columnGap: 130,
          rowGap: 10,
        }}
      >
        {/* Desktop layout */}
        {renderSectors(sectorsDesktop)}

        {/* Mobile layout */}
        {/* <Card
          className="relative grid gap-1 border-0 shadow-none lg:hidden"
          style={{
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
          }}
        >
          {renderSectors(sectorsMobile)}
        </Card> */}
      </Card>
    </PageContainer>
  );
};

export default Sector;
