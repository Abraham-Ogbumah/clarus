import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterColumn title="Dr. Sarah Mitchell">
            <p className="text-gray-400">
              Licensed Clinical Psychologist
              <br />
              License #12345
            </p>
          </FooterColumn>

          <FooterColumn title="Quick Links">
            <ul className="space-y-2">
              <li>
                <FooterLink href="#/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="#/about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#/services">Services</FooterLink>
              </li>
              <li>
                <FooterLink href="#/contact">Contact</FooterLink>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <ul className="space-y-2 text-gray-400">
              <li>
                123 Therapy St, Suite 100
                <br />
                Los Angeles, CA 90001
              </li>
              <li>(555) 123-4567</li>
              <li>contact@drsarah.com</li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Emergency Resources">
            <ul className="space-y-2 text-gray-400">
              <li>National Crisis Line: 988</li>
              <li>Emergency: 911</li>
            </ul>
          </FooterColumn>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dr. Sarah Mitchell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
