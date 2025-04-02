import PropTypes from "prop-types";
import NavLink from "./Navlink";

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
      <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
        Book Session
      </button>
    </div>
  );
};

DesktopNav.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default DesktopNav;
