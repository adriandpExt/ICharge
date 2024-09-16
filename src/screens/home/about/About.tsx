import { PageContainer } from "@/components";

import pilot from "@/assets/Products/pilot.png";

import maya from "@/assets/icons/ic_maya.svg";
import pldt from "@/assets/icons/ic_pldt.svg";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Products from "@/assets/Products/QC-RC.png";

interface Product {
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    name: "Joos Power Bank",
    image: Products,
    description:
      "Compact, portable, and powerful, our power bank is perfect for on-the-go charging needs.",
  },
  {
    name: "Joos Mini",
    image: Products,
    description: "Perfect for venues with available countertop space.",
  },
  {
    name: "Joos Mini+",
    image: Products,
    description: "Perfect for all venues... no countertop space? No problem!",
  },
  {
    name: "Max Junior",
    image: Products,
    description: "Perfect for higher footfall areas with limited space.",
  },
  {
    name: "Joos Max",
    image: Products,
    description: "Perfect advertising solution with maximum charging capacity.",
  },
];

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

      <div className="flex flex-wrap items-center justify-evenly gap-10 pb-36 pt-20">
        <img src={maya} alt="maya" className="h-16 object-contain md:h-24" />{" "}
        <img src={pldt} alt="pldt" className="h-16 object-contain md:h-24" />
      </div>

      <Card className="w-full bg-gray-100 p-5">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img src={pilot} alt="pilot" className="w-[300px] object-contain" />

          <div className="flex flex-col">
            {renderAboutCompany()}
            {renderStatistics()}
          </div>
        </div>
      </Card>

      <h1 className="mb-8 mt-10 text-center text-4xl font-bold">
        Product Range
      </h1>
      <div className="md:hidden">
        <Carousel className="mx-auto w-full max-w-xs">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <div className="p-4 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={256}
                    height={256}
                    className="mx-auto mb-4"
                  />
                  <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
                  <p className="text-sm">{product.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="hidden grid-cols-5 gap-8 md:grid">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              width={256}
              height={256}
              className="mx-auto mb-4"
            />
            <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default About;
