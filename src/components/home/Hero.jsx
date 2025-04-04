import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative bg-clarus-dark-olive overflow-hidden">
      <div className="py-40 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Image positioned to the right */}
        <div
          className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/DSC01607_(2).png')" }}
        />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-serif text-white mb-6">
              There’s Hope. Let’s Find It Together.
            </h1>
            <p className="text-xl text-clarus-lightest mb-8 max-w-2xl mx-auto md:mx-0">
              A safe space for healing, growth, and the courage to start again.
            </p>
            <Button variant="primary" size="large">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
