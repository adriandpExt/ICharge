import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

import { Banner } from "@/components";
import AboutComponent from "./AboutComponent";

const Sustainabilities: React.FC = () => {
  return (
    <section className="">
      <Banner title="QUANTA DANCE INC">
        <Label variant="subtitle" className="text-white sm:mb-6">
          We believe in a world where staying connected is effortless. With our
          innovative power bank stations, we make sure your customers can stay
          powered and ready for any adventure, anywhere.
        </Label>
        <Button
          variant="outline"
          className="h-10 border-0 bg-slate-100 text-green-600 hover:bg-slate-200"
        >
          <div className="flex w-32 items-center justify-between">
            <Label>Message Us</Label>
            <ChevronRight />
          </div>
        </Button>
      </Banner>
      <AboutComponent />
    </section>
  );
};

export default Sustainabilities;
