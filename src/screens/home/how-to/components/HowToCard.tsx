import { cn } from "@/lib/utils";
import { HowToCardProps } from "../type";

const HowToCard = ({
  className,
  even = false,
  imgClassName,
  children,
}: Omit<HowToCardProps, "onClick">) => {
  return (
    <div
      className={cn(
        "rounded-eyedrop aspect-square w-full p-5 shadow-inner shadow-slate-200",
        className,
      )}
    >
      <div
        className={cn(
          `aspect-square w-full rotate-[135deg] rounded-full border-2 text-black ${even ? "lg:rotate-[-225deg]" : "lg:rotate-[-45deg]"} shadow-inner-large bg-cover bg-center bg-no-repeat p-0`,
          imgClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default HowToCard;
