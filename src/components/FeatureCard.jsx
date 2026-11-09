function FeatureCard({ icon, title, description, badge, gradientClass = "accent-indigo" }) {
  return (
    <div className={`feature-card-enhanced ${gradientClass}`}>
      <div className="feature-icon-wrapper">
        <span className="feature-icon">{icon}</span>
      </div>
      {badge && <span className="feature-badge">{badge}</span>}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <div className="feature-bottom-glow"></div>
    </div>
  );
}

export default FeatureCard;
