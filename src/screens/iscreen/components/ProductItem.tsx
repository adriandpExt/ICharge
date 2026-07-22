import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IIScreenProduct } from "../type";

import iScreenLogo from "@/assets/businessCard/ic_iscreen_logo.png";

export const ProductItem = (props: {
  data: IIScreenProduct;
  onClick: (e: { stopPropagation: () => void }, item: IIScreenProduct) => void;
}) => {
  const { data, onClick } = props;

  return (
    <div className="flex h-[30rem] flex-col place-content-center items-center rounded-[3rem] border-none text-center md:w-[23rem]">
      <div
        className={cn(
          "absolute -z-40 h-[30rem] w-[95%] rounded-[3rem] p-5 md:w-[23rem]",
          "border-0 bg-[#fde396]",
        )}
        style={{
          clipPath: "polygon(100% 0%, 0% 0%, 0% 65%, 100% 25%)",
          boxShadow: "inset 0 0 0 1px rgba(255, 193, 6, 1)",
        }}
      >
        <img src={iScreenLogo} className="h-[10%]" />
      </div>

      <div
        className={cn(
          "absolute -z-50 h-[28rem] w-[95%] rounded-[4rem] shadow-md md:w-[23rem] md:rounded-[3rem]",
          "bg-[#fcefc7]",
        )}
        style={{
          clipPath: "polygon(100% 100%, 0% 100%, 0% 60%, 100% 20%)",
          boxShadow: "inset 0 0 0 1px rgba(255, 193, 6, 1)",
        }}
      />

      <img
        src={data.img}
        className="h-1/2 w-auto object-contain px-16"
        alt={data.name}
      />

      <div className="mt-5 place-items-center space-y-3 px-5">
        <p className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text font-staatliches text-4xl text-transparent">
          {data.name}
        </p>

        <Button
          variant={"custombutton"}
          className="w-20 rounded-3xl bg-[#ffc106] font-bold tracking-wider text-white hover:bg-[#ffda69]"
          onClick={(e) => onClick(e, data)}
        >
          More
        </Button>
      </div>
    </div>
  );
};
