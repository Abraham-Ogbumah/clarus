import { useEffect } from "react";
import {
  User,
  Users,
  Heart,
  Home as HomeIcon,
  Shield,
  Globe,
  MessageCircle,
  ClipboardList,
  TrendingUp,
  Banknote,
  CheckCircle,
} from "lucide-react";
import ServiceCard from "../components/services/ServiceCard";
import Section from "../components/common/Section";
import Button from "../components/common/Button";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Counselling Services | Clarus Psychotherapy Ottawa";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.content =
        "Individual, couples, family, trauma, pregnancy, and immigration counselling in Ottawa. Evidence-based therapy tailored to your unique needs.";
  }, []);
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one therapy sessions tailored to your unique needs and goals.",
      icon: User,
      duration: "50 minutes",
      format: "Virtual sessions",
      text: "Individual psychotherapy can help release old wounds, address fears, struggles and combat problems before they become bigger issues. We'll work together to develop healthy coping strategies and build resilience.",
    },
    {
      title: "Couples Therapy",
      description:
        "Build stronger relationships through improved communication and understanding.",
      icon: Users,
      duration: "90 minutes",
      format: "Virtual sessions",
      text: "Relationship counselling and therapy for couples are about addressing problems and building a foundation for a stronger, more fulfilling partnership. It's about learning, growing, and finding ways to connect more deeply with each other.",
    },
    {
      title: "Pregnancy and Postpartum Support",
      description:
        "Specialized care for your emotional well-being during pregnancy and beyond.",
      icon: Heart,
      duration: "60 minutes",
      format: "Virtual sessions",
      text: "As your perinatal therapist, I will collaborate with you through pregnancy, birth, and postpartum wellness plans. This includes support for anxiety, depression, birth trauma, and adjustment challenges.",
    },
    {
      title: "Family Therapy",
      description:
        "Helping families improve communication and resolve conflicts together.",
      icon: HomeIcon,
      duration: "75 minutes",
      format: "Virtual sessions",
      text: "Family therapy provides a safe space for all family members to express their feelings, improve communication patterns, and work together toward healthier relationships and dynamics.",
    },
    {
      title: "Trauma Therapy",
      description:
        "Specialized support for processing traumatic experiences and building resilience.",
      icon: Shield,
      duration: "60 minutes",
      format: "Virtual sessions",
      text: "Using trauma-informed approaches, we'll work at your pace to process difficult experiences, develop healthy coping mechanisms, and reclaim your sense of safety and empowerment.",
    },
    {
      title: "Immigration Support",
      description:
        "Culturally sensitive therapy for immigration-related stress and adjustment.",
      icon: Globe,
      duration: "50 minutes",
      format: "Virtual sessions",
      text: "Navigate the emotional challenges of immigration, cultural adjustment, identity formation, and family dynamics. I understand the unique stressors faced by newcomers and provide culturally responsive care.",
    },
  ];

  const rates = [
    { name: "Individual Therapy", duration: "50 minutes", price: "$160" },
    { name: "Couples Therapy", duration: "90 minutes", price: "$190" },
    { name: "Family Therapy", duration: "75 minutes", price: "$220" },
    {
      name: "Immigration Counselling / Case Management",
      duration: "60 minutes",
      price: "$205",
    },
  ];

  const insurancePoints = [
    "Direct billing available for many extended health plans",
    "Sliding scale options available for financial hardship",
    "Payment plans available upon request",
    "Official receipts provided for all sessions",
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
    "Multicultural counselling",
    "Bicultural issues",
    "Caregiver",
    "Childhood trauma",
    "Stress management",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-clarus-dark-olive overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/home_2.jpg')" }}
          aria-hidden="true"
        />
        <div className="py-32 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                Counselling Services
              </h1>
              <p className="text-xl md:text-2xl text-clarus-lightest max-w-3xl mx-auto mb-8">
                Comprehensive mental health support tailored to your unique
                journey and needs.
              </p>
              <Button
                variant="secondary"
                size="lg"
                href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-clarus-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Our Services
            </h2>
            <p className="mt-3 text-clarus-light-grey max-w-md">
              Evidence-based approaches for lasting healing and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specializations.map((specialization, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-clarus-accent-green rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-clarus-dark-grey">
                    {specialization}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-clarus-dark-grey border-l-4 border-clarus-accent-green pl-4">
              Every individual&apos;s journey is unique. We tailor our approach
              to meet your specific needs, cultural background, and personal
              goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <section className="bg-clarus-dark-olive py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              How We Work Together
            </h2>
            <p className="text-clarus-light-grey max-w-xl mx-auto">
              A clear, caring path from first contact to lasting change.
            </p>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-clarus-sage-green/60 transition-all duration-300 group">
              <span className="absolute top-5 right-6 text-8xl font-bold text-white/5 select-none leading-none">
                01
              </span>
              <div className="w-12 h-12 bg-clarus-accent-green/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-clarus-accent-green/30 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-clarus-accent-green" />
              </div>
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-2">
                Step 01
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">
                Initial Consultation
              </h3>
              <p className="text-clarus-light-grey text-sm leading-relaxed">
                We&apos;ll discuss your concerns, goals, and determine if
                we&apos;re a good fit for working together. This free 15-minute
                call sets the foundation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-clarus-sage-green/60 transition-all duration-300 group">
              <span className="absolute top-5 right-6 text-8xl font-bold text-white/5 select-none leading-none">
                02
              </span>
              <div className="w-12 h-12 bg-clarus-accent-green/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-clarus-accent-green/30 transition-colors duration-300">
                <ClipboardList className="w-6 h-6 text-clarus-accent-green" />
              </div>
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-2">
                Step 02
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">
                Collaborative Planning
              </h3>
              <p className="text-clarus-light-grey text-sm leading-relaxed">
                Together, we&apos;ll create a personalised treatment plan
                aligned with your unique needs, cultural background, and
                personal goals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-clarus-sage-green/60 transition-all duration-300 group">
              <span className="absolute top-5 right-6 text-8xl font-bold text-white/5 select-none leading-none">
                03
              </span>
              <div className="w-12 h-12 bg-clarus-accent-green/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-clarus-accent-green/30 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-clarus-accent-green" />
              </div>
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-2">
                Step 03
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">
                Ongoing Support
              </h3>
              <p className="text-clarus-light-grey text-sm leading-relaxed">
                Regular sessions focused on healing, growth, and building the
                tools you need for lasting, meaningful change in your life.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Button
              variant="primary"
              size="lg"
              href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
            >
              Begin Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Invest in Your Well-being */}
      <section className="bg-clarus-lightest py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
              Pricing &amp; Coverage
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-clarus-dark leading-tight">
              Invest in Your Well-being
            </h2>
            <p className="mt-3 text-clarus-dark-grey max-w-md">
              Flexible payment options and insurance support to make care
              accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Session Rates */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-clarus-lightest flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-clarus-dark-olive rounded-xl flex items-center justify-center flex-shrink-0">
                  <Banknote className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-clarus-dark">
                  Session Rates
                </h3>
              </div>

              {/* Free consultation highlight */}
              <div className="bg-clarus-accent-green/10 border border-clarus-accent-green/30 rounded-xl px-5 py-4 mb-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-clarus-dark text-sm">
                    Initial Consultation
                  </p>
                  <p className="text-xs text-clarus-medium-green mt-0.5">
                    15 minutes &bull; No commitment required
                  </p>
                </div>
                <span className="text-clarus-accent-green font-bold text-xl tracking-tight">
                  FREE
                </span>
              </div>

              {/* Rate rows */}
              <ul className="divide-y divide-clarus-lightest flex-1">
                {rates.map((rate, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-3.5"
                  >
                    <div>
                      <p className="text-sm font-medium text-clarus-dark">
                        {rate.name}
                      </p>
                      <p className="text-xs text-clarus-medium-green mt-0.5">
                        {rate.duration}
                      </p>
                    </div>
                    <span className="font-bold text-clarus-dark">
                      {rate.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance & Payment */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-clarus-lightest flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-clarus-dark-olive rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-clarus-dark">
                  Insurance &amp; Payment
                </h3>
              </div>

              <p className="text-clarus-dark-grey text-sm leading-relaxed mb-6">
                We accept various extended health insurance plans. Many clients
                claim therapy through their workplace benefits or private
                insurance — we&apos;re happy to help you navigate coverage.
              </p>

              <ul className="space-y-4 flex-1">
                {insurancePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-clarus-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-clarus-dark-grey text-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-clarus-lightest">
                <p className="text-sm text-clarus-medium-green mb-4">
                  Not sure if your plan covers therapy? Start with a free
                  consultation.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
