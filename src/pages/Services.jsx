import { ServiceCard } from "../components/services/ServiceCard";
import { Section, PageHeader, Card } from "../components/common";

const ServicesPage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one therapy sessions tailored to your unique needs and goals.",
      duration: "50 minutes",
      format: "In-person or Online",
      icon: "👤",
      fullDescription:
        "Individual therapy provides a safe, confidential space to explore personal challenges, develop coping strategies, and work towards positive change.",
    },
    {
      title: "Couples Counseling",
      description:
        "Build stronger relationships through improved communication.",
      duration: "75 minutes",
      format: "In-person or Online",
      icon: "👥",
      fullDescription:
        "Couples counseling helps partners improve communication, resolve conflicts, and strengthen their relationship.",
    },
  ];

  return (
    <main>
      <Section className="bg-gradient-to-r from-teal-50 to-teal-100">
        <PageHeader
          title="Our Services"
          subtitle="Comprehensive mental health support tailored to your needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <PageHeader title="Insurance & Payment" />
        <Card className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            We accept various insurance plans and offer flexible payment
            options. Contact us to verify your coverage or discuss payment
            arrangements.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700">
            Verify Insurance
          </button>
        </Card>
      </Section>
    </main>
  );
};

export default ServicesPage;
