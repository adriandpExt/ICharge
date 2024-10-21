import { ReactElement } from "react";

import { InquiryForm } from "./components";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Banner } from "@/components";

const PartnerWithUs = (): ReactElement => {
  return (
    <main>
      <Banner title="EMPOWER YOUR BUSINESS">
        <Label className="text-base text-white">
          Boost your business and keep your customers connected effortlessly.
        </Label>
        <Label className="text-base text-white">
          Partner with iCharge for seamless, reliable charging solutions.
        </Label>

        <Button
          variant={"custombutton"}
          className="items-center bg-white text-green-500"
        >
          Contact Us <ChevronRight className="text-green-500" />
        </Button>
      </Banner>

      <InquiryForm />
    </main>
  );
};

export default PartnerWithUs;
