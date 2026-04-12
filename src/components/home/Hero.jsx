import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative bg-clarus-dark-olive overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/home_1.jpg')" }}
        aria-hidden="true"
      />
      <div className="py-40 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4 leading-tight">
              Welcome to Clarus Psychotherapy
            </h1>
            {/* <p className="text-lg md:text-xl text-clarus-lightest max-w-2xl mx-auto mb-10 opacity-90">
              A safe, empathetic space for healing and growth — rooted in
              evidence-based care and cultural sensitivity.
            </p> */}
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
