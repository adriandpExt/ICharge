import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const stories = [
  {
    image: "/sampleimg",
    title: "New mobile charging stations at Hull Royal Infirmary",
  },
  {
    image: "/sampleimg",
    title:
      "London's power bank rental startup Joos launches at Hammerson, in talks with airports for further UK expansion",
  },
  {
    image: "sampleimg",
    title: "Joos are disrupting the public phone charging space",
  },
  {
    image: "/sampleimg",
    title: "Innovative charging solutions for urban environments",
  },
  {
    image: "/sampleimg",
    title: "The future of mobile device charging in public spaces",
  },
];

export default function SpotlightStories() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className="mx-auto w-full px-4 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Spotlight Stories
      </h2>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {stories.map((story, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {story.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex justify-center space-x-2">
        {stories.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              index === current ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
