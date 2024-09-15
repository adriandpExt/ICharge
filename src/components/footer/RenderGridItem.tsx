import { ReactElement } from "react";
import { Button } from "../ui/button";

interface RenderGridItemProps {
  title: string;
  items: string[];
}

export const RenderGridItem = ({
  title,
  items,
}: RenderGridItemProps): ReactElement => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="mb-2 text-lg font-bold">{title}</h2>

      <ul className="space-y-1 text-left">
        {items.map((item) => (
          <li key={item}>
            <Button variant={"link"}> {item}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderGridItem;
