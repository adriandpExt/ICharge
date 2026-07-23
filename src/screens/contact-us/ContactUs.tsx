import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

import { Label } from "@/components/ui/label";
import { Banner } from "@/components";

import { ContactDetails } from "./components";

const ContactUs = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Banner title={t(LocalizationKey.partnerWithUs.partnerWithUsHeading)}>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col">
            <Label variant="subtitle" className="font-medium text-white">
              {t(LocalizationKey.partnerWithUs.heading1)}
            </Label>
            <Label variant="subtitle" className="font-medium text-white">
              {t(LocalizationKey.partnerWithUs.heading2)}
            </Label>
          </div>
        </div>
      </Banner>

      <section className="relative h-full w-full pb-16">
        <div className="container relative z-10 mx-auto flex h-full flex-col gap-5 px-10 py-16">
          <Label variant={"banner"}>
            {t(LocalizationKey.partnerWithUs.wantToPartner)}
          </Label>
          <Label variant={"banner"}>
            {t(LocalizationKey.partnerWithUs.getInTouch)}
          </Label>
        </div>

        <ContactDetails />
      </section>
    </>
  );
};

export default ContactUs;
