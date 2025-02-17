import PropTypes from "prop-types";

const ServiceCard = ({ title, description, icon, duration, format }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm text-gray-500">
        {duration && <p>Duration: {duration}</p>}
        {format && <p>Format: {format}</p>}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  duration: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

export default ServiceCard;
