import { CardItems } from "./type";

import {
  Award,
  BatteryCharging,
  ScanLine,
  SlidersVertical,
} from "lucide-react";

export const cardItems: CardItems[] = [
  {
    title: "App",
    description: "Download icharge App",
    icons: <Award size={40} color="green" />,
  },
  {
    title: "Scan",
    description: "Scan the QR code on the charging station",
    icons: <ScanLine size={40} color="green" />,
  },
  {
    title: "Charge",
    description: "Enjoy charging",
    icons: <BatteryCharging size={40} color="green" />,
  },
  {
    title: "Return",
    description: "Return the powerbank to the station",
    icons: <SlidersVertical size={40} color="green" />,
  },
];

export const handleLenght = (step: number) => {
  if (step === 1) {
    return {
      item: "items-end",
      height: "h-1/2",
    };
  } else if (step === 4) {
    return {
      item: "items-start",
      height: "h-1/2",
    };
  } else {
    return {
      item: "items-center",
      height: "h-full",
    };
  }
};
