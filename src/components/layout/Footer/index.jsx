import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="bg-clarus-dark-olive text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterColumn logoSrc="/white_cl.png">
            <p className="text-clarus-lightest font-medium">
              Clarus Counselling and Psychotherapy
            </p>
            <p className="text-clarus-lightest text-sm mt-2 opacity-75 leading-relaxed">
              A safe, empathetic space for healing, growth, and lasting change
              in Ottawa, ON.
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
                {/* Instagram SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-clarus-lightest">
          <p>
            Clarus Counselling and Psychotherapy &copy;{" "}
            {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
