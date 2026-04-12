import PropTypes from "prop-types";
import NavLink from "./Navlink";
import Button from "../../common/Button";

const DesktopNav = ({ currentPath, isScrolled }) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map(({ href, label }) => (
        <NavLink
          key={href}
          href={href}
          isCurrent={currentPath === href}
          isScrolled={isScrolled}
        >
          {label}
        </NavLink>
      ))}
      <Button
        href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
        target="_blank"
        variant="primary"
        size="sm"
      >
        Book Your Session
      </Button>
    </div>
  );
};

DesktopNav.propTypes = {
  currentPath: PropTypes.string.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default DesktopNav;
