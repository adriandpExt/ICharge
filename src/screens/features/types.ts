export interface Product {
  name: string;
  image: string;
  description: string;
}

export interface ProdModal {
  item: Product;
  open: boolean;
  handleOpenChange: () => void;
}
