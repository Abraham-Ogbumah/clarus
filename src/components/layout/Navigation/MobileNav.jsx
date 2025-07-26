import PropTypes from "prop-types";
import Button from "../../common/Button";

const MobileNav = ({ isOpen, currentPath, setIsOpen }) => {
  if (!isOpen) return null;

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    window.navigateTo(href);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className={`block px-3 py-2 text-clarus-light-grey hover:text-clarus-sage-green font-semibold transition-colors
                ${currentPath === href ? "text-clarus-sage-green font-bold bg-clarus-lightest rounded-md" : ""}`}
          >
            {label}
          </a>
        ))}
        <Button variant="mobile" size="large">
          Book Your Session
        </Button>
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  currentPath: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileNav;
