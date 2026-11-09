import { useState } from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import StatsCard from "../components/StatsCard";
import TestimonialCard from "../components/TestimonialCard";
import CourseCard from "../components/CourseCard";
import CourseModal from "../components/CourseModal";
import {
  IconCode,
  IconTarget,
  IconTrophy,
  IconShield,
  IconFlame,
  IconUsers,
  IconArrowRight,
  IconPlay,
  IconStar,
  IconCheckCircle,
  IconSparkles,
  IconChevronDown
} from "../components/Icons";

function Home() {
  const [activeTrack, setActiveTrack] = useState("frontend");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [demoPlaying, setDemoPlaying] = useState(false);

  // Featured courses for Home
  const featuredCourses = [
    {
      id: 1,
      title: "React & Next.js 15 Fullstack",
      instructor: "Alex Chen",
      duration: "8 Weeks",
      level: "Intermediate",
      category: "Frontend",
      colorScheme: "indigo",
      rating: "4.95",
      reviews: "1,840",
      students: "6.2k",
      price: "$49",
      tag: "Best Seller",
      description: "Master React Server Components, App Router, TypeScript, Tailwind CSS, and build a full-featured multi-tenant SaaS application from scratch."
    },
    {
      id: 2,
      title: "Python & GenAI Applications",
      instructor: "David Miller",
      duration: "6 Weeks",
      level: "Beginner",
      category: "AI & Data",
      colorScheme: "purple",
      rating: "4.92",
      reviews: "1,310",
      students: "4.8k",
      price: "$59",
      tag: "Trending",
      description: "Learn Python fundamentals and build production LLM agents using LangChain, vector databases, and real-time streaming APIs."
    },
    {
      id: 3,
      title: "Distributed Systems & Go",
      instructor: "Elena Rostova",
      duration: "10 Weeks",
      level: "Advanced",
      category: "Backend",
      colorScheme: "cyan",
      rating: "4.98",
      reviews: "920",
      students: "3.1k",
      price: "$69",
      tag: "Staff Pick",
      description: "Architect high-throughput microservices, implement Raft consensus, deploy on Kubernetes, and benchmark concurrent systems."
    }
  ];

  // Learning tracks data
  const tracks = {
    frontend: {
      title: "Modern Frontend Engineering",
      desc: "Turn Figma designs into performant, accessible web apps with React, TypeScript, Next.js, and Tailwind.",
      skills: ["React 19 & Next.js", "TypeScript Pro", "State Management & Zustand", "Web Performance & Core Web Vitals"]
    },
    backend: {
      title: "Cloud & Backend Architecture",
      desc: "Build scalable microservices, database architectures, and bulletproof REST/GraphQL APIs.",
      skills: ["Node.js & Go Microservices", "PostgreSQL & Redis Caching", "Docker & Kubernetes CI/CD", "System Design & Security"]
    },
    ai: {
      title: "Applied AI & Machine Learning",
      desc: "Harness LLMs, build autonomous agents, fine-tune models, and deploy production AI pipelines.",
      skills: ["Python for Data Science", "LangChain & Vector DBs", "PyTorch Deep Learning", "Model Deployment & Evaluation"]
    }
  };

  const faqs = [
    {
      question: "Are the courses self-paced or live cohort based?",
      answer: "All courses offer flexible on-demand video lessons paired with weekly live Q&A sessions and code reviews. You can study at your own pace and still get live feedback from senior engineers."
    },
    {
      question: "Do I receive an accredited certification upon completion?",
      answer: "Yes! Every graduate who completes the capstone project receives a verified digital certificate that can be embedded directly onto LinkedIn, resumes, and personal portfolios."
    },
    {
      question: "What background or prerequisites do I need?",
      answer: "We have tracks designed for every level: beginner fundamentals start from absolute zero, while our intermediate and advanced tracks are crafted for working engineers looking to level up."
    },
    {
      question: "Is there mentorship and resume assistance?",
      answer: "Absolutely. Our Career Support track includes 1-on-1 resume reviews, mock technical interview prep, and direct referrals to our network of 400+ hiring tech companies."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-enhanced">
        <div className="hero-glow-orb orb-primary"></div>
        <div className="hero-glow-orb orb-secondary"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="announcement-pill">
              <span className="pill-badge">NEW</span>
              <span>2026 Full-Stack & AI Tracks are live</span>
              <IconArrowRight size={14} />
            </div>

            <h1 className="hero-title">
              Master In-Demand Tech. <br />
              <span className="text-gradient">Build Production Apps.</span> <br />
              Launch Your Dream Career.
            </h1>

            <p className="hero-subtitle">
              Learn practical engineering from industry experts. Build real-world portfolio projects, master algorithmic problem solving, and get hired faster.
            </p>

            <div className="hero-cta-group">
              <Link to="/courses" className="btn-primary btn-lg">
                Explore Courses <IconArrowRight size={18} />
              </Link>
              <button
                className="btn-secondary btn-lg"
                onClick={() => setDemoPlaying(!demoPlaying)}
              >
                <div className="play-icon-circle">
                  <IconPlay size={14} fill="#ffffff" />
                </div>
                {demoPlaying ? "Pause Tour" : "Watch 2-Min Tour"}
              </button>
            </div>

            {/* Social Proof Avatars */}
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <span className="avatar-chip av-1">RC</span>
                <span className="avatar-chip av-2">PS</span>
                <span className="avatar-chip av-3">AL</span>
                <span className="avatar-chip av-4">MR</span>
              </div>
              <div className="proof-text">
                <div className="star-row">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} size={14} fill="#f59e0b" />
                  ))}
                  <span className="proof-score">4.9/5</span>
                </div>
                <p>Loved by <strong>15,000+ developers</strong> globally</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Interactive Dashboard Preview */}
          <div className="hero-visual">
            <div className="dashboard-preview-card">
              <div className="preview-card-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="preview-tab">App.tsx • Interactive Lab</div>
                <div className="live-status">
                  <span className="live-dot"></span> LIVE
                </div>
              </div>

              <div className="code-snippet-box">
                <pre>
                  <code>
                    <span className="c-keyword">import</span> &#123; <span className="c-fn">createSkill</span> &#125; <span className="c-keyword">from</span> <span className="c-str">"@eduportal/core"</span>;{"\n\n"}
                    <span className="c-comment">// Fast-track your engineering skills</span>{"\n"}
                    <span className="c-keyword">const</span> <span className="c-var">future</span> = <span className="c-keyword">await</span> <span className="c-fn">createSkill</span>(&#123;{"\n"}
                    {"  "}path: <span className="c-str">"Fullstack + GenAI"</span>,{"\n"}
                    {"  "}mentorship: <span className="c-bool">true</span>,{"\n"}
                    {"  "}outcome: <span className="c-str">"Offer Letter"</span>{"\n"}
                    &#125;);
                  </code>
                </pre>
              </div>

              <div className="interactive-card-stats">
                <div className="card-stat-pill">
                  <IconCheckCircle size={15} className="text-emerald" />
                  <span>Interactive Sandboxes</span>
                </div>
                <div className="card-stat-pill">
                  <IconTrophy size={15} className="text-amber" />
                  <span>Verified Certificates</span>
                </div>
              </div>

              {demoPlaying && (
                <div className="demo-player-banner">
                  <div className="demo-player-inner">
                    <IconSparkles size={16} /> Interactive Course Preview Sandbox Active!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Company Logos Strip */}
        <div className="trusted-by-strip">
          <span className="trusted-label">Alumni hired at leading tech innovators:</span>
          <div className="logos-row">
            <span className="company-logo">GOOGLE</span>
            <span className="company-logo">MICROSOFT</span>
            <span className="company-logo">AMAZON</span>
            <span className="company-logo">STRIPE</span>
            <span className="company-logo">NETFLIX</span>
            <span className="company-logo">UBER</span>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="stats-section-enhanced">
        <div className="stats-grid-enhanced">
          <StatsCard
            number="15,000+"
            label="Active Students Enrolled"
            growth="48% YoY"
            color="indigo"
            icon={<IconUsers size={22} />}
          />
          <StatsCard
            number="85+"
            label="Industry-Grade Courses"
            growth="New weekly"
            color="purple"
            icon={<IconCode size={22} />}
          />
          <StatsCard
            number="96%"
            label="Job Placement Rate"
            growth="Within 6 mos"
            color="emerald"
            icon={<IconTrophy size={22} />}
          />
          <StatsCard
            number="4.9 / 5"
            label="Average Student Rating"
            growth="12k+ reviews"
            color="amber"
            icon={<IconStar size={22} fill="#f59e0b" />}
          />
        </div>
      </section>

      {/* Featured Courses Showcase */}
      <section className="section-padded">
        <div className="section-header-centered">
          <div className="section-badge">
            <IconFlame size={16} /> POPULAR COURSES
          </div>
          <h2 className="section-title">Most Enrolled Tracks This Month</h2>
          <p className="section-subtitle">
            Curricula engineered alongside industry tech leads to give you high-leverage capabilities.
          </p>
        </div>

        <div className="featured-courses-grid">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              duration={course.duration}
              level={course.level}
              category={course.category}
              colorScheme={course.colorScheme}
              rating={course.rating}
              reviews={course.reviews}
              students={course.students}
              price={course.price}
              tag={course.tag}
              onSelect={() => setSelectedCourse(course)}
            />
          ))}
        </div>

        <div className="view-all-cta-box">
          <Link to="/courses" className="btn-secondary">
            View All 85+ Courses <IconArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Interactive Curriculum Tracks */}
      <section className="section-padded bg-subtle">
        <div className="section-header-centered">
          <div className="section-badge">
            <IconSparkles size={16} /> TAILORED ROADMAPS
          </div>
          <h2 className="section-title">Choose Your Career Track</h2>
          <p className="section-subtitle">
            Structured step-by-step paths from the fundamentals to architectural mastery.
          </p>
        </div>

        <div className="tracks-container">
          <div className="track-tabs">
            <button
              className={`track-tab-btn ${activeTrack === "frontend" ? "active" : ""}`}
              onClick={() => setActiveTrack("frontend")}
            >
              💻 Frontend Mastery
            </button>
            <button
              className={`track-tab-btn ${activeTrack === "backend" ? "active" : ""}`}
              onClick={() => setActiveTrack("backend")}
            >
              ☁️ Cloud & Backend
            </button>
            <button
              className={`track-tab-btn ${activeTrack === "ai" ? "active" : ""}`}
              onClick={() => setActiveTrack("ai")}
            >
              🤖 AI & Machine Learning
            </button>
          </div>

          <div className="track-display-card">
            <div className="track-info">
              <span className="track-badge">CAREER TRACK</span>
              <h3>{tracks[activeTrack].title}</h3>
              <p>{tracks[activeTrack].desc}</p>

              <div className="skills-checklist">
                {tracks[activeTrack].skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <IconCheckCircle size={18} className="text-emerald" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <Link to="/courses" className="btn-primary track-btn">
                Enroll In This Track <IconArrowRight size={16} />
              </Link>
            </div>

            <div className="track-metrics-side">
              <div className="track-metric-box">
                <span className="track-metric-num">12 Weeks</span>
                <span className="track-metric-lbl">Avg. Time to Complete</span>
              </div>
              <div className="track-metric-box">
                <span className="track-metric-num">5 Projects</span>
                <span className="track-metric-lbl">Portfolio Capstones</span>
              </div>
              <div className="track-metric-box">
                <span className="track-metric-num">$115k</span>
                <span className="track-metric-lbl">Avg. Graduate Starting Comp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions / Why Us */}
      <section className="section-padded">
        <div className="section-header-centered">
          <div className="section-badge">
            <IconTarget size={16} /> THE EDUPORTAL ADVANTAGE
          </div>
          <h2 className="section-title">Why Ambitious Engineers Learn With Us</h2>
          <p className="section-subtitle">
            We abandoned boring slide decks and outdated tutorials to build an interactive, project-first platform.
          </p>
        </div>

        <div className="features-grid-enhanced">
          <FeatureCard
            icon="🚀"
            title="Real-World Projects"
            description="Build genuine production applications with database schemas, authentication, and deployment pipelines."
            badge="Project-Based"
            gradientClass="accent-indigo"
          />

          <FeatureCard
            icon="🧑‍🏫"
            title="1-on-1 Mentorship"
            description="Weekly live code reviews, architecture discussions, and office hours with Senior & Staff engineers."
            badge="Personal Guidance"
            gradientClass="accent-purple"
          />

          <FeatureCard
            icon="💼"
            title="Career & Interview Prep"
            description="System design blueprints, mock technical interview drill sessions, and direct hiring partner referrals."
            badge="Job Ready"
            gradientClass="accent-cyan"
          />

          <FeatureCard
            icon="⚡"
            title="Interactive Sandboxes"
            description="Practice coding in real-time right inside your browser without cumbersome environment setups."
            badge="Instant Feedback"
            gradientClass="accent-amber"
          />

          <FeatureCard
            icon="🎓"
            title="Verified Credentials"
            description="Earn tamper-proof shareable digital certificates directly verifiable by recruiters on LinkedIn."
            badge="Recognized"
            gradientClass="accent-emerald"
          />

          <FeatureCard
            icon="🌐"
            title="Vibrant Community"
            description="Collaborate with over 15,000 developers in our active 24/7 Discord for hackathons and peer reviews."
            badge="Global Network"
            gradientClass="accent-rose"
          />
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section-padded bg-subtle">
        <div className="section-header-centered">
          <div className="section-badge">
            <IconStar size={16} fill="#f59e0b" /> REAL SUCCESS STORIES
          </div>
          <h2 className="section-title">What Our Graduates Say</h2>
          <p className="section-subtitle">
            Thousands of students made the transition into high-paying engineering roles.
          </p>
        </div>

        <div className="testimonials-grid-enhanced">
          <TestimonialCard
            name="Rahul Sharma"
            role="Software Engineer"
            company="Amazon"
            review="EduPortal transformed how I write software. Building the distributed backend capstone gave me the exact confidence needed to clear my Amazon technical rounds."
            avatarBg="#4f46e5"
          />

          <TestimonialCard
            name="Priya Patel"
            role="Frontend Architect"
            company="Stripe"
            review="The React & Next.js track is gold. The deep dive into performance profiling and server components is far superior to standard tutorials. Landed my dream offer in 3 months!"
            avatarBg="#0891b2"
          />

          <TestimonialCard
            name="Aman Gupta"
            role="AI Solutions Engineer"
            company="Microsoft"
            review="The Python & GenAI course went way beyond toy prompts. We actually built multi-agent workflows and vector embeddings. The mentorship was invaluable."
            avatarBg="#7c3aed"
          />
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="section-padded">
        <div className="section-header-centered">
          <div className="section-badge">
            <IconShield size={16} /> GOT QUESTIONS?
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our learning tracks and community.
          </p>
        </div>

        <div className="faq-accordion-wrapper">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <div className={`faq-icon-arrow ${isOpen ? "rotated" : ""}`}>
                    <IconChevronDown size={20} />
                  </div>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="cta-banner-section">
        <div className="cta-banner-card">
          <div className="cta-glow"></div>
          <h2>Ready To Accelerate Your Tech Career?</h2>
          <p>
            Join over 15,000 developers building production skills today. Start with free modules or unlock the full catalog.
          </p>
          <div className="cta-btn-group">
            <Link to="/courses" className="btn-primary btn-lg">
              Explore All Courses <IconArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-ghost-light btn-lg">
              Learn About EduPortal
            </Link>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}

export default Home;
