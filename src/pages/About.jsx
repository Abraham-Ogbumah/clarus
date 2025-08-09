import QualificationCard from "../components/about/QualificationCard";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";

const AboutPage = () => {
  const qualifications = [
    {
      year: "2025",
      title: "Business Management",
      institution: "Professional Development",
    },
    {
      year: "2024",
      title: "Gottman Method Couples Therapy: Level 1 & 2",
      institution: "The Gottman Institute",
    },
    {
      year: "2022",
      title: "Master of Arts Counselling Psychology",
      institution: "Yorkville University",
    },
  ];

  const approaches = [
    {
      title: "Cognitive Behavioural Therapy (CBT)",
      description:
        "Evidence-based approach that helps identify and change negative thought patterns and behaviors.",
    },
    {
      title: "Solution-Focused Therapy",
      description:
        "Goal-oriented approach that focuses on solutions and strengths rather than problems.",
    },
    {
      title: "Narrative Therapy",
      description:
        "Helps you re-author your life story by separating you from your problems.",
    },
    {
      title: "Gottman Method",
      description:
        "Research-based approach for couples therapy that builds stronger relationships.",
    },
    {
      title: "Mindful Practices",
      description:
        "Incorporating mindfulness techniques to enhance present-moment awareness and emotional regulation.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-clarus-dark-olive overflow-hidden">
        <div className="py-32 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Image positioned to the right */}
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/about_hero.jpg')" }}
          />

          {/* Content Container - Centered */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                Meet Dorothy
              </h1>
              <p className="text-xl md:text-2xl text-clarus-lightest max-w-4xl mx-auto">
                As a Registered Psychotherapist, I believe healing begins in
                connection—with yourself and with someone who truly sees you.
                Together, we&apos;ll uncover your strength, nurture growth, and
                take steps toward lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/dorothy_profile.jpg"
              alt="Dorothy - Clarus Psychotherapy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-clarus-accent-green uppercase tracking-wide">
              About Dorothy
            </p>
            <h2 className="mt-2 text-4xl font-bold text-clarus-olive-green">
              Dedicated to Your Wellness Journey
            </h2>
            <p className="mt-4 text-lg text-clarus-dark-grey border-l-4 border-clarus-accent-green pl-4 mb-6">
              With over seven years of experience in mental health counselling,
              I&apos;m passionate about supporting individuals, couples, and
              families as they navigate life&apos;s challenges—from anxiety and
              trauma to relationship struggles and major life transitions.
            </p>
            <p className="text-clarus-dark-grey mb-6">
              My approach is grounded in empathy, cultural sensitivity, and
              evidence-based care. I strive to create a warm, non-judgmental
              space where you can speak freely, feel heard, and begin to heal.
            </p>
            <p className="text-clarus-dark-grey mb-6">
              I have a special interest in working with people from diverse
              backgrounds, including those facing immigration-related stress,
              intergenerational trauma, or identity shifts. I believe that
              growth is always possible—and that healing begins when we feel
              safe, seen, and supported.
            </p>
            <p className="text-clarus-dark-grey mb-8">
              As a Registered Psychotherapist (RP) in Ontario, I use a range of
              evidence-based approaches tailored to your unique needs, including
              Cognitive Behavioural Therapy (CBT), Solution-Focused Therapy,
              Narrative Therapy, Mindful practices and the Gottman Method for
              couples. My practice is trauma-informed and culturally responsive,
              ensuring that every client feels respected and valued.
            </p>
          </div>
        </div>
      </Section>

      {/* Personal Story Section */}
      <Section className="bg-clarus-light-grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-clarus-olive-green mb-8">
            My Journey to This Work
          </h2>
          <p className="text-lg text-clarus-dark-grey leading-relaxed">
            My own healing journey began as a teenager, when the care and
            guidance of a beloved teacher helped me rediscover my voice. That
            experience planted the seed for the work I do today—creating safe,
            affirming spaces where others can find their way back to themselves.
          </p>
          <p className="text-xl text-clarus-olive-green mt-6 font-medium">
            Wherever you are in your journey, you don&apos;t have to walk it
            alone.
          </p>
        </div>
      </Section>

      {/* Therapeutic Approaches */}
      <Section className="bg-white">
        <PageHeader
          title="Therapeutic Approaches"
          subtitle="Evidence-based methods tailored to your unique needs"
          className="text-clarus-dark-grey"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-clarus-accent-green"
            >
              <h3 className="text-xl font-semibold text-clarus-olive-green mb-3">
                {approach.title}
              </h3>
              <p className="text-clarus-dark-grey">{approach.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Training */}
      <Section className="bg-clarus-light-grey">
        <PageHeader
          title="Education &amp; Training"
          subtitle="Ongoing commitment to professional excellence"
        />
        <div className="max-w-4xl mx-auto">
          {qualifications.map((qual, index) => (
            <QualificationCard key={index} {...qual} />
          ))}
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-clarus-olive-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">My Philosophy</h2>
          <p className="text-xl mb-6 leading-relaxed">
            &ldquo;Healing begins in connection—with yourself and with someone
            who truly sees you.&rdquo;
          </p>
          <p className="text-lg opacity-90 leading-relaxed">
            I believe that every person deserves to live a life filled with
            meaning, connection, and hope. Through our work together, we&apos;ll
            explore your strengths, process your experiences, and develop the
            tools you need to create lasting positive change in your life.
          </p>
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
