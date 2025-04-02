import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import FooterContact from "./FooterContact";
import FooterEmergency from "./FooterEmergency";

const Footer = () => {
  return (
    <footer className="bg-clarus-dark-olive text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterColumn logoSrc="/white_cl.png">
            <p className="text-white-400">
              Clarus Counselling and Psychotherapy
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

          <FooterContact />
          <FooterEmergency />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy;2025 Clarus Counselling and Psychotherapyy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
