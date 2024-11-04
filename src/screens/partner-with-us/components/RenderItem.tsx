import { DataCardProps } from "../type";

import { Label } from "@/components/ui/label";

export const RenderItem = (props: DataCardProps) => {
  const { imgSrc, title, list } = props;
  return (
    <div
      data-aos="fade"
      className="flex flex-col items-center gap-10 lg:flex-row even:lg:flex-row-reverse"
    >
      <div>
        <img
          src={imgSrc}
          alt="Convenience"
          className="h-96 w-full text-green-600"
        />
      </div>

      <div>
        <Label
          variant={"banner"}
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
        >
          {title}
        </Label>

        <div className="flex flex-col gap-5">
          {list.map((item) => (
            <Label className="text-base" key={item}>
              {item}
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenderItem;