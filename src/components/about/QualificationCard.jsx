import PropTypes from "prop-types";

const QualificationCard = ({ year, title, institution, icon: Icon }) => {
  return (
    <div className="flex gap-5 items-start group">
      {/* Year badge with icon */}
      <div className="flex-shrink-0 w-20 md:w-24 h-20 md:h-24 bg-clarus-dark-olive rounded-2xl flex flex-col items-center justify-center text-white relative z-10 group-hover:bg-clarus-accent-green transition-colors duration-300">
        {Icon && <Icon className="w-5 h-5 mb-1 opacity-80" />}
        <span className="font-bold text-sm md:text-base tracking-tight">
          {year}
        </span>
      </div>

      {/* Content card */}
      <div className="flex-1 bg-white rounded-2xl p-5 md:p-6 border border-clarus-lightest hover:border-clarus-accent-green hover:shadow-md transition-all duration-300">
        <h3 className="font-semibold text-base md:text-lg text-clarus-dark mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-clarus-dark-grey text-sm">{institution}</p>
      </div>
    </div>
  );
};

QualificationCard.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default QualificationCard;
