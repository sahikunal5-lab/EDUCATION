import { useState } from "react";
import { Link } from "react-router-dom";
import { IconSparkles, IconArrowRight, IconCheckCircle } from "./Icons";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="footer-enhanced">
      <div className="footer-container">
        {/* Top Newsletter Strip */}
        <div className="footer-newsletter-box">
          <div className="newsletter-text">
            <h3>Subscribe to our Developer Dispatch</h3>
            <p>Get weekly curated tutorials, code challenges, and tech career insights.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your work email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">
              {subscribed ? (
                <>
                  <IconCheckCircle size={16} /> Subscribed!
                </>
              ) : (
                <>
                  Subscribe <IconArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 4-column Links Grid */}
        <div className="footer-links-grid">
          {/* Col 1: Brand */}
          <div className="footer-col brand-col">
            <Link to="/" className="brand-logo footer-logo">
              <div className="logo-icon-box">
                <IconSparkles size={18} />
              </div>
              <span className="brand-name">
                Edu<span className="brand-gradient">Portal</span>
              </span>
            </Link>
            <p className="brand-mission">
              Empowering the next generation of engineers with real-world project mastery, expert mentorship, and industry-aligned curricula.
            </p>
            <div className="system-status-indicator">
              <span className="status-dot"></span>
              All learning systems operational
            </div>
          </div>

          {/* Col 2: Courses */}
          <div className="footer-col">
            <h4 className="footer-heading">Top Tracks</h4>
            <ul className="footer-list">
              <li><Link to="/courses">Full-Stack React & Next.js</Link></li>
              <li><Link to="/courses">Python & AI Engineering</Link></li>
              <li><Link to="/courses">Distributed Systems & Go</Link></li>
              <li><Link to="/courses">System Design & Cloud</Link></li>
              <li><Link to="/courses">Data Structures & Algorithms</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><Link to="/about">About EduPortal</Link></li>
              <li><a href="#instructors">Meet Our Mentors</a></li>
              <li><a href="#careers">Careers <span className="hiring-pill">We're hiring</span></a></li>
              <li><a href="#press">Press & Media</a></li>
              <li><a href="#terms">Privacy & Terms</a></li>
            </ul>
          </div>

          {/* Col 4: Community */}
          <div className="footer-col">
            <h4 className="footer-heading">Community</h4>
            <ul className="footer-list">
              <li><a href="https://discord.com" target="_blank" rel="noreferrer">Discord Community (15k+)</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub Open Source</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Engineering Blog</a></li>
              <li><a href="#faq">Student Help Desk</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 EduPortal Inc. Built with passion for ambitious developers worldwide.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="sep">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="sep">•</span>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
