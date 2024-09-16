import { ReactElement } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface GridItem {
  path: string;
  label: string;
  icon?: string;
}

interface RenderGridItemProps {
  title: string;
  items: GridItem[] | string[];
}

export const RenderGridItem = ({
  title,
  items,
}: RenderGridItemProps): ReactElement => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="mb-2 text-lg font-bold">{title}</h2>

      <ul className="space-y-1 text-left">
        {Array.isArray(items) && typeof items[0] === "string"
          ? (items as string[]).map((item, index) => (
              <li key={index}>
                <Button variant={"link"}>{item}</Button>
              </li>
            ))
          : (items as GridItem[]).map((item) => (
              <li key={item.path}>
                <Link to={item.path}>
                  <Button variant={"link"}>{item.label}</Button>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default RenderGridItem;
