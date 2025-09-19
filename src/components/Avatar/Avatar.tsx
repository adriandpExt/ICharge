import { useState } from "react";
import { PropsWithChildren, ReactElement } from "react";
import { Spinner } from "@/components";

interface IAvatar extends PropsWithChildren {
  imageUrl: string;
  altText: string;
  size?: number;
  hideBorder?: boolean;
}

export const Avatar = (props: IAvatar): ReactElement => {
  const { imageUrl, altText, size = 220, hideBorder = false } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {isLoading && (
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center rounded-full ${
            hideBorder ? "" : "border-4 border-[#078E00]"
          } bg-slate-100`}
        >
          <Spinner />
        </div>
      )}
      <img
        src={imageUrl}
        alt={altText}
        width={size}
        height={size}
        className={`rounded-full transition-opacity duration-300 ${
          hideBorder ? "" : "border-4 border-[#078E00]"
        } ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
