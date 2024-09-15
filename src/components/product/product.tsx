import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Products from "@/assets/Products/QC-RC.png";

interface Product {
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    name: "Joos Power Bank",
    image: Products,
    description:
      "Compact, portable, and powerful, our power bank is perfect for on-the-go charging needs.",
  },
  {
    name: "Joos Mini",
    image: Products,
    description: "Perfect for venues with available countertop space.",
  },
  {
    name: "Joos Mini+",
    image: Products,
    description: "Perfect for all venues... no countertop space? No problem!",
  },
  {
    name: "Max Junior",
    image: Products,
    description: "Perfect for higher footfall areas with limited space.",
  },
  {
    name: "Joos Max",
    image: Products,
    description: "Perfect advertising solution with maximum charging capacity.",
  },
];

export default function ProductRange() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Product Range</h1>
      <div className="md:hidden">
        <Carousel className="mx-auto w-full max-w-xs">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <div className="p-4 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={256}
                    height={256}
                    className="mx-auto mb-4"
                  />
                  <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
                  <p className="text-sm">{product.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="hidden grid-cols-5 gap-8 md:grid">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              width={256}
              height={256}
              className="mx-auto mb-4"
            />
            <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
