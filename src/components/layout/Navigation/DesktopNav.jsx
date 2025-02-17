import PropTypes from "prop-types";
import NavLink from "./Navlink";

const DesktopNav = ({ links, currentPath }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map(({ href, label }) => (
        <NavLink key={href} href={href} isCurrent={currentPath === href}>
          {label}
        </NavLink>
      ))}
      <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
        Book Session
      </button>
    </div>
  );
};

DesktopNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default DesktopNav;
