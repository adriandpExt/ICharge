import { StepCardProps } from "@/screens/home/how-to/type";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";

import { handleLenght } from "@/screens/home/how-to/utils";
import HowToCard from "./HowToCard";

const StepCard = ({
  stepNumber,
  title,
  description,
  imgClassName,
  currentStep,
  onClick,
}: StepCardProps) => {
  const isActive = currentStep >= stepNumber;
  const cardStyle = isActive
    ? "bg-[#2FCE27] shadow-inner drop-shadow-lg"
    : "bg-white shadow-inner drop-shadow-lg";
  const avatarStyle = isActive
    ? "bg-gradient-to-t from-green-500 to-green-800 text-white"
    : "bg-slate-100 text-black";

  const renderLeft = () => {
    return stepNumber % 2 === 0 ? (
      isActive && (
        <div
          className="col-start-1 col-end-5 hidden w-full flex-col items-end justify-center space-y-3 lg:flex"
          data-aos="zoom-in"
        >
          <Label variant={"heading2"}>{title}</Label>
          <Label variant={"subtitle"} className="text-end">
            {description}
          </Label>
        </div>
      )
    ) : (
      <HowToCard
        className={cn(
          "col-start-1 col-end-5 rotate-[-135deg] md:-ml-20 md:rotate-[45deg] lg:p-14",
          cardStyle,
        )}
        imgClassName={imgClassName}
        even={stepNumber % 2 === 0}
      >
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="shadow-inner-large flex h-full w-full place-content-center items-center rounded-full bg-white lg:hidden"
          >
            <Label className="text-md font-poppins font-bold">
              {title.toUpperCase()}
            </Label>
          </motion.div>
        )}
      </HowToCard>
    );
  };

  const renderRight = () => {
    return stepNumber % 2 === 0 ? (
      <HowToCard
        className={cn(
          "col-start-6 col-end-12 rotate-[-135deg] md:ml-20 lg:ml-20 lg:p-14",
          cardStyle,
        )}
        imgClassName={imgClassName}
        even={stepNumber % 2 === 0}
      >
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="shadow-inner-large flex h-full w-full place-content-center items-center rounded-full bg-white lg:hidden"
          >
            <Label className="text-md font-poppins font-bold">
              {title.toUpperCase()}
            </Label>
          </motion.div>
        )}
      </HowToCard>
    ) : (
      isActive && (
        <div
          className="col-start-6 col-end-12 hidden w-full flex-col items-start justify-center space-y-3 lg:flex"
          data-aos="zoom-in"
        >
          <Label variant={"heading2"}>{title}</Label>
          <Label variant={"subtitle"} className="text-start">
            {description}
          </Label>
        </div>
      )
    );
  };

  return (
    <section
      className={`flex ${stepNumber % 2 === 0 ? "gap-10" : "flex-row-reverse gap-10"} md:contents lg:gap-0`}
      onClick={onClick}
    >
      {renderLeft()}

      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
        <div
          className={cn(
            "flex h-full w-6 justify-center",
            handleLenght(stepNumber).item,
          )}
        >
          <div
            className={cn(
              "w-2",
              handleLenght(stepNumber).height,
              currentStep >= stepNumber ? "bg-green-500" : "bg-slate-100",
              "transition-colors duration-500 ease-in-out",
            )}
          />
        </div>
        <div
          className={cn(
            "absolute -left-[120%] top-1/2 -mt-10 flex h-20 w-20 place-content-center items-center rounded-full font-sans text-2xl font-bold",
            avatarStyle,
          )}
        >
          {stepNumber}
        </div>
      </div>

      {renderRight()}
    </section>
  );
};

export default StepCard;
