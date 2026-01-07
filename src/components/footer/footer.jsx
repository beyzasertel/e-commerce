import { Facebook, Instagram, Twitter } from "lucide-react";
import FooterSubscribeForm from "../footerSubscribeForm/FooterSubscribeForm";

export default function Footer() {
  return (
    <footer>
      <div className="bg-light-gray">
        <div className="container mx-auto border-b-2 border-lightest-gray">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 px-4 md:px-0">
            <h3 className="text-deep-navy">Bandage</h3>
            <div className="flex items-center gap-2">
              <Facebook color="#23A6F0" />
              <Instagram color="#23A6F0" />
              <Twitter color="#23A6F0" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6 flex flex-col md:flex-row items-start justify-between gap-4 px-4 md:px-0">
        <div className="flex flex-col gap-4">
          <h5 className="text-deep-navy">Company Info</h5>
          <div className="link text-gray-medium flex flex-col gap-4">
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-deep-navy">Legal</h5>
          <div className="link text-gray-medium flex flex-col gap-4">
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-deep-navy">Features</h5>
          <div className="link text-gray-medium flex flex-col gap-4">
            <a href="">Business Marketing</a>
            <a href="">User Analytic</a>
            <a href="">Live Chat</a>
            <a href="">Unlimited Support</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-deep-navy">Resources</h5>
          <div className="link text-gray-medium flex flex-col gap-4">
            <a href="">IOS & Android</a>
            <a href="">Watch a Demo</a>
            <a href="">Customers</a>
            <a href="">API</a>
          </div>
        </div>
        <div>
          <FooterSubscribeForm />
        </div>
      </div>

      <div className="bg-light-gray px-4 md:px-0">
        <div className="container mx-auto border-b-2 border-lightest-gray">
          <p className="text-gray-medium font-bold py-4">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
