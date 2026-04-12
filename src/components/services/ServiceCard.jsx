import PropTypes from "prop-types";

const ServiceCard = ({
  title,
  description,
  text,
  duration,
  format,
  icon: Icon,
}) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-clarus-lightest hover:border-clarus-accent-green hover:-translate-y-1 flex flex-col">
      {/* Icon */}
      <div className="w-12 h-12 bg-clarus-dark-olive rounded-xl flex items-center justify-center mb-5 group-hover:bg-clarus-accent-green transition-colors duration-300 flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-clarus-dark mb-2 leading-snug">
        {title}
      </h3>

      {/* Short description */}
      <p className="text-clarus-dark-grey text-sm mb-3">{description}</p>

      {/* Full text */}
      <p className="text-clarus-dark-grey text-sm leading-relaxed flex-1">
        {text}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-clarus-lightest">
        <span className="text-xs font-medium text-clarus-medium-green bg-clarus-lightest px-3 py-1 rounded-full">
          {duration}
        </span>
        {format && (
          <span className="text-xs font-medium text-clarus-medium-green bg-clarus-lightest px-3 py-1 rounded-full">
            {format}
          </span>
        )}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  format: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
};

export default ServiceCard;
