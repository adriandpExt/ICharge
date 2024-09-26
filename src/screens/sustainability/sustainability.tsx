import { memo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, LockIcon } from "lucide-react";

import { Label } from "@/components/ui/label";

const features = [
  {
    title: "Vertically Integrated",
    description:
      "iCharge is the shared power bank rental company only outside of China with complete control over our tech, meaning iCharge will always remain at the forefront of technological change within the industry.",
  },
  {
    title: "Multiple Lucrative Revenue Sources",
    description:
      "With iCharge, you can benefit from power bank rental revenue, as well as the highly lucrative commercialisation & advertising opportunities available with iCharge.",
  },
  {
    title: "Industry Leading Brand",
    description:
      "iCharge is the leading smartphone charging brand in the West. Join a well-established brand already widely synonymous with phone charging.",
  },
  {
    title: "Innovative Technology",
    description:
      "Our cutting-edge technology ensures fast charging and seamless user experience, setting new standards in the power bank rental industry.",
  },
  {
    title: "Eco-Friendly Solution",
    description:
      "iCharge promotes sustainability by reducing the need for individual chargers, contributing to a greener environment.",
  },
  {
    title: "Global Expansion",
    description:
      "With a strong presence and rapid growth, iCharge is poised for global expansion, offering exciting opportunities for partners worldwide.",
  },
];

export default function Partner() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

const HeroSection = memo(function HeroSection() {
  return (
    <div className="relative h-[50vh] border-b-2 border-white">
      <div className="absolute inset-0 bg-green-500 bg-cover bg-bottom bg-no-repeat" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center space-y-2 p-2 px-4 py-8 text-center">
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
          variant="outline"
          className="h-12 w-52 rounded-md bg-white text-base text-green-600 hover:bg-green-100 sm:px-6 sm:py-3 sm:text-lg md:h-9"
        >
          Inquire
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </div>
  );
});

const FeaturesSection = memo(function FeaturesSection() {
  return (
    <div className="relative overflow-hidden bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-fixed bg-center">
      <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-4xl font-bold text-white">
            WHY ICHARGE?
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const FeatureCard = memo(function FeatureCard({
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="h-[450px] overflow-hidden border-opacity-20 bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter">
      <CardHeader className="flex place-items-center pb-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
          <LockIcon className="text-white" size={24} />
        </div>
        <CardTitle className="text-xl font-semibold text-white">
          Powering Change with Joos Solar
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-white">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
});
