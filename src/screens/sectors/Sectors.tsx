import { PageContainer } from "@/components";

import CardSectors from "./component/CardSectors";

const Sectors = () => {
  return (
    <>
      <section className="grid h-[90vh] w-full md:grid-cols-2">
        <div className="absolute inset-0 h-full w-full border-b-2 border-white bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-center brightness-[30%]" />

        <div className="relative flex flex-col justify-center px-10 text-white md:items-start md:pl-20">
          <h1 className="font-staatliches text-4xl md:text-6xl">
            Powering Every Business
          </h1>
          <h2 className="font-staatliches text-4xl md:text-6xl">
            ANYTIME, ANYWHERE
          </h2>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-300 to-transparent" />
      </section>

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
    </>
  );
};

export default Sectors;
