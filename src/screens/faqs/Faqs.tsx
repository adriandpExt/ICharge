import { Faqs } from "./types";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import BookDemo from "@/components/book-demo";

import { faqData } from "./utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./component/accordion";

import wave from "@/assets/bg_green_wave.png";

export default function FullScreenResponsiveFAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<Faqs | null>(
    faqData[0] || null,
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSetOpenIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAccordionMenu = () => {
    return (
      <div className="container mx-auto mb-6 grid grid-cols-1 gap-2 px-3 md:grid-cols-2 lg:mb-10 lg:grid-cols-3">
        {faqData.map((category) => (
          <Label className="font-bold" key={category.category}>
            <Button
              variant={"custombutton"}
              className={`h-9 w-full whitespace-pre-wrap rounded-full border-2 border-green-500 px-3 py-2 text-sm transition-colors duration-200 sm:h-14 md:px-4 md:py-2 md:text-base lg:text-lg ${
                activeCategory?.category === category.category
                  ? "bg-gradient-to-l from-[#3e8c3b] via-[#55b550] to-[#63cc5e] text-white"
                  : "bg-green-100 text-gray-800 hover:bg-green-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.category}
            </Button>
          </Label>
        ))}
      </div>
    );
  };

  const renderAccordionQnA = () => {
    return (
      <div className="mb-28 h-full flex-grow px-3">
        {faqData.map(
          (category) =>
            activeCategory?.category === category.category && (
              <Accordion
                key={category.category}
                type="single"
                collapsible
                className="container relative mx-auto space-y-2"
              >
                {category.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger
                      className={`rounded-lg ${
                        openIndex === index ? "bg-green-400" : "bg-green-100"
                      } px-4 py-3 text-left text-base hover:bg-green-500 md:text-lg lg:text-xl`}
                      onClick={() => handleSetOpenIndex(index)}
                    >
                      <div className="flex w-full items-center justify-between">
                        <Label className="text-base font-semibold">
                          {item.question}
                        </Label>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mt-1 rounded-lg border-2 border-green-300 bg-white px-4 py-3 text-left text-sm md:text-base lg:text-lg">
                      <Label className="text-base">{item.answer}</Label>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ),
        )}
      </div>
    );
  };
  return (
    <section>
      <main className="col-start-1 row-start-1 grid h-[65vh] w-full place-items-center">
        <img
          loading="lazy"
          src={wave}
          alt="wave"
          className="col-start-1 row-start-1 grid h-[65vh] w-full bg-cover bg-bottom bg-no-repeat brightness-[30%]"
        />

        <div className="container z-10 col-start-1 row-start-1 mx-auto flex flex-col items-center space-y-2 p-2 px-4 py-8">
          <Label variant={"title"} className="text-white sm:mb-6">
            CUSTOMER SERVICE
          </Label>
          <Label variant={"subtitle"} className="mb-6 text-white sm:mb-8">
            Use the form below to send us an email and we will respond within 12
            hours. If you need an immediate answer, our Customer Service team is
            just a click away, chat with us!
          </Label>
          <Button
            variant={"custombutton"}
            className="h-12 w-52 rounded-md bg-white text-base text-green-600 hover:bg-green-100 sm:px-6 sm:py-3 sm:text-lg md:h-9"
          >
            Chat with Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </main>

      <main>
        <Label
          variant="heading1"
          className="mb-6 flex flex-col py-10 text-center font-bold lg:mb-10"
        >
          FREQUENTLY ASKED QUESTIONS
        </Label>

        {renderAccordionMenu()}

        {renderAccordionQnA()}

        <BookDemo />
      </main>
    </section>
  );
}
