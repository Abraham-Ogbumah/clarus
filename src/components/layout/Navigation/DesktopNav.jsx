import PropTypes from "prop-types";
import NavLink from "./Navlink";
import Button from "../../common/Button";

const DesktopNav = ({ currentPath }) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map(({ href, label }) => (
        <NavLink key={href} href={href} isCurrent={currentPath === href}>
          {label}
        </NavLink>
      ))}
      <Button
        href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
        target="_blank"
        variant="primary"
        size="large"
      >
        Book Your Session
      </Button>
    </div>
  );
};

DesktopNav.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default DesktopNav;
