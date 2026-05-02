import { useEffect } from "react";
import {
  Brain,
  Target,
  BookOpen,
  Heart,
  Leaf,
  GraduationCap,
  Award,
  Briefcase,
  Quote,
  CheckCircle,
} from "lucide-react";
import QualificationCard from "../components/about/QualificationCard";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Dorothy | Clarus Psychotherapy Ottawa";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.content =
        "Meet our team at Clarus Psychotherapy. Registered Psychotherapists offering trauma-informed, culturally sensitive virtual care across Ontario.";
  }, []);

  const dorothyQualifications = [
    {
      year: "2025",
      title: "Business Management",
      institution: "Professional Development",
      icon: Briefcase,
    },
    {
      year: "2024",
      title: "Gottman Method Couples Therapy: Level 1 & 2",
      institution: "The Gottman Institute",
      icon: Award,
    },
    {
      year: "2022",
      title: "Master of Arts Counselling Psychology",
      institution: "Yorkville University",
      icon: GraduationCap,
    },
  ];

  const dorothyCredentials = [
    "Registered Psychotherapist (RP)",
    "MA Counselling Psychology",
    "Gottman Method Certified",
    "Trauma-Informed Care",
  ];

  const approaches = [
    {
      title: "Cognitive Behavioural Therapy (CBT)",
      description:
        "Evidence-based approach that helps identify and change negative thought patterns and behaviors.",
      icon: Brain,
    },
    {
      title: "Solution-Focused Therapy",
      description:
        "Goal-oriented approach that focuses on solutions and strengths rather than problems.",
      icon: Target,
    },
    {
      title: "Narrative Therapy",
      description:
        "Helps you re-author your life story by separating you from your problems.",
      icon: BookOpen,
    },
    {
      title: "Gottman Method",
      description:
        "Research-based approach for couples therapy that builds stronger relationships.",
      icon: Heart,
    },
    {
      title: "Mindful Practices",
      description:
        "Incorporating mindfulness techniques to enhance present-moment awareness and emotional regulation.",
      icon: Leaf,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-clarus-dark-olive overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/village-2090495_1920.jpg')" }}
          aria-hidden="true"
        />
        <div className="py-32 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-4">
                Our Team
              </p>
              <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                Meet Your Therapists
              </h1>
              <p className="text-lg md:text-xl text-clarus-lightest max-w-3xl mx-auto leading-relaxed">
                Healing begins in connection — with yourself and with someone
                who truly sees you. Together, we&apos;ll uncover your strength,
                nurture growth, and take steps toward lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === DOROTHY === */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile: image + bio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative">
              <img
                src="/dorothy_ogbumah_new_image.png"
                alt="Dorothy Ogbumah - Registered Psychotherapist"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-clarus-dark-olive text-white px-5 py-4 rounded-2xl shadow-xl border border-white/10 max-w-[200px]">
                <p className="text-clarus-accent-green text-[10px] font-semibold uppercase tracking-widest mb-1">
                  Verified
                </p>
                <p className="font-semibold text-sm leading-snug">
                  Registered Psychotherapist (RP)
                </p>
                <p className="text-clarus-light-grey text-xs mt-1">
                  Ontario, Canada
                </p>
              </div>
            </div>

            <div>
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
                Meet Dorothy Ogbumah
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-clarus-dark mb-6 leading-tight">
                Dedicated to Your Wellness Journey
              </h2>

              <div className="bg-clarus-lightest/40 border-l-4 border-clarus-accent-green p-5 rounded-r-xl mb-6">
                <p className="text-clarus-dark italic leading-relaxed">
                  With over ten years of experience in mental health
                  counselling, I&apos;m passionate about supporting individuals,
                  couples, and families as they navigate life&apos;s
                  challenges—from anxiety and trauma to relationship struggles
                  and major life transitions.
                </p>
              </div>

              <div className="space-y-4 text-clarus-dark-grey leading-relaxed">
                <p>
                  My approach is grounded in empathy, cultural sensitivity, and
                  evidence-based care. I strive to create a warm, non-judgmental
                  space where you can speak freely, feel heard, and begin to
                  heal.
                </p>
                <p>
                  I have a special interest in working with people from diverse
                  backgrounds, including those facing immigration-related
                  stress, intergenerational trauma, or identity shifts. I
                  believe that growth is always possible — and that healing
                  begins when we feel safe, seen, and supported.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-7">
                {dorothyCredentials.map((cred, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-clarus-lightest text-clarus-dark px-3 py-1.5 rounded-full text-xs font-semibold"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-clarus-accent-green" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Personal journey callout */}
          <div className="max-w-3xl mx-auto bg-clarus-lightest/50 rounded-2xl p-8 md:p-10 mb-16 relative">
            <Quote
              className="w-10 h-10 text-clarus-accent-green opacity-60 mb-4"
              aria-hidden="true"
            />
            <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
              Dorothy&apos;s Journey to This Work
            </p>
            <p className="text-lg md:text-xl text-clarus-dark-grey leading-relaxed font-serif italic mb-5">
              My own healing journey began as a teenager, when the care and
              guidance of a beloved teacher helped me rediscover my voice. That
              experience planted the seed for the work I do today — creating
              safe, affirming spaces where others can find their way back to
              themselves.
            </p>
            <p className="text-base text-clarus-olive-green font-serif">
              — Wherever you are in your journey, you don&apos;t have to walk it
              alone.
            </p>
          </div>

          {/* Education & Training */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
                Dorothy&apos;s Credentials
              </p>
              <h3 className="text-3xl md:text-4xl font-serif text-clarus-dark leading-tight">
                Education &amp; Training
              </h3>
            </div>
            <div className="space-y-6">
              {dorothyQualifications.map((qual, index) => (
                <QualificationCard key={index} {...qual} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SECOND THERAPIST (PLACEHOLDER) === */}
      <section className="bg-clarus-lightest py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile: bio + image (reversed layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:order-1">
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
                Meet [Therapist Name]
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-clarus-dark mb-6 leading-tight">
                [Therapist Tagline]
              </h2>

              <div className="bg-white border-l-4 border-clarus-accent-green p-5 rounded-r-xl mb-6 shadow-sm">
                <p className="text-clarus-dark italic leading-relaxed">
                  [Opening highlight paragraph — a strong introductory statement
                  about the therapist&apos;s experience and approach.]
                </p>
              </div>

              <div className="space-y-4 text-clarus-dark-grey leading-relaxed">
                <p>
                  [Second paragraph — describe their therapeutic philosophy, the
                  kind of space they aim to create, and what clients can expect
                  from working together.]
                </p>
                <p>
                  [Third paragraph — areas of specialization, populations they
                  particularly enjoy supporting, and any unique perspectives
                  they bring.]
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-7">
                <span className="inline-flex items-center gap-1.5 bg-white text-clarus-dark px-3 py-1.5 rounded-full text-xs font-semibold border border-clarus-lightest">
                  <CheckCircle className="w-3.5 h-3.5 text-clarus-accent-green" />
                  [Credential 1]
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white text-clarus-dark px-3 py-1.5 rounded-full text-xs font-semibold border border-clarus-lightest">
                  <CheckCircle className="w-3.5 h-3.5 text-clarus-accent-green" />
                  [Credential 2]
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white text-clarus-dark px-3 py-1.5 rounded-full text-xs font-semibold border border-clarus-lightest">
                  <CheckCircle className="w-3.5 h-3.5 text-clarus-accent-green" />
                  [Credential 3]
                </span>
              </div>
            </div>

            <div className="relative lg:order-2">
              <img
                src="/Golden_Morning.png"
                alt="[Therapist Name]"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-clarus-dark-olive text-white px-5 py-4 rounded-2xl shadow-xl border border-white/10 max-w-[200px]">
                <p className="text-clarus-accent-green text-[10px] font-semibold uppercase tracking-widest mb-1">
                  Verified
                </p>
                <p className="font-semibold text-sm leading-snug">
                  [Title / Credential]
                </p>
                <p className="text-clarus-light-grey text-xs mt-1">
                  Ontario, Canada
                </p>
              </div>
            </div>
          </div>

          {/* Personal journey callout */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 mb-16 shadow-sm">
            <Quote
              className="w-10 h-10 text-clarus-accent-green opacity-60 mb-4"
              aria-hidden="true"
            />
            <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
              [Therapist Name]&apos;s Journey to This Work
            </p>
            <p className="text-lg md:text-xl text-clarus-dark-grey leading-relaxed font-serif italic mb-5">
              [Personal story paragraph — what drew this therapist to the field,
              a meaningful moment in their journey, or what their work means to
              them.]
            </p>
            <p className="text-base text-clarus-olive-green font-serif">
              — [Closing one-liner from the therapist.]
            </p>
          </div>

          {/* Education & Training */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
                [Therapist Name]&apos;s Credentials
              </p>
              <h3 className="text-3xl md:text-4xl font-serif text-clarus-dark leading-tight">
                Education &amp; Training
              </h3>
            </div>
            <div className="space-y-6">
              <QualificationCard
                year="[Year]"
                title="[Qualification 1]"
                institution="[Institution]"
                icon={GraduationCap}
              />
              <QualificationCard
                year="[Year]"
                title="[Qualification 2]"
                institution="[Institution]"
                icon={Award}
              />
            </div>
          </div>
        </div>
      </section>

      {/* === SHARED: Therapeutic Approaches === */}
      <section className="bg-clarus-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Therapeutic Approaches
            </h2>
            <p className="mt-3 text-clarus-light-grey max-w-md">
              Evidence-based methods tailored to your unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-clarus-sage-green/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-clarus-accent-green/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-clarus-accent-green/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-clarus-accent-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {approach.title}
                  </h3>
                  <p className="text-clarus-light-grey text-sm leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SHARED: Our Philosophy === */}
      <section className="bg-clarus-dark-olive py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/Golden_Morning.png')" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Quote
              className="w-14 h-14 text-clarus-accent-green mx-auto mb-6"
              aria-hidden="true"
            />
            <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-4">
              Our Philosophy
            </p>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-white italic leading-tight mb-12">
              Healing begins in connection — with yourself and with someone who
              truly sees you.
            </blockquote>
            <div className="w-16 h-1 bg-clarus-accent-green mx-auto rounded-full mb-10" />
            <p className="text-clarus-lightest text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We believe that every person deserves to live a life filled with
              meaning, connection, and hope. Through our work together,
              we&apos;ll explore your strengths, process your experiences, and
              develop the tools you need to create lasting positive change in
              your life.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
