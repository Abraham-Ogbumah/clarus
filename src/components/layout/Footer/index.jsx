import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import FooterContact from "./FooterContact";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-clarus-dark-olive text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterColumn logoSrc="/white_cl.png">
            <p className="text-clarus-lightest">
              Clarus Counselling and Psychotherapy
            </p>
          </FooterColumn>

          <div title="Quick Links">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">Services</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <FooterContact />

          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/clarus_psychotherapy?igsh=MWNyb2U1NDQ4bzRmdg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-clarus-sage-green rounded-full flex items-center justify-center hover:bg-clarus-accent-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-clarus-lightest">
          <p>
            Clarus Counselling and Psychotherapy &copy; 2025. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
