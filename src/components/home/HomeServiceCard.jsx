import { useState } from "react";
import PropTypes from "prop-types";

const HomeServiceCard = ({
  title,
  description,
  text,
  duration,
  icon: Icon,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-clarus-lightest hover:border-clarus-accent-green hover:-translate-y-1 flex flex-col cursor-pointer"
      onClick={() => setExpanded((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setExpanded((prev) => !prev)}
      aria-expanded={expanded}
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-clarus-dark-olive rounded-xl flex items-center justify-center mb-5 group-hover:bg-clarus-accent-green transition-colors duration-300 flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-clarus-dark mb-2 leading-snug">
        {title}
      </h3>

      {/* Description — fades out when expanded */}
      <p
        className={`text-clarus-dark-grey text-sm leading-relaxed transition-all duration-300 ${
          expanded ? "hidden" : "flex-1"
        }`}
      >
        {description}
      </p>

      {/* Expanded text — fades in on click */}
      {expanded && (
        <p className="text-clarus-dark-grey text-sm leading-relaxed flex-1 animate-fade-in">
          {text}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-clarus-lightest">
        <span className="text-xs font-medium text-clarus-medium-green bg-clarus-lightest px-3 py-1 rounded-full">
          {duration}
        </span>
        <span className="text-xs text-clarus-sage-green">
          {expanded ? "Click to close" : "Click to read more"}
        </span>
      </div>
    </div>
  );
};

HomeServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default HomeServiceCard;
