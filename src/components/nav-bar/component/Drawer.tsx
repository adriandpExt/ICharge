import { Link } from "react-router-dom";
import { Globe, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

import { SvgIcons } from "../../svg-icons";

import { linkList } from "../utils";

export const Drawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className={`inline-flex text-white lg:hidden`} />
      </SheetTrigger>

      <SheetContent side={"left"} className="space-y-5 bg-white text-center">
        <SvgIcons name={"ic_svl_g2"} size={150} />

        <div className="flex flex-col space-y-2">
          {linkList.map((item, index) => (
            <Button key={index} variant={"ghost"}>
              <Link to={item.path as string}>{item.label}</Link>
            </Button>
          ))}

          <Select>
            <SelectTrigger className="flex w-auto items-center justify-center space-x-2 whitespace-nowrap">
              <SelectValue
                placeholder={
                  <div className="flex items-center justify-center gap-1">
                    <Globe /> Language
                  </div>
                }
              />
            </SelectTrigger>

            <SelectContent className="flex flex-col items-center">
              <SelectGroup className="text-center">
                <SelectItem value="chinese" className="text-center">
                  Chinese
                </SelectItem>
                <SelectItem value="english" className="text-center">
                  English
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
