import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative bg-clarus-dark-olive overflow-hidden">
      <div className="py-40 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Container - Centered */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">
              Welcome to Clarus Psychotherapy
            </h1>
            <Button
              variant="primary"
              size="large"
              className="px-8 py-4 text-lg"
              href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
            >
              Book Your Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
