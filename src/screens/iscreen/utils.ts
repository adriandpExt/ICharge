import LocalizationKey from "@/i18n/key";

import ProOne from "@/assets/iscreen/iScreenPro_1.png";
import ProTwo from "@/assets/iscreen/iScreenPro_2.png";
import Max from "@/assets/iscreen/iScreenMax.png";
import ProMax from "@/assets/iscreen/iScreenProMax.png";

import { IIScreenDetails, IProductOverview } from "./type";
import { CirclePlay, LucideIcon, Repeat, Target, Users } from "lucide-react";

export const iScreenDetails: IIScreenDetails = {
  title: LocalizationKey.iScreen.brand,
  text: LocalizationKey.iScreen.about.aboutText,
  keyFeatures: [
    LocalizationKey.iScreen.about.aboutKeyFeatures.keyFeatureOne,
    LocalizationKey.iScreen.about.aboutKeyFeatures.keyFeatureTwo,
    LocalizationKey.iScreen.about.aboutKeyFeatures.keyFeatureThree,
    LocalizationKey.iScreen.about.aboutKeyFeatures.keyFeatureFour,
  ],
};

export const productOverview: IProductOverview = {
  flavorText: LocalizationKey.iScreen.productOverview.productOverviewFlavorText,
  products: [
    {
      img: ProOne,
      name: 'iScreen Pro (11")',
      desc: LocalizationKey.iScreen.productOverview.products.proOne.desc,
      specs: {
        height: "800px",
        width: "1280px",
        supportedFormats: [
          LocalizationKey.iScreen.productOverview.products.proOne.formats.video,
          LocalizationKey.iScreen.productOverview.products.proOne.formats.image,
          LocalizationKey.iScreen.productOverview.products.proOne.formats.fileCapacity,
        ],
      },
    },
    {
      img: ProTwo,
      name: 'iScreen Pro (11")',
      desc: LocalizationKey.iScreen.productOverview.products.proTwo.desc,
      specs: {
        height: "800px",
        width: "1280px",
        supportedFormats: [
          LocalizationKey.iScreen.productOverview.products.proTwo.formats.video,
          LocalizationKey.iScreen.productOverview.products.proTwo.formats.image,
          LocalizationKey.iScreen.productOverview.products.proTwo.formats.fileCapacity,
        ],
      },
    },
    {
      img: Max,
      name: 'iScreen Max (24")',
      desc: LocalizationKey.iScreen.productOverview.products.max.desc,
      specs: {
        height: "1440px",
        width: "1080px",
        supportedFormats: [
          LocalizationKey.iScreen.productOverview.products.max.formats.video,
          LocalizationKey.iScreen.productOverview.products.max.formats.image,
          LocalizationKey.iScreen.productOverview.products.max.formats.fileCapacity,
        ],
      },
    },
    {
      img: ProMax,
      name: 'iScreen Pro Max (43")',
      desc: LocalizationKey.iScreen.productOverview.products.proMax.desc,
      specs: {
        height: "1920px",
        width: "1080px",
        supportedFormats: [
          LocalizationKey.iScreen.productOverview.products.proMax.formats.video,
          LocalizationKey.iScreen.productOverview.products.proMax.formats.image,
          LocalizationKey.iScreen.productOverview.products.proMax.formats.fileCapacity,
        ],
      },
    },
  ],
};

export const whyAdvertise: { title: string; desc: string }[] = [
  {
    title: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseOne.title,
    desc: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseOne.desc,
  },
  {
    title: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseTwo.title,
    desc: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseTwo.desc,
  },
  {
    title: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseThree.title,
    desc: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseThree.desc,
  },
  {
    title: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseFour.title,
    desc: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseFour.desc,
  },
  {
    title: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseFive.title,
    desc: LocalizationKey.iScreen.whyAdvertise.whyAdvertiseFive.desc,
  },
];

export const benefitsForAdvertisers: { icon: LucideIcon; text: string }[] = [
  {
    icon: Users,
    text: LocalizationKey.iScreen.benefitsForAdvertisers.benefitOne,
  },
  {
    icon: Repeat,
    text: LocalizationKey.iScreen.benefitsForAdvertisers.benefitTwo,
  },
  {
    icon: Target,
    text: LocalizationKey.iScreen.benefitsForAdvertisers.benefitThree,
  },
  {
    icon: CirclePlay,
    text: LocalizationKey.iScreen.benefitsForAdvertisers.benefitFour,
  },
];
