import { useState } from "react";
import { IconStar, IconClock, IconUser, IconHeart, IconArrowRight, IconSparkles } from "./Icons";

function CourseCard({
  title,
  instructor,
  duration,
  level,
  category = "Development",
  rating = "4.9",
  reviews = "1,240",
  students = "3.8k",
  price = "$49",
  tag,
  colorScheme = "indigo",
  onSelect
}) {
  const [liked, setLiked] = useState(false);

  // Gradient themes based on course tech
  const themes = {
    indigo: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
    cyan: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    purple: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    emerald: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    amber: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    rose: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
  };

  const currentGradient = themes[colorScheme] || themes.indigo;

  return (
    <div className="course-card-enhanced" onClick={onSelect}>
      {/* Card Header Media / Thumbnail Banner */}
      <div className="course-thumb" style={{ background: currentGradient }}>
        <div className="course-thumb-top">
          <span className="category-pill-glass">{category}</span>
          <button
            className={`wishlist-btn ${liked ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            aria-label="Save to wishlist"
          >
            <IconHeart size={16} filled={liked} />
          </button>
        </div>

        <div className="course-thumb-title">
          <div className="tech-icon-wrap">
            <IconSparkles size={18} />
          </div>
          <h4>{title}</h4>
        </div>

        {tag && <div className="featured-ribbon">{tag}</div>}
      </div>

      {/* Card Body */}
      <div className="course-card-body">
        <div className="course-meta-top">
          <span className={`level-pill pill-${level.toLowerCase()}`}>{level}</span>
          <div className="course-rating">
            <IconStar size={14} fill="#f59e0b" />
            <span className="rating-score">{rating}</span>
            <span className="rating-count">({reviews})</span>
          </div>
        </div>

        <h3 className="course-title">{title} Masterclass</h3>

        <div className="course-instructor-info">
          <div className="instructor-avatar-small">
            {instructor.charAt(0)}
          </div>
          <div className="instructor-details">
            <span className="instructor-name">{instructor}</span>
            <span className="instructor-role">Industry Specialist</span>
          </div>
        </div>

        <div className="course-stats-bar">
          <div className="stat-item">
            <IconClock size={14} />
            <span>{duration}</span>
          </div>
          <div className="stat-item">
            <IconUser size={14} />
            <span>{students} enrolled</span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="course-card-footer">
          <div className="course-pricing">
            <span className="price-current">{price}</span>
            <span className="price-old">$129</span>
          </div>
          <button
            className="btn-card-action"
            onClick={(e) => {
              e.stopPropagation();
              if (onSelect) onSelect();
            }}
          >
            Explore <IconArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
