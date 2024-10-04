import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";
import { ReactElement } from "react";
import { HexGrid, Layout } from "react-hexgrid";
import SectorPolygon from "./component/SectorPolygon";
import Filters from "./component/Filters";

const Sector = (): ReactElement => {
  return (
    <PageContainer className="flex flex-col">
      <Label
        variant="heading1"
        className="hidden text-center dark:text-white lg:block lg:pb-14"
      >
        Sectors
      </Label>
      <Filters />

      <div className="hidden justify-center lg:flex">
        <HexGrid width={1200} height={800} viewBox="-62 -63 100 100">
          <Layout
            size={{ x: 13, y: 13 }}
            flat={true}
            spacing={1.1}
            origin={{ x: 0, y: 0 }}
          >
            <SectorPolygon platform="desktop" />
          </Layout>
        </HexGrid>
      </div>

      <div className="flex justify-center lg:hidden">
        <SectorPolygon platform="mobile" />
      </div>
    </PageContainer>
  );
};

export default Sector;
