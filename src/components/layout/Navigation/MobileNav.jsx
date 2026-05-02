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
    <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
        {links.map(({ href, label }) => {
          const isActive = currentPath === href;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium no-underline select-none transition-all duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-clarus-accent-green ${
                isActive
                  ? "bg-clarus-dark text-white visited:text-white active:text-white"
                  : "text-clarus-dark-grey visited:text-clarus-dark-grey active:text-clarus-dark-grey hover:bg-clarus-lightest hover:text-clarus-dark"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {label}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-clarus-accent-green" />
              )}
            </a>
          );
        })}

        <div className="pt-4 border-t border-gray-100 mt-2">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            href="https://claruscounselling.janeapp.com/#staff_member/1"
          >
            Book Your Session
          </Button>
        </div>
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
