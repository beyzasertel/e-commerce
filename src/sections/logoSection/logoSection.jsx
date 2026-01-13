import { logos } from "../../data/logoSection";

export default function LogoSection() {
  return (
    <section className="bg-light-gray py-12">
      <div className="container mx-auto flex-col gap-12 md:gap-0 md:flex-row flex items-center justify-between">
        {logos.map((logo, id) => (
          <img id={logo.id} src={logo.image} alt="logo" className="h-12" />
        ))}
      </div>
    </section>
  );
}
