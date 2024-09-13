import { Award } from "lucide-react";
import { ReactNode } from "react";

interface CardItems {
  title: string;
  description: string;
  icons: ReactNode;
}

export const cardItems: CardItems[] = [
  {
    title: "App",
    description: "Download icharge App",
    icons: <Award size={40} color="green" />,
  },
  {
    title: "Scan",
    description: "Scan the QR code on the charging station",
    icons: <Award size={40} color="green" />,
  },
  {
    title: "Charge",
    description: "Enjoy charging",
    icons: <Award size={40} color="green" />,
  },
  {
    title: "Return",
    description: "Return the powerbank to the station",
    icons: <Award size={40} color="green" />,
  },
];
