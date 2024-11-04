import Products12Pro from "@/assets/Products/products/icharge12Pro.png";
import Products12 from "@/assets/Products/products/icharge12.png";
import Products8Plus from "@/assets/Products/products/icharge8Plus.png";
import Products8 from "@/assets/Products/products/icharge8.png";
import Products6 from "@/assets/Products/products/icharge6.png";
import Products24Max from "@/assets/Products/products/ichargeMax.png";
import Products48ProMax from "@/assets/Products/products/iCharge48ProMax.png";
import ProductsQCRC from "@/assets/Products/products/ichargeQCRC.png";
import ProductsQCSQ from "@/assets/Products/products/ichargeQCSQ.png";
import { Product } from "./types";

export const products: Product[] = [
  {
    productDetails: {
      name: "iCharge 6",
      description: "Smaller model for limited space",
      image: Products6,
      seatCapacity: "40 below",
    },
    productDescriptions: {
      wattage: { fullLoad: "75W", standBy: "3W" },
      dimensions: { h: "1150mm", l: "260mm", w: "235mm" },
      content: { code: "QI-6", slots: "6", powerbanks: "4" },
    },
  },
  {
    productDetails: {
      name: "iCharge 8",
      description: "Compact standard model",
      image: Products8,
      seatCapacity: "40-80",
    },
    productDescriptions: {
      wattage: { fullLoad: "65W", standBy: "3W" },
      dimensions: { h: "174mm", l: "343mm", w: "188mm" },
      content: { code: "QI-8", slots: "8", powerbanks: "5" },
    },
  },
  {
    productDetails: {
      name: "iCharge 8 Plus",
      description: "Compact model with advertisement capabilities",
      image: Products8Plus,
      seatCapacity: "Many Passerby",
    },
    productDescriptions: {
      wattage: { fullLoad: "65W", standBy: "3W" },
      dimensions: { h: "174mm", l: "343mm", w: "188mm" },
      content: { code: "QI-8Plus", slots: "8", powerbanks: "5" },
    },
  },
  {
    productDetails: {
      name: "iCharge 12",
      description: "Standard model",
      image: Products12,
      seatCapacity: "80 above",
    },
    productDescriptions: {
      wattage: { fullLoad: "75W", standBy: "3W" },
      dimensions: { h: "260mm", l: "260mm", w: "235mm" },
      content: { code: "QI-12", slots: "12", powerbanks: "8" },
    },
  },
  {
    productDetails: {
      name: "iCharge 12 Pro",
      description: "Advanced model with advertisement capabilities",
      image: Products12Pro,
      seatCapacity: "Many Passerby",
    },
    productDescriptions: {
      wattage: { fullLoad: "75W", standBy: "3W" },
      dimensions: { h: "260mm", l: "260mm", w: "235mm" },
      content: { slots: "12", powerbanks: "8", code: "QI-12Pro" },
    },
  },
  {
    productDetails: {
      name: "iCharge 24 Max",
      description: "High capacity with extensive advertisement space",
      image: Products24Max,
      seatCapacity: "Shopping malls, Big lobbies, Ballrooms",,
    },
    productDescriptions: {
      wattage: { fullLoad: "160W", standBy: "24.2W" },
      dimensions: { h: "1650mm", l: "540mm", w: "450mm" },
      content: { code: "QI-Max", slots: "24", powerbanks: "16" },
    },
  },
  {
    productDetails: {
      name: "iCharge 48 Pro Max",
      description: "High capacity with extensive advertisement space",
      image: Products48ProMax,
      seatCapacity: "Many Passerby",
    },
    productDescriptions: {
      wattage: { fullLoad: "--W", standBy: "--W" },
      dimensions: { h: "1650mm", l: "540mm", w: "450mm" },
      content: { code: "-", slots: "48", powerbanks: "32" },
    },
  },
  {
    productDetails: {
      name: "iCharge Standee SR",
      description: "Standee model (rectangle)",
      image: ProductsQCRC,
      seatCapacity: "",
    },
    productDescriptions: {
      wattage: { fullLoad: "-", standBy: "-" },
      dimensions: { h: "890mm", l: "450mm", w: "288mm" },
      content: { code: "-", slots: "-", powerbanks: "-" },
    },
  },
  {
    productDetails: {
      name: "iCharge Standee SS",
      description: "Standee model (rectangle)",
      image: ProductsQCSQ,
      seatCapacity: "",
    },
    productDescriptions: {
      wattage: { fullLoad: "-", standBy: "-" },
      dimensions: { h: "956mm", l: "360mm", w: "340mm" },
      content: { code: "-", slots: "-", powerbanks: "-" },
    },
  },
];

export const initValue: Product = {
  productDetails: {
    name: "",
    description: "",
    image: "",
    seatCapacity: "",
  },
  productDescriptions: {
    wattage: { fullLoad: "", standBy: "" },
    dimensions: { h: "", l: "", w: "" },
    content: { code: "", slots: "", powerbanks: "" },
  },
};
