import { PageContainer } from "@/components";
import { Card } from "@/components/ui/card";
import { ReactElement, useState } from "react";

const sectorsDesktop = [
  { name: "", col: 1, row: 1 },
  { name: "", col: 1, row: 2 },
  { name: "HOSPITALITY", col: 1, row: 3 },
  { name: "", col: 1, row: 4 },
  { name: "", col: 2, row: 1 },
  { name: "TRANSPORT", col: 2, row: 2 },
  { name: "", col: 2, row: 3 },
  { name: "", col: 2, row: 4 },
  { name: "", col: 3, row: 1 },
  { name: "EVENTS", col: 3, row: 2 },
  { name: "HEALTHCARE", col: 3, row: 3 },
  { name: "", col: 3, row: 4 },
  { name: "", col: 4, row: 1 },
  { name: "", col: 4, row: 2 },
  { name: "", col: 4, row: 3 },
  { name: "RETAIL", col: 4, row: 4 },
];

const sectorsMobile = [
  { name: "", col: 2, row: 2 },
  { name: "RETAIL", col: 1, row: 3 },
  { name: "TRANSPORT", col: 2, row: 3 },
  { name: "HOSPITALITY", col: 2, row: 4 },
  { name: "EVENTS", col: 1, row: 5 },
  { name: "HEALTHCARE", col: 2, row: 5 },
  { name: "", col: 2, row: 6 },
];

const Sector = (): ReactElement => {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const renderSectors = (
    sectors: { name: string; col: number; row: number }[],
  ) =>
    sectors.map((sector) => (
      <Card
        key={`${sector.name}-${sector.col}-${sector.row}`}
        style={{
          gridColumn: sector.col,
          gridRow: sector.row,
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          transform:
            sector.row % 2 === 0 ? "translateX(-50%)" : "translateX(0)",
          marginBottom: "-50px",
        }}
        className={`flex h-[200px] w-[190px] cursor-pointer items-center justify-center bg-[#033800] text-center font-staatliches text-sm text-white transition-all duration-300 lg:text-lg ${
          hoveredSector === sector.name
            ? "z-10 scale-110 bg-gradient-to-t from-green-500 via-green-400 to-transparent"
            : ""
        }`}
        onMouseEnter={() => setHoveredSector(sector.name)}
        onMouseLeave={() => setHoveredSector(null)}
      >
        {sector.name}
      </Card>
    ));

  return (
    <PageContainer>
      <h1 className="pb-14 text-center font-staatliches text-6xl dark:text-white">
        Sectors
      </h1>

      <Card className="flex h-full items-center justify-center border-0 pb-28 shadow-none">
        {/* Desktop layout */}
        <Card
          className="relative hidden gap-1 border-0 shadow-none lg:grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
          }}
        >
          {renderSectors(sectorsDesktop)}
        </Card>

        {/* Mobile layout */}
        <Card
          className="relative grid gap-1 border-0 shadow-none lg:hidden"
          style={{
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
          }}
        >
          {renderSectors(sectorsMobile)}
        </Card>
      </Card>
    </PageContainer>
  );
};

export default Sector;
