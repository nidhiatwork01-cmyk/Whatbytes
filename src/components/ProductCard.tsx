"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  if (featured) {
    return (
      <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_8px_30_rgba(0,0,0,0.08)] transition-all">
        <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
          <Link href={`/product/${product.id}`} className="w-full lg:w-1/2 flex justify-center hover:opacity-90 transition-opacity">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain max-h-[300px] sm:max-h-[350px] w-auto drop-shadow-xl"
              unoptimized
            />
          </Link>
          <div className="w-full lg:w-1/2 space-y-4 flex flex-col h-full">
            <Link href={`/product/${product.id}`} className="group">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{product.title}</h2>
              <p className="text-3xl font-bold text-gray-800 mt-2">${product.price}</p>
              <div className="mt-2">
                <StarRating rating={product.rating} />
              </div>
            </Link>
            
            <p className="text-lg text-gray-600 leading-snug mt-4 flex-1">
              {product.description}
            </p>
            
            <div className="mt-4">
              <p className="text-lg font-bold text-gray-800">Category</p>
              <p className="text-lg text-gray-600">{product.category}</p>
            </div>
            
            <div className="mt-auto pt-6">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-xl bg-[#0056b3] text-white font-bold text-xl hover:bg-blue-700 transition-all shadow-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all h-full">
      <Link href={`/product/${product.id}`} className="flex-1 flex flex-col items-center w-full group">
        <div className="flex-1 flex items-center justify-center min-h-[180px] w-full mb-6">
          <Image
            src={product.image}
            alt={product.title}
            width={180}
            height={180}
            className="object-contain max-h-[160px] w-auto drop-shadow-md group-hover:scale-105 transition-transform"
            unoptimized
          />
        </div>
        <div className="w-full space-y-2 text-left mb-6">
          <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{product.title}</h2>
          <p className="text-lg font-bold text-gray-800">${product.price}</p>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="w-full py-3 rounded-lg bg-[#0056b3] text-white font-bold text-base hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}
