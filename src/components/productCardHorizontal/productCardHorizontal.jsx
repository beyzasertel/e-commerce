import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCardHorizontal({
  slug,
  title,
  subtitle,
  image,
  price,
  oldPrice,
  colors = [],
}) {
  const [activeImage, setActiveImage] = useState(image);

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="h-175 md:h-88 w-full overflow-hidden bg-light-gray ">
        <img
          src={activeImage}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-3 py-6">
        <Link to={`/shop/product/${slug}`}>
          <h5 className="text-deep-navy font-bold">{title}</h5>
        </Link>
        <p className="text-gray-medium font-semibold">{subtitle}</p>

        <div className="flex items-center gap-3">
          <span className="text-gray line-through">${oldPrice}</span>
          <span className="text-dark-teal font-bold">${price}</span>
        </div>

        <div className="flex gap-3">
          {colors.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(item.image)}
              className={`h-4 w-4 rounded-full ${item.colorClass} ring-1 ring-gray-300 hover:scale-110 transition`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
