export interface IIScreenProduct {
  img: string;
  name: string;
  desc: string;
  specs: { height: string; width: string; supportedFormats: string[] };
}

export interface IProductOverview {
  flavorText: string;
  products: IIScreenProduct[];
}

export interface IIScreenDetails {
  title: string;
  text: string;
  keyFeatures: string[];
}
