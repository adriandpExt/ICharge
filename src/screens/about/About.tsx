import { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

import { Banner } from "@/components";
import AboutComponent from "./AboutComponent";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";

const Sustainabilities = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className="">
      <Banner title="QUANTA DANCE INC">
        <Label variant="subtitle" className="text-white sm:mb-6">
          {t(LocalizationKey.about.aboutHeading)}
        </Label>
        <Button
          variant="outline"
          className="h-10 border-0 bg-slate-100 text-green-600 hover:bg-slate-200"
        >
          <div className="flex w-32 items-center justify-between">
            <Label> {t(LocalizationKey.about.aboutBtn)}</Label>
            <ChevronRight />
          </div>
        </Button>
      </Banner>
      <AboutComponent />
    </section>
  );
};

export default Sustainabilities;
