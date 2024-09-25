import { PageContainer } from "@/components";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ReactElement } from "react";
import SectorPolygon from "./component/SectorPolygon";
import { sectorsDesktop } from "./utils";

const Sector = (): ReactElement => {
  return (
    <PageContainer className="custom-lg:h-[85svh] flex flex-col">
      <Label
        variant="title"
        className="pb-14 text-center text-6xl dark:text-white"
      >
        Sectors
      </Label>
      <Card
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
        className={`custom-lg:hidden flex h-[200px] w-[200px] items-center justify-center self-center border-0 bg-[#32802E] text-sm text-white transition-all duration-300 dark:text-black lg:text-2xl`}
      >
        <Label variant="title" className="text-4xl">
          SECTORS
        </Label>
      </Card>
      <Card
        className="inherit custom-lg:grid absolute mx-auto hidden w-fit translate-x-[13.5%] translate-y-[8%] border-0 shadow-none"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          columnGap: 130,
          rowGap: 10,
        }}
      >
        {/* Desktop layout */}
        {<SectorPolygon sectors={sectorsDesktop} />}
      </Card>
    </PageContainer>
  );
};

export default Sector;
