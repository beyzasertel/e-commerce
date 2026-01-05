import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="hidden md:block w-full bg-deep-navy p-2 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Phone />
            <p>(225) 555-0118</p>
            <Mail />
            <p>michelle.rivera@example.com</p>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Follow Us :</p>
            <Instagram />
            <Youtube />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
}
