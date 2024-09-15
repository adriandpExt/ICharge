import { PageContainer } from "@/components";

import pilot from "@/assets/Products/pilot.png";

import { Card } from "@/components/ui/card";

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
      <h2 className="mb-8 text-center text-2xl font-bold text-primary">
        Partners and Businesses
      </h2>

      <Card className="w-full bg-gray-100 p-5">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img src={pilot} alt="pilot" className="w-[300px] object-contain" />

          <div className="flex flex-col">
            {renderAboutCompany()}
            {renderStatistics()}
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default About;
