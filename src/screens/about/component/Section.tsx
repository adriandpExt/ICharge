import { ReactElement } from "react";
import { ISection } from "../types";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export const Section = (props: ISection): ReactElement => {
  const { icon, children, title, isFlipped = false } = props;

  return (
    <section data-aos="fade-up">
      <div
        className={cn(
          "container mx-auto flex items-center gap-2 bg-gradient-to-b from-[#044F00] to-[#078E00]",
          "bg-clip-text p-4 text-2xl font-bold text-transparent md:text-3xl",
          isFlipped ? "justify-end" : "justify-start",
        )}
      >
        <img src={icon} alt={icon} className="h-16" />
        <Label variant="banner">{title}</Label>
      </div>

      <div
        className={cn(
          "border-t-2 border-green-700 bg-[#38D430]/10 p-10",
          isFlipped
            ? "md:ml-36 md:rounded-bl-[5rem]"
            : "md:mr-36 md:rounded-br-[5rem]",
        )}
      >
        <div className="container mx-auto max-w-7xl">{children}</div>
      </div>
    </section>
  );
};

export default Section;
