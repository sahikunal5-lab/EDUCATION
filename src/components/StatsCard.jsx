function StatsCard({ number, label, growth, icon, color = "indigo" }) {
  return (
    <div className={`stats-card-enhanced color-${color}`}>
      <div className="stats-header">
        {icon && <div className="stats-icon-badge">{icon}</div>}
        {growth && <span className="stats-growth">+{growth}</span>}
      </div>
      <h2 className="stats-number">{number}</h2>
      <p className="stats-label">{label}</p>
    </div>
  );
}

export default StatsCard;
