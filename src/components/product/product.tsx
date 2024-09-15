"use client";

import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (Math.abs(touchDiff) > 75) {
      if (touchDiff > 0) {
        // Swipe left
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      } else {
        // Swipe right
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + products.length) % products.length,
        );
      }
    }
  };

  useEffect(() => {
    if (isMobile) {
      setCurrentIndex(0);
    }
  }, [isMobile]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Product Range</h1>
      {isMobile ? (
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {products.map((product, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="mx-auto w-64 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto mb-4"
                  />
                  <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
                  <p className="text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {products.map((_, index) => (
              <div
                key={index}
                className={`mx-1 h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto mb-4"
              />
              <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
