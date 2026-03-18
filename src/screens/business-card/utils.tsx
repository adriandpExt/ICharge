import { ICardInfo } from "./type";
import NoImage from "@/assets/businessCard/no_img.png";
import JaysonEyoy from "@/assets/businessCard/jayson_eyoy.png";
import FloryOcampo from "@/assets/businessCard/flory_joy_ocampo.png";
import EnosLola from "@/assets/businessCard/enos_ephraim_lola.png";
import AleeBorromeo from "@/assets/businessCard/alee_borromeo.png";
import MatthewOng from "@/assets/businessCard/matthew_ong.png";
import RoseRivera from "@/assets/businessCard/rose_rivera.png";
import WillyElipe from "@/assets/businessCard/willy_elipe.png";
import ContactUS from "@/assets/businessCard/contact_us.png";

import iScreen from '@/assets/businessCard/iScreen_white_textless.png';

export const businessCardInfo: ICardInfo[] = [
  {
    id: "001",
    name: "Joe Wang",
    role: "CEO",
    img: NoImage,
    qrLink: "/business-card/001",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09388099999",
      },
      {
        buttonType: "Email",
        link: "joe@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "002",
    name: "Leff Shi",
    role: "COO",
    img: NoImage,
    qrLink: "/business-card/002",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09177898088",
      },
      {
        buttonType: "Email",
        link: "leff@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "003",
    name: "Evonne Huang",
    role: "CFO",
    img: NoImage,
    qrLink: "/business-card/003",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09125766666",
      },
      {
        buttonType: "Email",
        link: "evonne@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "004",
    name: "Willy Elipe",
    role: "General Manager",
    img: WillyElipe,
    qrLink: "/business-card/004",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09063032912",
      },
      {
        buttonType: "Email",
        link: "marketinginfo@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "005",
    name: "Rose Rivera",
    role: "Executive Secretary",
    img: RoseRivera,
    qrLink: "/business-card/005",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09958130999",
      },
      {
        buttonType: "Email",
        link: "official@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "006",
    name: "Elvin Dela Cruz",
    role: "Sales and Marketing Director",
    img: NoImage,
    qrLink: "/business-card/006",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09171869505",
      },
      {
        buttonType: "Email",
        link: "elvin@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "007",
    name: "Alee Borromeo",
    role: "HR Manager",
    img: AleeBorromeo,
    qrLink: "/business-card/007",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09193953911",
      },
      {
        buttonType: "Email",
        link: "careers@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  //NO VIBER
  {
    id: "010",
    name: "Jayson M. Eyoy",
    role: "Sales and Marketing Officer",
    img: JaysonEyoy,
    qrLink: "/business-card/010",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09670579366",
      },
      {
        buttonType: "Email",
        link: "jayson@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "014",
    name: "Matthew Rothchild Y. Ong",
    role: "Sales and Marketing Manager",
    img: MatthewOng,
    qrLink: "/business-card/014",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09682756650",
      },
      {
        buttonType: "Email",
        link: "matthew@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "015",
    name: "Enos Ephraim L. Lola",
    role: "Sales and Marketing Manager",
    img: EnosLola,
    qrLink: "/business-card/015",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09917092340",
      },
      {
        buttonType: "Email",
        link: "enos@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "017",
    name: "Flory Joy S. Ocampo",
    role: "Sales and Marketing Officer",
    img: FloryOcampo,
    qrLink: "/business-card/017",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09482691111",
      },
      {
        buttonType: "Email",
        link: "floryjoy@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
    ],
  },
  {
    id: "020",
    name: "Social Media Accounts",
    img: NoImage,
    qrLink: "/social-media",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09187388888",
      },
      {
        buttonType: "Email",
        link: "reachus@icharge.com.ph",
      },
    ],
  },
  {
    id: "021",
    img: ContactUS,
    qrLink: "/business-card/021",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09187388888",
      },
      {
        buttonType: "Email",
        link: "reachus@icharge.com.ph",
      },
      {
        link: "/",
        label: "Visit our website",
      },
      {
        link: "/how-to",
        label: "How to use iCharge",
        icon: "ic_youtube",
      },
    ],
  },
  {
    id: "022",
    img: ContactUS,
    qrLink: "/business-card/022",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09187388888",
      },
      {
        buttonType: "Email",
        link: "reachus@icharge.com.ph",
      },
      {
        link: "https://icharge.com.ph",
        label: "Visit our website",
      },
      {
        link: "https://www.youtube.com/embed/GGAc5QctHFE",
        label: "How to use iCharge",
        icon: "ic_youtube",
      },
    ],
  },
  {
    id: "023",
    img: iScreen,
    qrLink: "/business-card/023",
    buttonContent: [
      {
        buttonType: "Viber",
        link: "09856107777",
      },
      {
        buttonType: "Email",
        link: "iscreen@icharge.com.ph",
      },
      {
        link: "/iscreen",
        label: "View our brochure",
      },
      {
        icon: "ic_facebook",
        link: "https://www.facebook.com/iscreen.official.ph",
        label: "Visit our Facebook page",
      },
      {
        icon: "ic_tiktok",
        link: "https://www.tiktok.com/@iscreen_ph",
        label: "Visit our TikTok page",
      },
    ],
  },
];
