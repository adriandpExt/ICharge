import { PageContainer } from "@/components";

import CardSectors from "./component/CardSectors";
import { Label } from "@/components/ui/label";
import { Outlet } from "react-router-dom";

const Sectors = () => {
  const location = window.location.pathname;
  return (
    <>
      {location === 'sectors'  ? (
        <section className="h-full w-full">
          <div className="col-start-1 row-start-1 grid h-[50vh] w-full place-items-center border-b-2 border-white">
            <div className="col-start-1 row-start-1 grid h-full w-full bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-bottom bg-no-repeat brightness-[30%]" />

            <div className="z-10 col-start-1 row-start-1 flex flex-col items-center space-y-2 p-2">
              <Label
                variant={"title"}
                className="text-3xl text-white md:text-6xl"
              >
                POWERING EVERY BUSINESS,
              </Label>
              <Label
                variant={"title"}
                className="text-3xl text-white md:text-6xl"
              >
                ANYTIME, ANYWHERE
              </Label>
            </div>
          </div>

          <PageContainer className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <CardSectors
                title={"Hospitality"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate expedita harum iure molestias eveniet, dignissimos quis consequuntur nihil fugit facilis quae natus labore aliquam adipisci tempora? Nostrum, rerum earum."
                }
              />
              <CardSectors
                title={"Trasnport"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate expedita harum iure molestias eveniet, dignissimos quis consequuntur nihil fugit facilis quae natus labore aliquam adipisci tempora? Nostrum, rerum earum."
                }
              />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <CardSectors
                title={"Healtcare"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate expedita harum iure molestias eveniet, dignissimos quis consequuntur nihil fugit facilis quae natus labore aliquam adipisci tempora? Nostrum, rerum earum."
                }
              />
              <CardSectors
                title={"Events"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate expedita harum iure molestias eveniet, dignissimos quis consequuntur nihil fugit facilis quae natus labore aliquam adipisci tempora? Nostrum, rerum earum."
                }
              />
              <CardSectors
                title={"Retail"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate expedita harum iure molestias eveniet, dignissimos quis consequuntur nihil fugit facilis quae natus labore aliquam adipisci tempora? Nostrum, rerum earum."
                }
              />
            </div>
          </PageContainer>

          <PageContainer className="flex flex-col space-y-5">
            <Label variant={"title"} className="text-center">
              LOVE ICHARGE
            </Label>

            <Label variant={"default"} className="text-center">
              What are partner says...
            </Label>
          </PageContainer>
        </section>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Sectors;
