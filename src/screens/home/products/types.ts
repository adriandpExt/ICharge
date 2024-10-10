interface ProdSize {
  h: number;
  l: number;
  w: number;
}

interface ProdWatts {
  standBy: number;
  fullLoad: number;
}

export interface Product {
  name: string;
  image: string;
  description?: string;
  wattage: ProdWatts;
  powerbanks: string;
  dimension: ProdSize[];
  code?: string[];
}

export interface ProdModal {
  item: Product;
  open: boolean;
  handleOpenChange: () => void;
}
