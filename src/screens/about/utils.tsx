import LocalizationKey from "@/i18n/key";
import { CertImage, CertImageMobile, SumStep } from "./types";
import Summary1 from "@/assets/about/SummaryImages/advanced.png";
import Summary2 from "@/assets/about/SummaryImages/inhouse.png";
import Summary3 from "@/assets/about/SummaryImages/proprietary.png";
import Summary1Mobile from "@/assets/about/SummaryImages/advanced_mobile.png";
import Summary2Mobile from "@/assets/about/SummaryImages/inhouse_mobile.png";
import Summary3Mobile from "@/assets/about/SummaryImages/proprietary_mobile.png";
import Recycle from "@/assets/about/certifications/recycling_symbol.png";
import Durability from "@/assets/about/certifications/durability_indicator.png";
import cccCertification from "@/assets/about/certifications/ccc_certification.png";
import ceCertification from "@/assets/about/certifications/ce_certification.png";
import iccCertification from "@/assets/about/certifications/icc_mark.png";
import psCertification from "@/assets/about/certifications/ps_mark.png";
import PhilGeps from "@/assets/about/certifications/ps-philgeps_unified_logo.png";

export const SumVal: SumStep[] = [
  {
    SumImage: Summary1,
    SumImageMobile: Summary1Mobile,
    header: LocalizationKey.about.summaryHead1,
    desc: LocalizationKey.about.summaryDesc1,
    list: [
      LocalizationKey.about.keyFeaturesList11,
      LocalizationKey.about.keyFeaturesList12,
      LocalizationKey.about.keyFeaturesList13,
    ],
  },
  {
    SumImage: Summary2,
    SumImageMobile: Summary2Mobile,
    header: LocalizationKey.about.summaryHead2,
    desc: LocalizationKey.about.summaryDesc2,
    list: [
      LocalizationKey.about.keyFeaturesList21,
      LocalizationKey.about.keyFeaturesList22,
      LocalizationKey.about.keyFeaturesList23,
    ],
  },
  {
    SumImage: Summary3,
    SumImageMobile: Summary3Mobile,
    header: LocalizationKey.about.summaryHead3,
    desc: LocalizationKey.about.summaryDesc3,
    list: [
      LocalizationKey.about.keyFeaturesList31,
      LocalizationKey.about.keyFeaturesList32,
      LocalizationKey.about.keyFeaturesList33,
    ],
  },
];

export const Certs: CertImage[] = [
  {
    imageName: Recycle,
    imageHeight: "135px",
    imageWidth: "135px",
  },
  {
    imageName: Durability,
    imageHeight: "145px",
    imageWidth: "145px",
  },
  {
    imageName: cccCertification,
    imageHeight: "170px",
    imageWidth: "170px",
  },
  {
    imageName: ceCertification,
    imageHeight: "140px",
    imageWidth: "140px",
  },
  {
    imageName: iccCertification,
    imageHeight: "137px",
    imageWidth: "137px",
  },
  {
    imageName: psCertification,
    imageHeight: "144px",
    imageWidth: "144px",
  },
  {
    imageName: PhilGeps,
    imageHeight: "241px",
    imageWidth: "241px",
  },
];

export const CertsMobileTopRow: CertImageMobile[] = [
  {
    imageName: Recycle,
    imageHeight: "57px",
    imageWidth: "57px",
  },
  {
    imageName: Durability,
    imageHeight: "65px",
    imageWidth: "65px",
  },
  {
    imageName: cccCertification,
    imageHeight: "67px",
    imageWidth: "77px",
  },
  {
    imageName: ceCertification,
    imageHeight: "62px",
    imageWidth: "62px",
  },
];

export const CertsMobileBottomRow: CertImageMobile[] = [
  {
    imageName: iccCertification,
    imageHeight: "60px",
    imageWidth: "60px",
  },
  {
    imageName: psCertification,
    imageHeight: "60px",
    imageWidth: "60px",
  },
  {
    imageName: PhilGeps,
    imageHeight: "107px",
    imageWidth: "107px",
  },
];
