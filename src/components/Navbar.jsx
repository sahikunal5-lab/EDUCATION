import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconSparkles, IconMenu, IconX } from "./Icons";
import AuthModal from "./AuthModal";
import "./Navbar.css";

function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar-wrapper">
        <nav className="navbar">
          {/* Brand Logo */}
          <NavLink to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-icon-box">
              <IconSparkles size={18} className="logo-sparkle" />
            </div>
            <span className="brand-name">
              Edu<span className="brand-gradient">Portal</span>
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Courses
              <span className="nav-badge">85+</span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              About
            </NavLink>
          </div>

          {/* Nav Actions */}
          <div className="nav-actions">
            <button className="btn-ghost" onClick={() => setIsAuthOpen(true)}>
              Sign In
            </button>
            <button className="btn-primary btn-sm" onClick={() => setIsAuthOpen(true)}>
              Get Started Free
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-links">
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses <span className="nav-badge">85+</span>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </div>
            <div className="mobile-drawer-actions">
              <button
                className="btn-ghost full-width"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
              >
                Sign In
              </button>
              <button
                className="btn-primary full-width"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
              >
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

export default Navbar;
