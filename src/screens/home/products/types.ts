// export interface Product {
//   name: string;
//   image: string;
//   description: string;
//   subLabel: {
//     slot: number;
//     size: ProdSize;
//     wattage: ProdWatts;
//   };
// }

// interface ProdSize {
//   h: number;
//   l: number;
//   w: number;
// }

// interface ProdWatts {
//   standBy: number;
//   fullLoad: number;
// }

// export interface ProdModal {
//   item: Product;
//   open: boolean;
//   handleOpenChange: () => void;
// }

export interface Product {
  name: string;
  image: string;
  description: string;
  code: string;
  slots: string;
  powerbanks: string;
}

export interface ProdModal {
  item: Product;
  open: boolean;
  handleOpenChange: () => void;
}
