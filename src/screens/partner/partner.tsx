import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Manusingphone from "@/assets/modern-man-using-smartphone-city.png";
import { Label } from "@/components/ui/label";

const Partner = () => {
  const features = [
    {
      title: "Vertically Integrated",
      description:
        "iCharge is the shared power bank rental company only outside of China with complete control over our tech, meaning iCharge will always remain at the forefront of technological change within the industry.",
      image: Manusingphone,
    },
    {
      title: "Multiple Lucrative Revenue Sources",
      description:
        "With iCharge, you can benefit from power bank rental revenue, as well as the highly lucrative commercialisation & advertising opportunities available with iCharge.",
      image: Manusingphone,
    },
    {
      title: "Industry Leading Brand",
      description:
        "iCharge is the leading smartphone charging brand in the West. Join a well-established brand already widely synonymous with phone charging.",
      image: Manusingphone,
    },
    {
      title: "Innovative Technology",
      description:
        "Our cutting-edge technology ensures fast charging and seamless user experience, setting new standards in the power bank rental industry.",
      image: Manusingphone,
    },
    {
      title: "Eco-Friendly Solution",
      description:
        "iCharge promotes sustainability by reducing the need for individual chargers, contributing to a greener environment.",
      image: Manusingphone,
    },
    {
      title: "Global Expansion",
      description:
        "With a strong presence and rapid growth, iCharge is poised for global expansion, offering exciting opportunities for partners worldwide.",
      image: Manusingphone,
    },
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="col-start-1 row-start-1 grid h-[50vh] w-full place-items-center border-b-2 border-white">
        <div className="col-start-1 row-start-1 grid h-full w-full bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-bottom bg-no-repeat brightness-[30%]" />

        <div className="container z-10 col-start-1 row-start-1 mx-auto flex flex-col items-center space-y-2 p-2 px-4 py-8">
          <Label className="text-3xl font-bold text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            PARTNER WITH US
          </Label>
          <Label className="mb-6 text-xl text-white sm:mb-8 lg:text-2xl">
            ICharge is the leading brand in smartphone charging across Western
            markets. Start your scalable business venture today & begin to reap
            the rewards from providing the leading charging solution to your
            chosen market!
          </Label>
          <Button
            variant={"custombutton"}
            className="h-12 w-52 rounded-md bg-white text-base text-green-600 hover:bg-green-100 sm:px-6 sm:py-3 sm:text-lg md:h-9"
          >
            Inquire
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden bg-[url('@/assets/landing_bg.svg')] bg-cover bg-fixed bg-center">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-4xl font-bold">WHY ICHARGE?</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-3xl bg-green-100"
              >
                <img
                  src={feature.image}
                  width={400}
                  height={200}
                  alt={feature.title}
                  className="h-[350px] w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
