export default function ProductCard({ title, image, size = "md" }) {
  const sizes = {
    lg: "h-[520px] md:h-[600px]",
    sm: "h-[240px] md:h-[285px]",
    md: "h-[360px] md:h-[420px]",
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${sizes[size]} bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bottom-6 left-6 bg-white px-10 py-4 text-sm font-bold tracking-wide text-[#252B42]">
        {title}
      </div>
    </div>
  );
}
