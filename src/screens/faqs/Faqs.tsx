import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { faqData } from "./utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./component/accordion";
import BookDemo from "@/components/book-demo";

export default function FullScreenResponsiveFAQAccordion() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSetOpenIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <main className="col-start-1 row-start-1 grid h-[65vh] w-full place-items-center">
        <div className="col-start-1 row-start-1 grid h-full w-full bg-white bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom bg-no-repeat brightness-[30%]" />

        <div className="container z-10 col-start-1 row-start-1 mx-auto flex flex-col items-center space-y-2 p-2 px-4 py-8">
          <Label className="text-3xl font-bold text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            CUSTOMER SERVICE
          </Label>
          <Label className="sm:text-md mb-6 text-white sm:mb-8 lg:text-2xl">
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

      <main className="bg-[url('@/assets/landing_bg.svg')] bg-cover bg-fixed bg-center pt-5">
        <Label className="mb-6 flex flex-col py-10 text-center text-3xl font-bold md:text-4xl lg:mb-10 lg:text-5xl">
          FREQUENTLY ASKED QUESTIONS
        </Label>

        <div className="mb-6 flex flex-wrap justify-center gap-2 lg:mb-10">
          {faqData.map((category) => (
            <Label className="font-bold" key={category.category}>
              <Button
                variant={"custombutton"}
                key={category.category}
                className={`whitespace-pre-wraph-9 rounded-full border-2 border-green-500 px-3 py-2 text-sm transition-colors duration-200 sm:h-14 md:px-4 md:py-2 md:text-base lg:text-lg ${
                  activeCategory === category.category
                    ? "bg-gradient-to-l from-[#3e8c3b] via-[#55b550] to-[#63cc5e] text-white"
                    : "bg-green-100 text-gray-800 hover:bg-green-200"
                }`}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
              </Button>
            </Label>
          ))}
        </div>

        <div className="mb-28 h-full flex-grow px-3">
          {faqData.map(
            (category) =>
              activeCategory === category.category && (
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

        <BookDemo />
      </main>
    </section>
  );
}
