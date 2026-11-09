import { useState } from "react";
import { IconX, IconStar, IconClock, IconUser, IconCheckCircle, IconTrophy } from "./Icons";

function CourseModal({ course, isOpen, onClose }) {
  const [enrolled, setEnrolled] = useState(false);

  if (!isOpen || !course) return null;

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => {
      setEnrolled(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card course-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconX size={20} />
        </button>

        <div className="course-modal-badge-row">
          <span className={`level-pill pill-${course.level.toLowerCase()}`}>{course.level}</span>
          <span className="category-pill">{course.category || "Development"}</span>
        </div>

        <h2>{course.title}</h2>
        <p className="course-modal-desc">
          {course.description || "Master core concepts and build portfolio-worthy production projects with personalized instructor guidance."}
        </p>

        <div className="course-modal-meta-grid">
          <div className="meta-box">
            <span className="meta-label">Instructor</span>
            <div className="meta-val">
              <IconUser size={16} /> {course.instructor}
            </div>
          </div>
          <div className="meta-box">
            <span className="meta-label">Duration</span>
            <div className="meta-val">
              <IconClock size={16} /> {course.duration}
            </div>
          </div>
          <div className="meta-box">
            <span className="meta-label">Rating</span>
            <div className="meta-val rating-val">
              <IconStar size={16} fill="#f59e0b" /> {course.rating || "4.9"} ({course.reviews || "1.2k"} reviews)
            </div>
          </div>
          <div className="meta-box">
            <span className="meta-label">Certification</span>
            <div className="meta-val">
              <IconTrophy size={16} /> Included
            </div>
          </div>
        </div>

        <div className="syllabus-preview">
          <h4>What You Will Learn</h4>
          <ul>
            <li>
              <IconCheckCircle size={16} className="check-icon" />
              <span>Real-world architectural patterns & best practices</span>
            </li>
            <li>
              <IconCheckCircle size={16} className="check-icon" />
              <span>Complete hands-on portfolio capstone project</span>
            </li>
            <li>
              <IconCheckCircle size={16} className="check-icon" />
              <span>Interactive coding labs & downloadable cheat sheets</span>
            </li>
            <li>
              <IconCheckCircle size={16} className="check-icon" />
              <span>Lifetime community discord & mentor support</span>
            </li>
          </ul>
        </div>

        <div className="course-modal-footer">
          <div className="course-price">
            <span className="price-tag">{course.price || "Free"}</span>
            {course.price && <span className="original-price">$199</span>}
          </div>

          <button
            className={`btn-primary ${enrolled ? "btn-success" : ""}`}
            onClick={handleEnroll}
            disabled={enrolled}
          >
            {enrolled ? "✓ Enrolled Successfully!" : "Enroll in Course"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseModal;
