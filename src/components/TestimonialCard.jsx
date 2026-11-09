import { IconStar, IconCheckCircle } from "./Icons";

function TestimonialCard({ name, review, role, company, rating = 5, avatarBg = "#4f46e5" }) {
  return (
    <div className="testimonial-card-enhanced">
      <div className="testimonial-top">
        <div className="star-rating-row">
          {[...Array(rating)].map((_, i) => (
            <IconStar key={i} size={15} fill="#f59e0b" />
          ))}
        </div>
        <span className="verified-student-tag">
          <IconCheckCircle size={13} /> Verified Graduate
        </span>
      </div>

      <p className="testimonial-quote">"{review}"</p>

      <div className="testimonial-author">
        <div className="author-avatar" style={{ background: avatarBg }}>
          {name.charAt(0)}
        </div>
        <div className="author-details">
          <h4 className="author-name">{name}</h4>
          <span className="author-role">{role}</span>
          {company && <span className="author-company">Now at <strong>{company}</strong></span>}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
