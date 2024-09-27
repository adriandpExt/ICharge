import { memo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingBag } from "lucide-react";

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
          Sustainability
        </Label>
        <Label className="mb-6 text-xl text-white sm:mb-8 lg:text-2xl">
          At ICharge, we are all about doing business the right way. Beyond
          offering a cutting-edge power bank sharing service, we are on a
          mission to use our influence for good. Our commitment to
          sustainability is not just a tagline; it's about making sure we run
          things responsibly and ethically in our day-to-day operations
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
    <Card className="h-[550px] overflow-hidden rounded-3xl border-0 bg-white/20 backdrop-blur-md">
      <div className="m-7 flex h-[500px] flex-col overflow-hidden rounded-2xl border-4 border-green-500">
        <CardHeader className="flex-grow-0 pb-0 pt-6">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
            <ShoppingBag className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="mb-2 text-center text-2xl font-bold text-white">
            Powering Change with Joos Solar
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-4 px-6 pb-6 text-white">
          <ul className="list-inside list-disc space-y-2 text-sm">
            <li>
              We launched Joos Solar in 2023 to champion renewable energy and a
              greener future.
            </li>
            <li>
              Our solar solutions facilitate an affordable and seamless
              transition to clean energy.
            </li>
            <li>
              We empower homes, businesses and our existing partners to reduce
              their carbon footprint.
            </li>
          </ul>
          <p className="text-sm text-white/80">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
});
