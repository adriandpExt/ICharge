import { PageContainer } from "@/components";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ReactElement } from "react";
import SectorPolygon from "./component/SectorPolygon";
import { sectorMobile, sectorsDesktop } from "./utils";

const Sector = (): ReactElement => {
  return (
    <PageContainer className="flex flex-col">
      <Label
        variant="title"
        className="pb-14 text-center text-6xl dark:text-white"
      >
        Sectors
      </Label>
      <Card
        className="custom-lg:grid mx-auto hidden w-fit self-center border-0 shadow-none"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          columnGap: 130,
          rowGap: 10,
        }}
      >
        {/* Desktop layout */}
        {<SectorPolygon sectors={sectorsDesktop} isTransform />}
      </Card>
      <Card
        className="custom-lg:hidden mx-auto grid w-fit self-center border-0 shadow-none"
        style={{
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          rowGap: 10,
        }}
      >
        {/* Mobile layout */}
        {<SectorPolygon sectors={sectorMobile} isTransform={false} />}
      </Card>
    </PageContainer>
  );
};

export default Sector;
