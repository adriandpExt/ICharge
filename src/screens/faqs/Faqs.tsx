import { ReactElement } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PageContainer } from "@/components";

const Faqs = (): ReactElement => {
  return (
    <PageContainer>
      <h1 className="mb-20 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h1>

      <Accordion type="multiple">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="rounded-full px-5 text-lg hover:no-underline data-[state=closed]:bg-orange-400 data-[state=open]:bg-green-500 data-[state=closed]:text-white">
            How do I rent the power bank?
          </AccordionTrigger>
          <AccordionContent className="bg-transparent px-10 pb-4 pt-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageContainer>
  );
};

export default Faqs;
