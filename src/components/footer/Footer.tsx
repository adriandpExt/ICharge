import { Link, useNavigate } from "react-router-dom";

import { SvgIcons } from "../svg-icons";
import RenderGridItem from "./RenderGridItem";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { renderItems } from "./utils";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { IconName } from "../svg-icons/utils";

export const Footer = () => {
  const year = new Date();

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  const renderIconButton = () => {
    return (
      <Button variant={"icon"} className="h-24" onClick={handleNavigateHome}>
        <SvgIcons name={"ic_svl_gs2"} size={200} />
      </Button>
    );
  };
  const renderInfoDesktop = () => {
    return (
      <div className="hidden w-full grid-cols-4 gap-4 p-5 px-20 lg:grid">
        {renderIconButton()}

        <div className="flex flex-col items-center">
          <h2 className="mb-2 text-lg font-bold">{renderItems.follow.title}</h2>

          <div className="flex flex-row items-center gap-3">
            {renderItems.follow.items.map((item) => (
              <Avatar
                key={item.path}
                className="hover:cursor-pointer"
                onClick={handleNavigateHome}
              >
                <AvatarFallback className="bg-[#61DAFB]">
                  <SvgIcons name={item.icon as IconName} size={20} />
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

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

  const renderInfoMobile = () => {
    return (
      <div className="flex flex-col px-20 lg:hidden">
        {renderIconButton()}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              {renderItems.follow.title}
            </AccordionTrigger>
            <AccordionContent className="items-center space-y-3">
              {renderItems.follow.items.map((item) => (
                <Button variant="link" key={item.path}>
                  {item.label}
                </Button>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              {renderItems.platforms.title}
            </AccordionTrigger>
            <AccordionContent className="items-center space-y-3">
              {renderItems.platforms.items.map((item) => (
                <Button variant={"link"} key={item}>
                  {item}
                </Button>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              {renderItems.about.title}
            </AccordionTrigger>
            <AccordionContent className="items-center space-y-3">
              {renderItems.about.items.map((item) => (
                <Link to={item.path} key={item.path}>
                  <Button variant={"link"}>{item.label}</Button>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  return (
    <footer className="border-t-2 py-10">
      {renderInfoDesktop()}

      {renderInfoMobile()}

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
