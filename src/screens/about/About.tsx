import { PageContainer } from "@/components";

import pilot from "@/assets/Products/pilot.png";

const About = () => {
  const renderStatistics = () => {
    return (
      <div className="mt-10">
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
  return (
    <PageContainer id="about">
      <div className="w-full rounded-md border-2 bg-gray-300 p-5">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img src={pilot} alt="pilot" className="w-[300px] object-contain" />

          <div className="bg-green-0 flex flex-col justify-between">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-green-500">About </span>
              Company
            </h2>

            <p className="mt-4 text-xl text-muted-foreground">
              Quanta Dance, Inc. provides services in IoT, eCommerce, Payment
              and other technologies.
            </p>

            {renderStatistics()}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
