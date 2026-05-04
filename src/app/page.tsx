"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import { Suspense } from "react";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") ?? "All"
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("maxPrice") ?? 1000)
  );
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  // Sync state from URL params (e.g. when user clicks footer links or back/forward)
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") ?? "All");
    setMaxPrice(Number(searchParams.get("maxPrice") ?? 1000));
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  const updateURL = useCallback(
    (category: string, price: number, searchTerm: string) => {
      const params = new URLSearchParams();
      if (category !== "All") params.set("category", category);
      if (price < 1000) params.set("maxPrice", String(price));
      if (searchTerm.trim()) params.set("search", searchTerm.trim());
      router.replace(params.toString() ? `/?${params.toString()}` : "/");
    },
    [router]
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURL(category, maxPrice, search);
  };

  const handlePriceChange = (price: number) => {
    setMaxPrice(price);
    updateURL(selectedCategory, price, search);
  };

  const filtered = products.filter((p) => {
    const categoryFilter = selectedCategory.toLowerCase();
    const productCategory = p.category.toLowerCase();
    
    const matchCategory =
      categoryFilter === "all" || productCategory === categoryFilter;
    
    const matchPrice = p.price <= maxPrice;
    
    const matchSearch = p.title
      .toLowerCase()
      .includes(search.toLowerCase());
      
    return matchCategory && matchPrice && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <Sidebar
          selectedCategory={selectedCategory}
          maxPrice={maxPrice}
          onCategoryChange={handleCategoryChange}
          onPriceChange={handlePriceChange}
        />

        {/* Product section */}
        <section className="flex-1 min-w-0">
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-[#0f172a] tracking-tight">
              Product Listing
            </h1>
          </div>
          <ProductGrid products={filtered} />
        </section>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center h-64">
        <div className="text-gray-400">Loading...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
