import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-teal-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-serif mb-6">
            Begin Your Journey to Emotional Wellness
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Creating a safe space for healing, growth, and self-discovery
            through compassionate therapy and evidence-based practices.
          </p>
          <Button variant="primary" size="large">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
