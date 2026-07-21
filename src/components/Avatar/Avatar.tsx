import { useState } from "react";
import { PropsWithChildren, ReactElement } from "react";
import { Spinner } from "@/components";
import { cn } from "@/lib/utils";

interface IAvatar extends PropsWithChildren {
  imageUrl: string;
  altText: string;
  borderColor: string;
}

export const Avatar = (props: IAvatar): ReactElement => {
  const { imageUrl, altText, borderColor = "#078E00" } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: 230, height: 230 }}
    >
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center rounded-full border-4 bg-slate-100",
          )}
          style={{ borderColor }}
        >
          <Spinner />
        </div>
      )}
      <figure className={cn(
          "rounded-full border-4 transition-opacity duration-300 overflow-hidden w-[230px] h-[230px]",
          isLoading ? "opacity-0" : "opacity-100",
        )} style={{ borderColor }}>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full"
        onLoad={() => setIsLoading(false)}
      />
      </figure>
    </div>
  );
};
