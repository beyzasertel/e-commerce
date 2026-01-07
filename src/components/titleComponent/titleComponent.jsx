export default function TitleComponent({
  subtitle,
  title,
  text,
  align = "center",
  subtitleColor = "text-gray-medium",
  gap = "gap-3",
}) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`
        py-4 md:py-12
        flex flex-col
        ${gap}
        ${alignClass[align]}
      `}
    >
      {subtitle && <p className={`${subtitleColor}`}>{subtitle}</p>}

      {title && <h3 className="text-deep-navy">{title}</h3>}

      {text && <p className="text-gray-medium max-w-xl">{text}</p>}
    </div>
  );
}
