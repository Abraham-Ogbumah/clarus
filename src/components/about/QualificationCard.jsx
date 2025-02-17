import PropTypes from "prop-types";

const QualificationCard = ({ year, title, institution }) => {
  return (
    <div className="flex mb-8 last:mb-0">
      <div className="flex-shrink-0 w-24 pt-1">
        <span className="font-semibold text-teal-600">{year}</span>
      </div>
      <div className="flex-grow pl-8 border-l-2 border-teal-200">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{institution}</p>
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
