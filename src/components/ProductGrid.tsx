import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No products found
        </h3>
        <p className="text-gray-400 text-sm">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  // The last product (Smartphone) is always featured
  const regularProducts = products.slice(0, products.length - 1);
  const featuredProduct = products[products.length - 1];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {regularProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <ProductCard key={featuredProduct.id} product={featuredProduct} featured />
    </div>
  );
}
