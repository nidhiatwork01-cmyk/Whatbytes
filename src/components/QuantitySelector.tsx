"use client";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-lg font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-8 text-center font-semibold text-gray-900 text-lg">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
