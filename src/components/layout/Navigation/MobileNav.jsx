import PropTypes from "prop-types";

const MobileNav = ({ isOpen, links, currentPath }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`block px-3 py-2 text-gray-600 hover:text-teal-600 
                ${currentPath === href ? "text-teal-600 font-semibold" : ""}`}
          >
            {label}
          </a>
        ))}
        <button className="w-full mt-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
          Book Session
        </button>
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default MobileNav;
