import { Star, StarHalf } from "lucide-react";

export default function StarRating({ value = 0 }) {
  const filledStars = Math.floor(value);

  let halfStars = 0;
  if (value - filledStars >= 0.5) {
    halfStars = 1;
  }

  const emptyStars = 5 - filledStars - halfStars;

  return (
    <div className="flex items-center justify-start">
      {Array.from({ length: filledStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-6 h-6 fill-current text-[#F3CD03]"
        />
      ))}

      {Array.from({ length: halfStars }).map((_, i) => (
        <StarHalf
          key={`half-${i}`}
          className="w-6 h-6 fill-current text-[#F3CD03]"
        />
      ))}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-6 h-6 text-[#F3CD03]" />
      ))}
    </div>
  );
}
