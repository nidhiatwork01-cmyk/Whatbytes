"use client";

interface SidebarProps {
  selectedCategory: string;
  maxPrice: number;
  onCategoryChange: (category: string) => void;
  onPriceChange: (price: number) => void;
}

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function Sidebar({
  selectedCategory,
  maxPrice,
  onCategoryChange,
  onPriceChange,
}: SidebarProps) {
  const incrementPrice = () => onPriceChange(Math.min(1000, maxPrice + 10));
  const decrementPrice = () => onPriceChange(Math.max(0, maxPrice - 10));

  return (
    <aside className="w-72 shrink-0 space-y-6">
      {/* Primary Filter Block */}
      <div className="bg-[#0056b3] rounded-2xl overflow-hidden shadow-sm">
        <div className="px-6 py-4">
          <h2 className="text-white font-bold text-2xl">Filters</h2>
        </div>
        
        <div className="bg-transparent px-6 pb-8 space-y-6 text-white">
          {/* Category */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Category</h3>
            <div className="space-y-3">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category-primary"
                    checked={selectedCategory.toLowerCase() === cat.toLowerCase()}
                    onChange={() => onCategoryChange(cat)}
                    className="w-5 h-5 border-2 border-white/50 bg-transparent appearance-none rounded-full checked:bg-white checked:border-white transition-all cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:inset-1 after:bg-[#0056b3] after:rounded-full"
                  />
                  <span className="text-lg opacity-90 group-hover:opacity-100">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Price</h3>
            <div className="relative pt-2">
              <input
                type="range"
                min={0}
                max={1000}
                value={maxPrice}
                onChange={(e) => onPriceChange(Number(e.target.value))}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-base mt-4 font-medium">
                <span>0</span>
                <span>1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Filter Block (Cacyroy) */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Cacyroy</h3>
            <div className="space-y-3">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category-secondary"
                    checked={selectedCategory.toLowerCase() === cat.toLowerCase()}
                    onChange={() => onCategoryChange(cat)}
                    className="w-5 h-5 accent-[#0056b3]"
                  />
                  <span className="text-base text-gray-600 group-hover:text-gray-900">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-xl font-bold text-gray-800">Price</h3>
            <div className="relative">
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => onPriceChange(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:border-[#0056b3] pr-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {/* Custom functional increment/decrement arrows */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-full">
                <button 
                  onClick={incrementPrice}
                  className="text-[10px] text-gray-400 hover:text-gray-700 p-0.5 leading-none transition-colors"
                  type="button"
                  aria-label="Increase price"
                >
                  ▲
                </button>
                <button 
                  onClick={decrementPrice}
                  className="text-[10px] text-gray-400 hover:text-gray-700 p-0.5 leading-none transition-colors"
                  type="button"
                  aria-label="Decrease price"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
