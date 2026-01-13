export default function CategoryCard({
  bgImage,
  link = "#",
  category,
  itemCount,
}) {
  return (
    <a
      href={link}
      className="group relative block w-full overflow-hidden bg-lightest-gray"
    >
      <div
        className="h-55 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3 className="text-2xl font-bold tracking-wide">{category}</h3>
        <p className="mt-2 text-lg font-medium">{itemCount} Items</p>
      </div>
    </a>
  );
}
