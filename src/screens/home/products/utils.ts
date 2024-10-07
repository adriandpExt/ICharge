import Products12Pro from "@/assets/Products/products/icharge12Pro.png";
import Products12 from "@/assets/Products/products/icharge12.png";
import Products8Plus from "@/assets/Products/products/icharge8Plus.png";
import Products8 from "@/assets/Products/products/icharge8.png";
import Products6 from "@/assets/Products/products/icharge6.png";
import ProductsMax from "@/assets/Products/products/ichargeMax.png";
import ProductsQCRC from "@/assets/Products/products/ichargeQCRC.png";
import ProductsQCSQ from "@/assets/Products/products/ichargeQCSQ.png";
import ProductsPB from "@/assets/Products/products/ichargePowerBank.png";
import { Product } from "./types";

export const products: Product[] = [
  {
    name: "iCharge 12 Pro",
    code: "QI-12Pro",
    slots: "12",
    powerbanks: "8",
    description: "Advanced model with advertisement capabilities",
    image: Products12Pro,
  },
  {
    name: "iCharge 12",
    code: "QI-12",
    slots: "12",
    powerbanks: "8",
    description: "Standard model",
    image: Products12,
  },
  {
    name: "iCharge 8 Plus",
    code: "QI-8Plus",
    slots: "8",
    powerbanks: "5",
    description: "Compact model with advertisement capabilities",
    image: Products8Plus,
  },
  {
    name: "iCharge 8",
    code: "QI-8",
    slots: "8",
    powerbanks: "5",
    description: "Compact standard model",
    image: Products8,
  },
  {
    name: "iCharge 6",
    code: "QI-6",
    slots: "6",
    powerbanks: "4",
    description: "Smaller model for limited space",
    image: Products6,
  },
  {
    name: "iCharge Max",
    code: "QI-Max",
    slots: "24",
    powerbanks: "16",
    description: "High capacity with extensive advertisement space",
    image: ProductsMax,
  },
  {
    name: "iCharge QC-RC",
    code: "QI-RC",
    slots: "-",
    powerbanks: "-",
    description: "Standee model",
    image: ProductsQCRC,
  },
  {
    name: "iCharge QC-SQ",
    code: "QI-SQ",
    slots: "-",
    powerbanks: "-",
    description: "Standee model",
    image: ProductsQCSQ,
  },
  {
    name: "iCharge Power Bank",
    code: "QI-PB",
    slots: "-",
    powerbanks: "-",
    description: "Power Bank",
    image: ProductsPB,
  },
];

export const initValue: Product = {
  name: "",
  image: "",
  description: "",
  code: "",
  slots: "0",
  powerbanks: "0",
};
