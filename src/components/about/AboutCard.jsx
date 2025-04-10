import PropTypes from "prop-types";

const AboutCard = ({
  title,
  subtitle,
  description,
  ctaText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-clarus-accent-green uppercase tracking-wide">
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl font-bold text-clarus-olive-green">
            {title}
          </h2>
          <p className="mt-4 text-lg text-clarus-medium-green border-l-2 border-clarus-light-green pl-4">
            {description}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block text-clarus-dark-green underline text-base font-medium hover:text-clarus-accent-green"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

export default AboutCard;
