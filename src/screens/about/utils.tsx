import LocalizationKey from "@/i18n/key";
import { SumStep } from "./types";
import Summary1 from "@/assets/about/SummaryImages/advanced.png";
import Summary2 from "@/assets/about/SummaryImages/inhouse.png";
import Summary3 from "@/assets/about/SummaryImages/proprietary.png";
import Summary1Mobile from "@/assets/about/SummaryImages/advanced_mobile.png";
import Summary2Mobile from "@/assets/about/SummaryImages/inhouse_mobile.png";
import Summary3Mobile from "@/assets/about/SummaryImages/proprietary_mobile.png";
import Recycle from "@/assets/about/certifications/Recycle.png";
import Durability from "@/assets/about/certifications/Durability.png";
import cccCertification from "@/assets/about/certifications/TripleC.png";
import ceCertification from "@/assets/about/certifications/CE.png";
import iccCertification from "@/assets/about/certifications/ImportCommodityClearance.png";
import psCertification from "@/assets/about/certifications/PhilippineStandard.png";
import PhilGeps from "@/assets/about/certifications/Procurement.png";

export const SumVal: SumStep[] = [
  {
    SumImage: Summary1,
    SumImageMobile: Summary1Mobile,
    header: LocalizationKey.about.advancedTechSolutions.head,
    desc: LocalizationKey.about.advancedTechSolutions.desc,
    footnote: [
      LocalizationKey.about.advancedTechSolutions.footnote.numberOne,
      LocalizationKey.about.advancedTechSolutions.footnote.numberTwo,
      LocalizationKey.about.advancedTechSolutions.footnote.numberThree,
    ],
  },
  {
    SumImage: Summary2,
    SumImageMobile: Summary2Mobile,
    header: LocalizationKey.about.inHouseItSolutions.head,
    desc: LocalizationKey.about.inHouseItSolutions.desc,
    footnote: [
      LocalizationKey.about.inHouseItSolutions.footnote.numberOne,
      LocalizationKey.about.inHouseItSolutions.footnote.numberTwo,
      LocalizationKey.about.inHouseItSolutions.footnote.numberThree,
    ],
  },
  {
    SumImage: Summary3,
    SumImageMobile: Summary3Mobile,
    header: LocalizationKey.about.proprietaryHardware.head,
    desc: LocalizationKey.about.proprietaryHardware.desc,
    footnote: [
      LocalizationKey.about.proprietaryHardware.footnote.numberOne,
      LocalizationKey.about.proprietaryHardware.footnote.numberTwo,
      LocalizationKey.about.proprietaryHardware.footnote.numberThree,
    ],
  },
];

export const Certs = [
  Recycle,
  Durability,
  cccCertification,
  ceCertification,
  iccCertification,
  psCertification,
  PhilGeps,
];
