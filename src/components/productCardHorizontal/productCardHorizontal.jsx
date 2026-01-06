export default function ProductCardHorizontal({
  title,
  subtitle,
  image,
  price,
  oldPrice,
  colors = [],
}) {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* IMAGE */}
      <div className="h-[520px] w-full overflow-hidden bg-light-gray ">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center gap-3 py-6">
        <h5 className="text-deep-navy font-bold">{title}</h5>
        <p className="text-gray-medium font-semibold">{subtitle}</p>

        <div className="flex items-center gap-3">
          <span className="text-gray line-through">{oldPrice}</span>
          <span className="text-dark-teal font-bold">{price}</span>
        </div>

        <div className="flex gap-3">
          {colors.map((color, idx) => (
            <span key={idx} className={`h-4 w-4 rounded-full ${color}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
