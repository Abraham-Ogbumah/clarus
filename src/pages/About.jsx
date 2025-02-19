import QualificationCard from "../components/about/QualificationCard";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";

const AboutPage = () => {
  const qualifications = [
    {
      year: "2010",
      title: "Ph.D. in Clinical Psychology",
      institution: "Stanford University",
    },
    {
      year: "2005",
      title: "M.A. in Psychology",
      institution: "UCLA",
    },
    {
      year: "2003",
      title: "B.A. in Psychology",
      institution: "UC Berkeley",
    },
  ];

  return (
    <main>
      <Section className="bg-gradient-to-r from-teal-50 to-teal-100">
        <PageHeader
          title="About Dr. Sarah Mitchell"
          subtitle="Dedicated to helping you achieve emotional wellness"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/api/placeholder/400/400"
            alt="Dr. Sarah Mitchell"
            className="rounded-lg shadow-lg"
          />
          <div>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience, I specialize in helping
              individuals and couples navigate life challenges through
              evidence-based therapy approaches.
            </p>
            <p className="text-gray-600">
              My practice focuses on creating a warm, accepting environment
              where you can feel safe to explore and grow.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <PageHeader
          title="Education & Training"
          subtitle="Academic background and professional development"
        />
        <div className="max-w-3xl mx-auto">
          {qualifications.map((qual, index) => (
            <QualificationCard key={index} {...qual} />
          ))}
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
