"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, CheckCircle } from "lucide-react";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import StarRating from "@/components/StarRating";
import QuantitySelector from "@/components/QuantitySelector";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id));
  const addItem = useCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Product not found
        </h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft size={16} /> Back to products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to products
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="bg-gray-50 flex items-center justify-center p-10 md:w-2/5 min-h-72">
            <Image
              src={product.image}
              alt={product.title}
              width={320}
              height={320}
              className="object-contain max-h-80 w-auto"
              unoptimized
              priority
            />
          </div>

          {/* Right: Details */}
          <div className="p-8 md:p-10 flex flex-col flex-1">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 uppercase tracking-wide">
                {product.category}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {product.brand}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500">
                ({product.rating}/5)
              </span>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold text-blue-700 mb-5">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity
              </label>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                min={1}
              />
            </div>

            {/* Add to cart */}
            <button
              id={`detail-add-to-cart-${product.id}`}
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-white font-semibold text-base transition-all hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: added ? "#16a34a" : "#1a56db" }}
            >
              {added ? (
                <>
                  <CheckCircle size={20} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Add to Cart · ${(product.price * quantity).toFixed(2)}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
