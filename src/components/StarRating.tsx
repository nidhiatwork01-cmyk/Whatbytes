interface StarRatingProps {
  rating: number;
  max?: number;
}

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-amber-400" : "text-gray-300"}
          style={{ fontSize: "1rem" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
