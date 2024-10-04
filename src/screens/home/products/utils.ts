import Products from "@/assets/Products/icharge Dodeca.png";
import Products2 from "@/assets/Products/QC-RC.2.png";
import Products3 from "@/assets/Products/icharge Tower.png";
import Products4 from "@/assets/Products/icharge Hexa.png";
import Products5 from "@/assets/Products/QC-SQ.png";
import { Product } from "./types";

export const products: Product[] = [
  {
    name: "ICharge",
    image: Products,
    description:
      "Compact, portable, and powerful, our power bank is perfect for on-the-go charging needs.",
    subLabel: {
      slot: 10,
      size: {
        h: 250,
        l: 265,
        w: 235,
      },
      wattage: {
        standBy: 3,
        fullLoad: 75,
      },
    },
  },
  {
    name: "ICHARGE 13",
    image: Products2,
    description: "Perfect for venues with available countertop space.",
    subLabel: {
      slot: 10,
      size: {
        h: 250,
        l: 265,
        w: 235,
      },
      wattage: {
        standBy: 3,
        fullLoad: 75,
      },
    },
  },
  {
    name: "ICHARGE 12",
    image: Products3,
    description: "Perfect for all venues... no countertop space? No problem!",
    subLabel: {
      slot: 10,
      size: {
        h: 250,
        l: 265,
        w: 235,
      },
      wattage: {
        standBy: 3,
        fullLoad: 75,
      },
    },
  },
  {
    name: "ICharge",
    image: Products4,
    description: "Perfect for higher footfall areas with limited space.",
    subLabel: {
      slot: 10,
      size: {
        h: 250,
        l: 265,
        w: 235,
      },
      wattage: {
        standBy: 3,
        fullLoad: 75,
      },
    },
  },
  {
    name: "ICharge",
    image: Products5,
    description: "Perfect advertising solution with maximum charging capacity.",
    subLabel: {
      slot: 10,
      size: {
        h: 250,
        l: 265,
        w: 235,
      },
      wattage: {
        standBy: 3,
        fullLoad: 75,
      },
    },
  },
];

export const initValue: Product = {
  name: "",
  image: "",
  description: "",
  subLabel: {
    slot: 0,
    size: {
      h: 0,
      l: 0,
      w: 0,
    },
    wattage: {
      standBy: 0,
      fullLoad: 0,
    },
  },
};
