import { PropsWithChildren, ReactElement } from "react";

interface IAvatar extends PropsWithChildren {
  imageUrl: string;
  altText: string;
  size?: number;
}

export const Avatar = (props: IAvatar): ReactElement => {
  const { imageUrl, altText, size = 220 } = props;

  return (
    <>
      <div className="items-center justify-center gap-2 p-2 px-4 py-8 text-center">
        <img
          src={imageUrl}
          alt={altText}
          width={size}
          height={size}
          className="rounded-full border-4 border-[#078E00]"
        />
      </div>
    </>
  );
};

export default Avatar;
