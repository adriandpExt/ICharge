import { Product } from "./types";

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
