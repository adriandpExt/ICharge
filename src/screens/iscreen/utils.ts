import LocalizationKey from "@/i18n/key";

import ProOne from "@/assets/iscreen/iScreenPro_1.png";
import ProTwo from "@/assets/iscreen/iScreenPro_2.png";
import Max from "@/assets/iscreen/iScreenMax.png";
import ProMax from "@/assets/iscreen/iScreenProMax.png";

import { IIScreenDetails, IProductOverview } from "./type";
import { CirclePlay, LucideIcon, Repeat, Target, Users } from "lucide-react";

export const iScreenDetails: IIScreenDetails = {
  title: LocalizationKey.partnerWithUs.aboutIScreen,
  text: "is a modern digital media network seamlessly integrated into iCharge charging stations - transforming everyday moments into refined brand experiences through premium commercial spaces thoughtfully designed to capture attention, enhance visibility, and create lasting impressions.\n\nWe position brands within moments of pause, allowing businesses to connect with audiences in a natural, engaging, and elevated way - when they are most attentive, relaxed, and receptive.",
  keyFeatures: [
    "Integrated digital LED screens within smart charging stations",
    "Thoughtfully positioned in high foot traffic environments",
    "Seamless, continuous ad playback",
    "Expanding nationwide network for premium brand visibility",
  ],
};

export const productOverview: IProductOverview = {
  flavorText:
    "Each ad runs for 10-15 seconds in a continuous loop. Supported formats include MP4 (10-20MB) and imaged (JPG, WEBP, PNG), with a total file size of up to 200MB for iScreen Pro and iScreen Max, and up to 700MB for iScreen Pro Max. Ads are shown at least once every 2 minutes (depending on system performance), delivering high-frequency exposure of around 30-300 plays per hour for string visibility and consistent audience engagement.",
  products: [
    {
      img: ProOne,
      name: 'iScreen Pro (11")',
      desc: "The professional standard for point-of-rental advertising",
      specs: {
        height: "800px",
        width: "1280px",
        supportedFormats: [
          "Video: MP4 (10MB - 20MB)",
          "Image: .jpg, .webp, .png",
          "File capacity: 200MB",
        ],
      },
    },
    {
      img: ProTwo,
      name: 'iScreen Pro (11")',
      desc: "The professional standard for point-of-rental advertising",
      specs: {
        height: "800px",
        width: "1280px",
        supportedFormats: [
          "Video: MP4 (10MB - 20MB)",
          "Image: .jpg, .webp, .png",
          "File capacity: 200MB",
        ],
      },
    },
    {
      img: Max,
      name: 'iScreen Max (24")',
      desc: "Maximum screen real estate for high-traffic visibility",
      specs: {
        height: "1440px",
        width: "1080px",
        supportedFormats: [
          "Video: MP4 (10MB - 20MB)",
          "Image: .jpg, .webp, .png",
          "File capacity: 200MB",
        ],
      },
    },
    {
      img: ProMax,
      name: 'iScreen Pro Max (43")',
      desc: "The pinnacle of the iCharge ecosystem - Ultra impact",
      specs: {
        height: "1920px",
        width: "1080px",
        supportedFormats: [
          "Video: MP4 (10MB - 20MB)",
          "Image: .jpg, .webp, .png",
          "File capacity: 700MB",
        ],
      },
    },
  ],
};

export const whyAdvertise: { title: string; desc: string }[] = [
  {
    title:
      "Positioned in High-Traffic Areas to Ensure Your Brand Gets Seen, Everyday",
    desc: "Strategically placed in malls, terminals, hospitals, convenience stores, and more - where people go often and brands get noticed.",
  },
  {
    title: "Customer Rents Powerbank",
    desc: "A practical solution that customers value and use - creating a positive connection with your brand from the start.",
  },
  {
    title: "Ads Play Continuously on Screens",
    desc: "Your ads run in a loop on high-visibility digital screens - capturing attention during charging moments.",
  },
  {
    title: "Advertisers invest in Audience Reach and Visibility",
    desc: "Connect with real people in the right places at the right moment - maximizing your brand's visibility and impact.",
  },
  {
    title: "Enhance Brand Awareness",
    desc: "Build stronger brand recognition and trust through consistent exposure in everyday high-traffic environments.",
  },
];

export const benefitsForAdvertisers: { icon: LucideIcon; text: string }[] = [
  {
    icon: Users,
    text: "Access to a captive and attentive audience",
  },
  {
    icon: Repeat,
    text: "Increased recall through repeated exposure",
  },
  {
    icon: Target,
    text: "Flexible and dynamic digital content delivery",
  },
  {
    icon: CirclePlay,
    text: "Influence closer to the point of decision",
  },
];
