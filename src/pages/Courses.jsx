import { useState, useMemo } from "react";
import CourseCard from "../components/CourseCard";
import CourseModal from "../components/CourseModal";
import { IconSearch, IconSparkles, IconFilter } from "../components/Icons";

const ALL_COURSES = [
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
    category: "AI & ML",
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
  },
  {
    id: 4,
    title: "Machine Learning & PyTorch",
    instructor: "Sarah Jenkins",
    duration: "12 Weeks",
    level: "Advanced",
    category: "AI & ML",
    colorScheme: "rose",
    rating: "4.94",
    reviews: "860",
    students: "2.9k",
    price: "$79",
    tag: "Deep Dive",
    description: "From linear regression to deep neural nets, computer vision, and transformers. Implement modern architectures from scratch."
  },
  {
    id: 5,
    title: "Modern SQL & Database Architecture",
    instructor: "Mike Torres",
    duration: "4 Weeks",
    level: "Beginner",
    category: "Database",
    colorScheme: "amber",
    rating: "4.88",
    reviews: "1,120",
    students: "5.4k",
    price: "$39",
    tag: "Foundational",
    description: "Master indexing, query optimization, PostgreSQL replication, connection pooling, and ACID guarantees for high-volume apps."
  },
  {
    id: 6,
    title: "Scalable Node.js & Microservices",
    instructor: "Robert Walsh",
    duration: "8 Weeks",
    level: "Intermediate",
    category: "Backend",
    colorScheme: "emerald",
    rating: "4.91",
    reviews: "1,040",
    students: "4.1k",
    price: "$49",
    tag: "Popular",
    description: "Build asynchronous event-driven architectures with RabbitMQ, Redis pub/sub, Docker containers, and comprehensive testing."
  },
  {
    id: 7,
    title: "Data Structures & Algorithmic Problem Solving",
    instructor: "Alex Chen",
    duration: "10 Weeks",
    level: "Intermediate",
    category: "Computer Science",
    colorScheme: "indigo",
    rating: "4.97",
    reviews: "2,450",
    students: "8.7k",
    price: "$59",
    tag: "Interview Prep",
    description: "Conquer graph algorithms, dynamic programming, tree traversals, and big-O optimization to pass FAANG technical interviews."
  },
  {
    id: 8,
    title: "TypeScript & Design Patterns",
    instructor: "Elena Rostova",
    duration: "5 Weeks",
    level: "Intermediate",
    category: "Frontend",
    colorScheme: "cyan",
    rating: "4.93",
    reviews: "750",
    students: "3.5k",
    price: "$45",
    tag: "Recommended",
    description: "Level up your TypeScript mastery with advanced generics, conditional types, mapped types, and robust enterprise patterns."
  },
  {
    id: 9,
    title: "Docker, Kubernetes & Cloud DevOps",
    instructor: "David Miller",
    duration: "7 Weeks",
    level: "Intermediate",
    category: "Cloud",
    colorScheme: "purple",
    rating: "4.90",
    reviews: "680",
    students: "2.8k",
    price: "$55",
    tag: "Hands-on",
    description: "Deploy production clusters, setup GitOps workflows with ArgoCD, monitor with Prometheus and Grafana on AWS."
  }
];

const CATEGORIES = ["All", "Frontend", "Backend", "AI & ML", "Database", "Cloud", "Computer Science"];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="courses-page-enhanced">
      {/* Page Header */}
      <section className="courses-hero">
        <div className="courses-hero-badge">
          <IconSparkles size={16} /> EXPLORE CATALOG
        </div>
        <h1>Level Up With Industry-Grade Courses</h1>
        <p>
          Learn through real-world projects, guided labs, and 1-on-1 expert code reviews.
        </p>

        {/* Search & Filter Bar */}
        <div className="courses-search-container">
          <div className="search-input-wrapper">
            <IconSearch size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search by topic, skill, or instructor (e.g., React, Python, Elena)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm("")}>
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter Tabs & Controls */}
      <section className="catalog-controls-container">
        <div className="category-tabs-scroll">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="filter-level-row">
          <div className="level-select-group">
            <IconFilter size={16} className="filter-icon" />
            <span className="filter-label">Difficulty:</span>
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                className={`level-filter-btn ${selectedLevel === lvl ? "active" : ""}`}
                onClick={() => setSelectedLevel(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="courses-count">
            Showing <strong>{filteredCourses.length}</strong> of {ALL_COURSES.length} courses
          </div>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="courses-catalog-grid-section">
        {filteredCourses.length > 0 ? (
          <div className="course-grid-enhanced">
            {filteredCourses.map((course) => (
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
        ) : (
          <div className="courses-empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No courses match your criteria</h3>
            <p>Try searching for a different keyword or resetting your filters.</p>
            <button
              className="btn-primary"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLevel("All");
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
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

export default Courses;
