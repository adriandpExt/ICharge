import { ReactElement } from "react";
import { IndustryCardType } from "../type";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const IndustryCard = (props: IndustryCardType): ReactElement => {
  const {
    card: { title, bgImage },
    isDesktop,
    className,
  } = props;
  return (
    <div
      className={cn(
        "h-[25rem] w-full rounded-3xl rounded-tr-none border-0 bg-cover bg-no-repeat",
        bgImage,
        isDesktop &&
          "shadow-2xl shadow-black/50 drop-shadow-2xl hover:scale-105",
        className,
      )}
    >
      <div className="flex h-full w-full items-end rounded-3xl rounded-tr-none bg-green-500/15 lg:hover:bg-transparent -ml-[0.1rem] -mb-[0.1rem]">
        <Button className="h-[25%] w-[90%] justify-start rounded-3xl rounded-tl-none text-2xl md:text-3xl">
          {title}
        </Button>
      </div>
    </div>
  );
};

export default IndustryCard;
