import { ReactElement } from "react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Equipment from "./equipment/Equipment";
import ServiceIndustries from "./sector-industries/ServiceIndustries";
import SustainabilitySocial from "./sustainability-and-social-impact/SustainabilitySocial";
import { Banner } from "@/components";
import { ChevronRight } from "lucide-react";

const Services = (): ReactElement => {
  return (
    <main>
      <Banner title="flexible charging solutions">
        <Label variant="subtitle" className="text-white sm:mb-6">
          Offer your customers the power to stay connected with ease. Whether
          through free use or ownership, iCharge provides flexible solutions
          that fit your business and elevate customer experiences.
        </Label>
        <Button
          variant="outline"
          className="h-10 border-0 bg-slate-100 text-green-600 hover:bg-slate-200"
        >
          <div className="flex w-32 items-center justify-between">
            <Label>View Products</Label>
            <ChevronRight />
          </div>
        </Button>
      </Banner>
      <section className="mb-8">
        <Equipment />
      </section>
      <section className="space-y-10">
        <ServiceIndustries />
      </section>
      <section className="py-24">
        <SustainabilitySocial />
      </section>
    </main>
  );
};

export default Services;
