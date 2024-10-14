import { Faqs } from "./types";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./component/accordion";

export default function FullScreenResponsiveFAQAccordion() {
  const { t } = useTranslation();

  const faqData = t("customer.faqData", { returnObjects: true }) as Faqs[];

  const [activeCategory, setActiveCategory] = useState<string>(
    t(faqData[0]?.category),
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
                activeCategory === t(category.category)
                  ? "bg-gradient-to-l from-[#3e8c3b] via-[#55b550] to-[#63cc5e] text-white"
                  : "bg-green-100 text-gray-800 hover:bg-green-200"
              }`}
              onClick={() => setActiveCategory(category.category)}
            >
              {t(category.category)}
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
            activeCategory === t(category.category) && (
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
                          {t(item.question)}
                        </Label>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mt-1 rounded-lg border-2 border-green-300 bg-white px-4 py-3 text-left text-sm md:text-base lg:text-lg">
                      <Label className="text-base">{t(item.answer)}</Label>
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
    <section className="pt-[43vh]">
      <main className="absolute inset-0 h-[65vh] w-full bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2 p-2 px-4 py-8 text-center">
          <Label variant={"title"} className="text-white sm:mb-6">
            {t(LocalizationKey.customer.customerService)}
          </Label>

          <Label
            variant={"subtitle"}
            className="mb-6 text-start text-white sm:mb-8"
          >
            {t(LocalizationKey.customer.customerServicesubHeading)}
          </Label>

          <Button
            variant={"custombutton"}
            className="h-12 w-52 rounded-md bg-white text-base text-green-600 hover:bg-green-100 sm:px-6 sm:py-3 sm:text-lg md:h-9"
          >
            {t(LocalizationKey.customer.chatWithUs)}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </main>

      <main className="px-4 pb-8 pt-10">
        <Label
          variant="heading1"
          className="mb-6 flex flex-col py-10 text-center font-bold lg:mb-10"
        >
          {t(LocalizationKey.customer.heading)}
        </Label>

        {renderAccordionMenu()}

        {renderAccordionQnA()}
      </main>
    </section>
  );
}
