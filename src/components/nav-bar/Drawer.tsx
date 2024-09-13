import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu, Zap } from "lucide-react";

import { Button } from "../ui/button";

import { linkList } from "./utils";

export const Drawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="inline-flex lg:hidden" />
      </SheetTrigger>
      <SheetContent side={"left"} className="space-y-5 text-center">
        <div className="flex items-center">
          <Zap className="h-8 w-8 text-green-500" />
          <p className="ml-2 text-2xl font-bold text-gray-800">
            <span className="text-green-500">i</span>charge
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          {linkList.map((item, index) => (
            <Button key={index} variant={"ghost"} className="font-semibold">
              {item}
            </Button>
          ))}
          <Button variant="outline">Android</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
