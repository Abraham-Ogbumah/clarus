import PropTypes from "prop-types";

const QualificationCard = ({ year, title, institution }) => {
  return (
    <div className="flex mb-8 last:mb-0">
      <div className="flex-shrink-0 w-24 pt-1">
        <span className="font-bold text-clarus-accent-green text-lg">
          {year}
        </span>
      </div>
      <div className="flex-grow pl-8 border-l-4 border-clarus-accent-green">
        <h3 className="font-semibold text-xl mb-2 text-clarus-olive-green">
          {title}
        </h3>
        <p className="text-clarus-dark-grey font-medium">{institution}</p>
      </div>
    </div>
  );
};

QualificationCard.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
};

export default QualificationCard;
