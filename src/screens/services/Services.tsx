import { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Equipment from "./equipment/Equipment";
import ServiceIndustries from "./sector-industries/ServiceIndustries";
import SustainabilitySocial from "./sustainability-and-social-impact/SustainabilitySocial";
import { Banner } from "@/components";
import Products from "./products/Products";

const Services = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <main>
      <Banner title="flexible charging solutions">
        <Label variant="subtitle" className="text-white sm:mb-6">
          {t(LocalizationKey.services.servicesSubHeading)}
        </Label>
        <Button
          variant="outline"
          className="h-10 border-0 bg-slate-100 text-green-600 hover:bg-slate-200"
        >
          <div className="w-38 flex items-center justify-between">
            <Label
              onClick={() =>
                document
                  .getElementById("serviceProducts")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t(LocalizationKey.services.viewProducts)}
            </Label>
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
      <Products />
      <section className="py-24">
        <SustainabilitySocial />
      </section>
    </main>
  );
};

export default Services;
