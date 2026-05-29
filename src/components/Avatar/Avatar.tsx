import { useState } from "react";
import { PropsWithChildren, ReactElement } from "react";
import { Spinner } from "@/components";
import { cn } from "@/lib/utils";

interface IAvatar extends PropsWithChildren {
  imageUrl: string;
  altText: string;
  borderColor?: string;
  size?: number;
  hideBorder?: boolean;
}

export const Avatar = (props: IAvatar): ReactElement => {
  const {
    imageUrl,
    altText,
    size = 220,
    hideBorder = false,
    borderColor = "#078E00",
  } = props;
  const [isLoading, setIsLoading] = useState(true);

  const borderStyle = !hideBorder ? { borderColor } : undefined

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center rounded-full bg-slate-100",
            !hideBorder && `border-4`,
          )}
          style={borderStyle}
        >
          <Spinner />
        </div>
      )}

      <img
        src={imageUrl}
        alt={altText}
        width={size}
        height={size}
        className={cn(
          "rounded-full transition-opacity duration-300",
          !hideBorder && "border-4",
          isLoading ? "opacity-0" : "opacity-100",
        )}
        style={borderStyle}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
