import { PageContainer } from "@/components";

import pilot from "@/assets/Products/pilot.png";

import maya from "@/assets/icons/ic_maya.svg";
import pldt from "@/assets/icons/ic_pldt.svg";

const About = () => {
  const renderStatistics = () => {
    return (
      <div className="mt-5">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">20K+</h2>
            <p className="text-xl text-muted-foreground">Downloads</p>
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">80</h2>
            <p className="text-xl text-muted-foreground">Locations</p>
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">4</h2>
            <p className="text-xl text-muted-foreground">Products</p>
          </div>
        </div>
      </div>
    );
  };

  const renderAboutCompany = () => {
    return (
      <>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-green-500">About </span>
          Company
        </h2>

        <p className="text-xl text-muted-foreground">
          Quanta Dance, Inc. provides services in IoT, eCommerce, Payment and
          other technologies.
        </p>
      </>
    );
  };
  return (
    <PageContainer id="about">
      <h2 className="text-md mb-8 text-center font-bold text-primary lg:text-xl">
        Partners and Businesses
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10 pb-36 pt-20">
        <img src={maya} alt="maya" className="h-16 object-contain md:h-24" />{" "}
        <img src={pldt} alt="pldt" className="h-16 object-contain md:h-24" />
      </div>

      <div className="w-full rounded-md border-2 bg-gray-100 p-5">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img src={pilot} alt="pilot" className="w-[300px] object-contain" />

          <div className="bg-green-0 flex flex-col">
            {renderAboutCompany()}
            {renderStatistics()}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
