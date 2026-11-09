import { useState } from "react";
import { IconX } from "./Icons";

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconX size={20} />
        </button>

        <div className="modal-header">
          <div className="brand-badge">
            <span className="logo-spark">✦</span> EduPortal
          </div>
          <h2>{isLogin ? "Welcome back!" : "Create your account"}</h2>
          <p>
            {isLogin
              ? "Access your enrolled courses and continue learning."
              : "Start learning from industry leaders today for free."}
          </p>
        </div>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>{isLogin ? "Logged In Successfully!" : "Account Created!"}</h3>
            <p>Redirecting to your personalized learning dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary full-width">
              {isLogin ? "Sign In to EduPortal" : "Join EduPortal Free"}
            </button>

            <div className="auth-toggle">
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setIsLogin(false)}>
                    Sign up now
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button type="button" onClick={() => setIsLogin(true)}>
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
