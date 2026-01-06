export default function TitleComponent({ subtitle, title, text }) {
  return (
    <div className="py-4 md:py-12 text-center">
      <h4 className="text-gray-medium">{subtitle}</h4>
      <h3 className="text-deep-navy">{title}</h3>
      <p className="text-gray-medium">{text}</p>
    </div>
  );
}
