import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";

import LocalizationKey from "@/i18n/key";

import { SvgIcons } from "@/components";
import { Card } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface IContactData {
  title: "iCharge" | "iScreen";
  subTitle: string;
  contact: {
    viber: string;
    phone: string;
    email: string[];
  };
}
interface IContactCard {
  data: IContactData;
}

const ContactCard = ({ data }: IContactCard) => {
  const {
    contact: { viber, phone, email },
    subTitle,
    title,
  } = data;
  const handleViber = () => {
    window.open(`viber://chat?number=${viber}`, "_blank");
  };
  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };
  const handleEmail = (email: string) => {
    window.open(`mailto:$${email}`, "_blank");
  };
  const handleOpenMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Unit 2402 Trade and Financial Tower, 7th Avenue, BGC, Taguig",
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };
  const titleGradient =
    "!bg-gradient-to-r from-[#2afc94] from-40% via-[#12c4ef] via-50% to-[#ffc106] to-70%";
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-center gap-8 p-10",
        data.title === "iCharge"
          ? "bg-gradient-to-b from-[#15803d] from-5% via-[#39d431] to-[#39d431] text-white"
          : "bg-gradient-to-b from-[#fde396] from-20% via-[#fcefc7] to-[#fcefc7] text-black",
      )}
    >
      <Label
        variant={"banner"}
        className={cn(
          "w-full font-poppins font-bold",
          title === "iCharge" && "!text-white",
          title === "iScreen" && titleGradient,
        )}
      >
        {title === "iCharge" ? (
          <>
            <span className="text-[#39d431] font-poppins">i</span>
            {title.slice(1)}
          </>
        ) : (
          title
        )}
      </Label>
      <Label className="text-center">{subTitle}</Label>

      <Separator
        className={cn(data.title === "iCharge" ? "bg-white" : "bg-black")}
      />
      <Label
        variant={"body"}
        className="flex cursor-pointer items-center gap-5 hover:underline"
        onClick={handleViber}
      >
        <SvgIcons
          name="ic_viber"
          color={data.title === "iCharge" ? "white" : "black"}
          size={35}
        />
        {data.contact.viber}
      </Label>
      <Label
        variant={"body"}
        className="flex cursor-pointer items-center gap-5 hover:underline"
        onClick={handleCall}
      >
        <Phone size={32} strokeWidth={3} /> {data.contact.phone}
      </Label>

      <div className="flex cursor-pointer items-center gap-5">
        <Mail size={32} strokeWidth={3} />
        <div className="flex flex-col gap-1">
          {email.map((item, index) => (
            <Label
              variant={"body"}
              key={index}
              onClick={() => handleEmail(item)}
              className="cursor-pointer hover:underline"
            >
              {item}
            </Label>
          ))}
        </div>
      </div>

      <Label
        variant={"body"}
        className="hidden cursor-pointer items-center gap-5 whitespace-pre-line hover:underline lg:flex"
        onClick={handleOpenMap}
      >
        <MapPin size={40} strokeWidth={3} />
        Unit 2402 Trade and Financial Tower, 7th Avenue, BGC, Taguig
      </Label>

      <div className="flex items-center gap-5 lg:hidden">
        <MapPin size={32} strokeWidth={3} />
        <div className="flex flex-col">
          <Label variant={"body"}>Unit 2402 </Label>
          <Label variant={"body"}>Trade and Financial Tower,</Label>
          <Label variant={"body"}>7th Avenue, BGC, Taguig</Label>
        </div>
      </div>
    </div>
  );
};

export const ContactDetails = (): ReactElement => {
  const { t } = useTranslation();

  const iChargeData: IContactData = {
    title: "iCharge",
    subTitle: t(LocalizationKey.partnerWithUs.inquiryForm.attention),
    contact: {
      viber: "@icharge",
      phone: "+63 918 738 8888",
      email: [
        "official@icharge.com.ph",
        "support@icharge.com.ph",
        "reachus@icharge.com.ph",
      ],
    },
  };
  const iScreenData: IContactData = {
    title: "iScreen",
    subTitle: t(LocalizationKey.partnerWithUs.inquiryForm.attention),
    contact: {
      viber: "@icharge",
      phone: "+63 918 738 8888",
      email: [
        "official@icharge.com.ph",
        "support@icharge.com.ph",
        "reachus@icharge.com.ph",
      ],
    },
  };
  return (
    <section className="mx-auto flex h-full w-full items-center justify-center py-0 md:container md:px-10">
      <Card
        className={cn(
          "overflow-hidden rounded-xl border-0 bg-transparent shadow-none",
          "grid h-full w-full grid-cols-1 lg:grid-cols-2",
          "shadow-none drop-shadow-none md:shadow-2xl md:drop-shadow-2xl",
        )}
      >
        <ContactCard data={iChargeData} />
        <ContactCard data={iScreenData} />
      </Card>
    </section>
  );
};

export default ContactDetails;
