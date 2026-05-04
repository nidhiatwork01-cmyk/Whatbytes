"use client";

import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCartStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalItems = useCartStore((state) => state.totalItems);
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ?? ""
  );

  useEffect(() => {
    setCartCount(totalItems());
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val.trim()) {
      params.set("search", val.trim());
    } else {
      params.delete("search");
    }
    router.replace(`/?${params.toString()}`);
  };

  return (
    <header className="w-full bg-[#0056b3] h-24 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-4xl tracking-tight">
          Logo
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-xl px-12">
          <div className="relative group">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 group-focus-within:text-white"
            />
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/60 text-sm"
            />
          </div>
        </div>

        {/* Cart button */}
        <Link
          href="/cart"
          className="flex items-center gap-3 px-8 py-2.5 rounded bg-[#0f172a] text-white text-base font-semibold hover:bg-black transition-colors"
        >
          <ShoppingCart size={20} />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
