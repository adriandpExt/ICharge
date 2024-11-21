import LocalizationKey from "@/i18n/key";
import { CertImage, CertImageMobile, SumStep } from "./types";
import Summary1 from "@/assets/about/SummaryImages/advanced.png";
import Summary2 from "@/assets/about/SummaryImages/inhouse.png";
import Summary3 from "@/assets/about/SummaryImages/proprietary.png";
import Summary1Mobile from "@/assets/about/SummaryImages/advanced_mobile.png";
import Summary2Mobile from "@/assets/about/SummaryImages/inhouse_mobile.png";
import Summary3Mobile from "@/assets/about/SummaryImages/proprietary_mobile.png";
import Image1 from "@/assets/about/certifications/1.1.png";
import Image2 from "@/assets/about/certifications/2.1.png";
import Image3 from "@/assets/about/certifications/3.2.png";
import Image4 from "@/assets/about/certifications/4.1.png";
import Image5 from "@/assets/about/certifications/5.1.1.png";
import Image6 from "@/assets/about/certifications/6.1.1.png";
import Image7 from "@/assets/about/certifications/7.2.1.png";

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
    imageName: Image1,
    imageHeight: "135px",
    imageWidth: "135px",
  },
  {
    imageName: Image2,
    imageHeight: "145px",
    imageWidth: "145px",
  },
  {
    imageName: Image3,
    imageHeight: "170px",
    imageWidth: "170px",
  },
  {
    imageName: Image4,
    imageHeight: "140px",
    imageWidth: "140px",
  },
  {
    imageName: Image5,
    imageHeight: "137px",
    imageWidth: "137px",
  },
  {
    imageName: Image6,
    imageHeight: "144px",
    imageWidth: "144px",
  },
  {
    imageName: Image7,
    imageHeight: "241px",
    imageWidth: "241px",
  },
];

export const CertsMobileTopRow: CertImageMobile[] = [
  {
    imageName: Image1,
    imageHeight: "57px",
    imageWidth: "57px",
  },
  {
    imageName: Image2,
    imageHeight: "65px",
    imageWidth: "65px",
  },
  {
    imageName: Image3,
    imageHeight: "67px",
    imageWidth: "77px",
  },
  {
    imageName: Image4,
    imageHeight: "62px",
    imageWidth: "62px",
  },
];

export const CertsMobileBottomRow: CertImageMobile[] = [
  {
    imageName: Image5,
    imageHeight: "60px",
    imageWidth: "60px",
  },
  {
    imageName: Image6,
    imageHeight: "60px",
    imageWidth: "60px",
  },
  {
    imageName: Image7,
    imageHeight: "107px",
    imageWidth: "107px",
  },
];
