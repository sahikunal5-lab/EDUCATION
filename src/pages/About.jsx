import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import {
  IconTarget,
  IconSparkles,
  IconUsers,
  IconCheckCircle,
  IconArrowRight,
  IconShield
} from "../components/Icons";

function About() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Head of Curriculum",
      bio: "Ex-Staff Engineer at Meta & Stripe. Passionate about building high-performance frontend architectures.",
      avatar: "AC",
      bg: "#4f46e5"
    },
    {
      name: "Elena Rostova",
      role: "Lead Systems Architect",
      bio: "Former Distributed Systems Lead at Google Cloud. Specialist in Go, Kubernetes, and high-concurrency systems.",
      avatar: "ER",
      bg: "#0891b2"
    },
    {
      name: "David Miller",
      role: "Head of AI Research & Labs",
      bio: "PhD in Machine Learning. Previously led applied GenAI engineering and LLM evaluation teams at OpenAI ecosystem partners.",
      avatar: "DM",
      bg: "#7c3aed"
    },
    {
      name: "Sarah Jenkins",
      role: "Director of Student Success & Careers",
      bio: "Former Technical Recruiter & Engineering Manager at Amazon. Helped 2,000+ candidates land Tier-1 tech offers.",
      avatar: "SJ",
      bg: "#e11d48"
    }
  ];

  const values = [
    {
      icon: "⚡",
      title: "Real Production Craftsmanship",
      desc: "No shallow 'to-do list' apps. We teach real-world architectural trade-offs, testing, caching, and CI/CD from day one."
    },
    {
      icon: "🤝",
      title: "Human Mentorship Over Algorithms",
      desc: "AI helps you code, but experienced senior engineers review your PRs, challenge your designs, and guide your career."
    },
    {
      icon: "🎯",
      title: "Measurable Career Outcomes",
      desc: "Our north star is simple: helping you secure high-compensation engineering roles and build undeniable software portfolios."
    },
    {
      icon: "🌍",
      title: "Radically Accessible Knowledge",
      desc: "Quality technical education should be available to every driven learner regardless of geography or financial background."
    }
  ];

  return (
    <div className="about-page-enhanced">
      {/* About Hero */}
      <section className="about-hero-enhanced">
        <div className="hero-glow-orb orb-primary"></div>
        <div className="about-hero-badge">
          <IconSparkles size={16} /> OUR MISSION & STORY
        </div>
        <h1>Democratizing World-Class Engineering Education</h1>
        <p>
          We are building the technical academy we wish we had: zero filler, hands-on production code, and dedicated senior mentorship.
        </p>
      </section>

      {/* Origin Story Section */}
      <section className="section-padded">
        <div className="about-story-grid">
          <div className="story-content">
            <span className="section-badge">
              <IconTarget size={16} /> WHY EDUPORTAL
            </span>
            <h2 className="story-title">Bridging The Chasm Between Academics and Modern Tech</h2>
            <p>
              In 2023, senior engineers from top tech companies noticed a massive disconnect: traditional universities were still teaching decades-old patterns, while online bootcamps were charging exorbitant tuitions for shallow copy-paste tutorials.
            </p>
            <p>
              EduPortal was created with a straightforward premise: <strong>teach the exact tools, architectures, and thinking processes used inside high-growth Silicon Valley engineering teams</strong>, made accessible to motivated developers everywhere.
            </p>

            <div className="story-points">
              <div className="story-point">
                <IconCheckCircle size={20} className="text-emerald" />
                <span>Over 15,000+ engineers trained across 65+ countries</span>
              </div>
              <div className="story-point">
                <IconCheckCircle size={20} className="text-emerald" />
                <span>400+ hiring tech companies actively recruit our graduates</span>
              </div>
              <div className="story-point">
                <IconCheckCircle size={20} className="text-emerald" />
                <span>96% job placement rate within 6 months of graduation</span>
              </div>
            </div>
          </div>

          <div className="story-visual-card">
            <div className="impact-card">
              <h3>Our Collective Impact</h3>
              <div className="impact-stat-item">
                <div className="impact-info">
                  <span>Student Code Commits</span>
                  <strong>1,400,000+</strong>
                </div>
                <div className="impact-bar"><div className="impact-fill" style={{ width: "92%" }}></div></div>
              </div>
              <div className="impact-stat-item">
                <div className="impact-info">
                  <span>Capstone Apps Deployed</span>
                  <strong>24,500+</strong>
                </div>
                <div className="impact-bar"><div className="impact-fill" style={{ width: "88%" }}></div></div>
              </div>
              <div className="impact-stat-item">
                <div className="impact-info">
                  <span>1-on-1 Mentor Reviews</span>
                  <strong>18,200+</strong>
                </div>
                <div className="impact-bar"><div className="impact-fill" style={{ width: "95%" }}></div></div>
              </div>
              <div className="impact-stat-item">
                <div className="impact-info">
                  <span>Avg. Compensation Boost</span>
                  <strong>+$32,000 / yr</strong>
                </div>
                <div className="impact-bar"><div className="impact-fill" style={{ width: "84%" }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padded bg-subtle">
        <div className="section-header-centered">
          <div className="section-badge">
            <IconShield size={16} /> GUIDING PRINCIPLES
          </div>
          <h2 className="section-title">The Values That Drive Us</h2>
          <p className="section-subtitle">
            Every course, lab exercise, and code review is built around these non-negotiables.
          </p>
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Mentors */}
      <section className="section-padded" id="instructors">
        <div className="section-header-centered">
          <div className="section-badge">
            <IconUsers size={16} /> LEADERSHIP & MENTORS
          </div>
          <h2 className="section-title">Learn Directly From Industry Veterans</h2>
          <p className="section-subtitle">
            Our instructors have architected systems serving millions of concurrent users.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-avatar" style={{ background: member.bg }}>
                {member.avatar}
              </div>
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="section-padded bg-subtle">
        <div className="stats-grid-enhanced">
          <StatsCard number="15,000+" label="Graduates Worldwide" color="indigo" growth="Global" />
          <StatsCard number="85+" label="Specialized Tracks" color="purple" growth="Updated 2026" />
          <StatsCard number="40+" label="Senior Tech Mentors" color="emerald" growth="1-on-1" />
          <StatsCard number="98%" label="Curriculum Satisfaction" color="amber" growth="Top Tier" />
        </div>
      </section>

      {/* CTA Box */}
      <section className="cta-banner-section">
        <div className="cta-banner-card">
          <h2>Ready to Begin Your Transformation?</h2>
          <p>Explore our courses and start learning industry-standard technologies today.</p>
          <div className="cta-btn-group">
            <Link to="/courses" className="btn-primary btn-lg">
              Explore All Courses <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
