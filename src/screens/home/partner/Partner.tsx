import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import { PageContainer } from "@/components";

import { Button } from "@/components/ui/button";

const Partner = () => {
  const [toggleDemo, setToggleDemo] = useState<boolean>(false);

  const showToggle = () => {
    setToggleDemo(!toggleDemo);
  };

  const openLink = () => {
    window.open("", "_blank", "noopener,noreferrer");
  };

  return (
    <PageContainer
      id="partner"
      className="place-items-center items-center md:grid lg:grid-cols-2"
    >
      <div className="lg:col-start-1">
        <h2 className="text-3xl font-bold md:text-4xl">
          Partner with us and power your shops with
          <span className="mx-2 bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-green-500">
            icharge
          </span>{" "}
          today
        </h2>

        <p className="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
          Let your customers stay connected while enjoying your services with
          peace of mind. Contact us in{" "}
          <span
            className="flex cursor-pointer items-center gap-2 text-green-500 hover:font-semibold hover:underline"
            onClick={openLink}
          >
            iCharge BGC <Mail size={25} />
          </span>
        </p>
      </div>

      <div className="space-y-4 lg:col-start-2">
        <Button
          onClick={showToggle}
          className="w-52 bg-green-500 text-white hover:bg-green-800"
        >
          <Phone size={18} className="mr-3" />
          {toggleDemo ? "0918-7388888" : "RequestDemo"}
        </Button>
      </div>
    </PageContainer>
  );
};

export default Partner;
