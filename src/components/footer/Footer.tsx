import { SvgIcons } from "../svg-icons";
import RenderGridItem from "./RenderGridItem";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { renderItems } from "./utils";

export const Footer = () => {
  const year = new Date();

  const renderInfo = () => {
    return (
      <div className="hidden w-full grid-cols-4 gap-4 p-5 px-20 lg:grid">
        <SvgIcons name={"ic_svl_gs2"} size={150} />

        <RenderGridItem
          title={renderItems.follow.title}
          items={renderItems.follow.items}
        />
        <RenderGridItem
          title={renderItems.platforms.title}
          items={renderItems.platforms.items}
        />
        <RenderGridItem
          title={renderItems.about.title}
          items={renderItems.about.items}
        />
      </div>
    );
  };
  return (
    <footer className="border-t-2 py-10">
      {renderInfo()}

      <div className="flex flex-col px-20 lg:hidden">
        <SvgIcons name={"ic_svl_gs2"} size={150} />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              {renderItems.follow.title}
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              {renderItems.follow.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              {renderItems.platforms.title}
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              {renderItems.platforms.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              {renderItems.about.title}
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              {renderItems.about.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <p className="py-10 text-center font-semibold">
        &copy; {year.getFullYear()}
        <span className="ml-2 font-normal text-green-500 hover:cursor-pointer hover:underline">
          Quanta Dance, Inc
        </span>
      </p>
    </footer>
  );
};

export default Footer;
