import ServiceCard from "../components/services/ServiceCard";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const ServicesPage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one therapy sessions tailored to your unique needs and goals.",
      icon: "👤",
      duration: "50 minutes",
      format: "In-person or Online",
      text: "Individual psychotherapy can help release old wounds, address fears, struggles and combat problems before they become bigger issues. We'll work together to develop healthy coping strategies and build resilience.",
    },
    {
      title: "Couples Therapy",
      description:
        "Build stronger relationships through improved communication and understanding.",
      icon: "👥",
      duration: "90 minutes",
      format: "In-person or Online",
      text: "Relationship counseling and therapy for couples are about addressing problems and building a foundation for a stronger, more fulfilling partnership. It's about learning, growing, and finding ways to connect more deeply with each other.",
    },
    {
      title: "Pregnancy and Postpartum Support",
      description:
        "Specialized care for your emotional well-being during pregnancy and beyond.",
      icon: "🤱",
      duration: "60 minutes",
      format: "In-person or Online",
      text: "As your perinatal therapist, I will collaborate with you through pregnancy, birth, and postpartum wellness plans. This includes support for anxiety, depression, birth trauma, and adjustment challenges.",
    },
    {
      title: "Family Therapy",
      description:
        "Helping families improve communication and resolve conflicts together.",
      icon: "👨‍👩‍👧‍👦",
      duration: "75 minutes",
      format: "In-person or Online",
      text: "Family therapy provides a safe space for all family members to express their feelings, improve communication patterns, and work together toward healthier relationships and dynamics.",
    },
    {
      title: "Trauma Therapy",
      description:
        "Specialized support for processing traumatic experiences and building resilience.",
      icon: "🧠",
      duration: "60 minutes",
      format: "In-person or Online",
      text: "Using trauma-informed approaches, we'll work at your pace to process difficult experiences, develop healthy coping mechanisms, and reclaim your sense of safety and empowerment.",
    },
    {
      title: "Immigration and Refugee Support",
      description:
        "Culturally sensitive therapy for immigration-related stress and adjustment.",
      icon: "🌍",
      duration: "50 minutes",
      format: "In-person or Online",
      text: "Navigate the emotional challenges of immigration, cultural adjustment, identity formation, and family dynamics. I understand the unique stressors faced by newcomers and provide culturally responsive care.",
    },
  ];

  const specializations = [
    "Anxiety and Depression",
    "Relationship Issues",
    "Life Transitions",
    "Immigration Stress",
    "Perinatal Mental Health",
    "Trauma and PTSD",
    "Addiction Recovery",
    "Cultural Identity Issues",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-clarus-dark-olive overflow-hidden">
        <div className="py-32 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/services_hero.jpg')" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-5xl font-serif text-white mb-6">
                Counselling Services
              </h1>
              <p className="text-xl text-clarus-lightest mb-8">
                Comprehensive mental health support tailored to your unique
                journey and needs.
              </p>
              <Button variant="primary" size="large">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-clarus-light-grey">
        <PageHeader
          title="Our Services"
          subtitle="Evidence-based approaches for lasting healing and growth"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Specializations */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/village-2090495_1920.jpg"
              alt="Therapy session at Clarus Psychotherapy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-clarus-accent-green uppercase tracking-wide">
              Areas of Specialization
            </p>
            <h2 className="mt-2 text-4xl font-bold text-clarus-olive-green mb-6">
              Conditions We Treat
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {specializations.map((specialization, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-clarus-accent-green rounded-full mr-3"></span>
                  <span className="text-clarus-dark-grey">
                    {specialization}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-clarus-medium-green border-l-2 border-clarus-light-green pl-4">
              Every individuals journey is unique. We tailor our approach to
              meet your specific needs, cultural background, and personal goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-clarus-olive-green text-white">
        <PageHeader
          title="How We Work Together"
          subtitle="Your therapeutic journey, step by step"
          className="text-white"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-clarus-accent-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
            <p className="opacity-90">
              We&apos;ll discuss your concerns, goals, and determine if
              we&apos;re a good fit for working together.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-clarus-accent-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Collaborative Planning
            </h3>
            <p className="opacity-90">
              Together, we&apos;ll create a personalized treatment plan that
              aligns with your unique needs and goals.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-clarus-accent-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
            <p className="opacity-90">
              Regular sessions focused on healing, growth, and building the
              tools you need for lasting change.
            </p>
          </div>
        </div>
      </Section>

      {/* Insurance & Payment */}
      <Section className="bg-white">
        <PageHeader
          title="Investment in Your Well-being"
          subtitle="Flexible payment options and insurance information"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-clarus-light-grey">
            <h3 className="text-xl font-semibold text-clarus-olive-green mb-4">
              Session Rates
            </h3>
            <ul className="space-y-3 text-clarus-dark-grey">
              <li className="flex justify-between">
                <span>Individual Therapy (50 min)</span>
                <span className="font-semibold">$150</span>
              </li>
              <li className="flex justify-between">
                <span>Couples Therapy (90 min)</span>
                <span className="font-semibold">$220</span>
              </li>
              <li className="flex justify-between">
                <span>Family Therapy (75 min)</span>
                <span className="font-semibold">$190</span>
              </li>
              <li className="flex justify-between">
                <span>Initial Consultation (60 min)</span>
                <span className="font-semibold">$160</span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-clarus-olive-green mb-4">
              Insurance &amp; Payment
            </h3>
            <p className="text-clarus-dark-grey mb-4">
              We accept various extended health insurance plans. Many clients
              are able to claim therapy sessions through their workplace
              benefits or private insurance.
            </p>
            <ul className="space-y-2 text-clarus-dark-grey mb-6">
              <li>• Direct billing available for many plans</li>
              <li>• Sliding scale options for financial hardship</li>
              <li>• Payment plans available upon request</li>
              <li>• Receipts provided for all sessions</li>
            </ul>
            <Button variant="primary">Verify Your Coverage</Button>
          </Card>
        </div>
      </Section>
    </main>
  );
};

export default ServicesPage;
