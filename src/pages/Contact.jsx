import QualificationCard from "../components/about/QualificationCard";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";

const AboutPage = () => {
  const qualifications = [
    {
      year: "2018",
      title: "Master of Arts in Counselling Psychology",
      institution: "University of British Columbia",
    },
    {
      year: "2020",
      title: "Certified in Cognitive Behavioral Therapy",
      institution:
        "Canadian Association of Cognitive and Behavioural Therapies",
    },
    {
      year: "2021",
      title: "Gottman Method Couples Therapy Training",
      institution: "The Gottman Institute",
    },
    {
      year: "2022",
      title: "Trauma-Informed Care Certification",
      institution: "Trauma Informed Canada",
    },
  ];

  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
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

          {/* Content Container */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-5xl font-serif text-white mb-6">
                Meet Dorothy
              </h1>
              <p className="text-xl text-clarus-lightest mb-8">
                Your partner in healing, growth, and discovering the strength
                within you.
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
            <p className="mt-4 text-lg text-clarus-medium-green border-l-2 border-clarus-light-green pl-4 mb-6">
              With over seven years of experience in mental health counseling, I
              am passionate about helping individuals, couples, and families
              navigate life&apos;s challenges with compassion and evidence-based
              care.
            </p>
            <p className="text-clarus-dark-grey mb-6">
              My approach is rooted in creating a safe, non-judgmental space
              where you can explore your thoughts and feelings freely. I believe
              that everyone has the capacity for growth and healing, and my role
              is to walk alongside you on this journey.
            </p>
            <p className="text-clarus-dark-grey mb-8">
              I specialize in working with diverse populations, including those
              experiencing immigration stress, trauma, relationship challenges,
              and life transitions. My practice is trauma-informed and
              culturally sensitive, ensuring that every client feels understood
              and valued.
            </p>
          </div>
        </div>
      </Section>

      {/* Therapeutic Approaches */}
      <Section className="bg-clarus-light-grey">
        <PageHeader
          title="Therapeutic Approaches"
          subtitle="Evidence-based methods tailored to your unique needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
      <Section className="bg-white">
        <PageHeader
          title="Education & Training"
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
            &ldquo;Healing is not about returning to who you were before, but
            about discovering who you can become.&rdquo;
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
