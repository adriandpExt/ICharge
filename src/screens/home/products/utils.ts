import Products12Pro from "@/assets/Products/products/icharge12Pro.png";
import Products12 from "@/assets/Products/products/icharge12.png";
import Products8Plus from "@/assets/Products/products/icharge8Plus.png";
import Products8 from "@/assets/Products/products/icharge8.png";
import Products6 from "@/assets/Products/products/icharge6.png";
import Products24Max from "@/assets/Products/products/iCharge24PMax.png";
import Products48ProMax from "@/assets/Products/products/iCharge48ProMax.png";
import ProductsStandee from "@/assets/Products/products/iChargeStandee.png";
import { Product } from "./types";

export const products: Product[] = [
  {
    name: "iCharge 6",
    powerbanks: "6 Power Banks",
    image: Products6,
    wattage: {
      standBy: 3,
      fullLoad: 75,
    },
    dimension: [],
  },
  {
    name: "iCharge 8",
    powerbanks: "8 Power Banks",
    image: Products8,
    wattage: {
      standBy: 3,
      fullLoad: 65,
    },
    dimension: [],
  },
  {
    name: "iCharge 8 Plus",
    powerbanks: "8 Power Banks",
    description: "w/ Advertising Screen",
    image: Products8Plus,
    wattage: {
      standBy: 3,
      fullLoad: 65,
    },
    dimension: [],
  },
  {
    name: "iCharge 12",
    powerbanks: "12 Power Banks",
    image: Products12,
    wattage: {
      standBy: 3,
      fullLoad: 75,
    },
    dimension: [],
  },
  {
    name: "iCharge 12 Pro",
    powerbanks: "12 Power Banks",
    description: "w/ Advertising Screen",
    image: Products12Pro,
    wattage: {
      standBy: 3,
      fullLoad: 65,
    },
    dimension: [],
  },

  {
    name: "iCharge 24 Max",
    powerbanks: "24 Power Banks",
    description: "w/ Advertising Screen",
    image: Products24Max,
    wattage: {
      standBy: 24.2,
      fullLoad: 160,
    },
    dimension: [],
  },
  {
    name: "iCharge 48 Pro Max",
    powerbanks: "48 Power Banks",
    description: "w/ Advertising Screen",
    image: Products48ProMax,
    wattage: {
      standBy: 0,
      fullLoad: 0,
    },
    dimension: [],
  },
  {
    name: "iCharge Standee",
    powerbanks: "-",
    description: "w/ Advertising Screen",
    image: ProductsStandee,
    wattage: {
      standBy: 0,
      fullLoad: 0,
    },
    code: ["QC-RC", "QC-SQ"],
    dimension: [
      { h: 890, l: 450, w: 288 },
      { h: 956, l: 360, w: 340 },
    ],
  },
];

export const initValue: Product = {
  name: "",
  image: "",
  description: "",
  dimension: [],
  powerbanks: "0",
  wattage: {
    standBy: 0,
    fullLoad: 0,
  },
};
