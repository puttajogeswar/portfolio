import { useState, useEffect, useRef } from "react";

const ACCENT = "#00d4ff";
const PURPLE = "#7c3aed";
const GREEN = "#10b981";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

const SKILLS = {
  "Programming Languages": [
    "Python",
    "Java (Basics)",
    "C",
    "Data Structures & Algorithms",
  ],
  "Frontend": ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
  "Backend & Databases": ["FastAPI", "SQL", "MySQL"],
  "Generative AI": [
    "Large Language Models (LLMs)",
    "FastAPI",
    "Playwright MCP",
    "Automation Testing",
    "API Development",
    "RAG",
  ],
  "Tools": ["Git", "GitHub", "VS Code", "PyCharm"],
};

const PROJECTS = [
  {
    title: "Functional Requirements Document (FRD) Generator",
    stack: [
      "Python",
      "FastAPI",
      "Playwright MCP",
      "LLM",
      "OpenAI Compatible",
      "JSON",
      "ReportLab",
    ],
    desc: "Developed an AI-powered Functional Requirements Document (FRD) Generator that automatically creates professional Functional Requirement Documents from website URLs. Built the backend using Python and FastAPI with Playwright MCP Client/Server to automate website navigation, capture webpage content, and analyze application workflows. Integrated Large Language Models (Google Gemini/OpenAI-compatible) to generate structured FRDs and export professionally formatted PDF documents using ReportLab. Implemented modular architecture with separate frontend, backend, AI services, authentication, document generation, URL validation, JSON-based authentication, and comprehensive error handling for scalability and maintainability.",
    github: "https://github.com/puttajogeswar",
    color: "#00d4ff",
    image: "/images/imagesrobo1.webp",
  },
  {
    title: "Sleep Disorder Detection System",
    stack: [
      "React Native",
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "PostgreSQL",
      "Machine Learning",
      "Random Forest",
    ],
    desc: "Developed an end-to-end AI-powered sleep disorder detection system that predicts Insomnia, Delayed Sleep Phase Syndrome (DSPS), and Normal sleep patterns using smartphone behavioral metadata. Built a scalable architecture consisting of a React Native mobile application, Node.js/Express backend, PostgreSQL database, and a Python Flask Machine Learning inference service. Implemented user authentication, activity tracking, prediction APIs, personalized recommendations, and ML-based classification using a Random Forest model for accurate sleep disorder prediction. Designed REST APIs, database integration, and modular backend services to support secure, reliable, and production-ready deployment.",
    github: "https://github.com/puttajogeswar",
    color: "#7c3aed",
    icon: "🌙",
  },
  {
    title: "Student Records Management System",
    stack: ["Python", "MySQL", "SQL"],
    desc: "Developed a role-based Student Records Management System to efficiently manage student, course, and academic information. Implemented backend functionality using Python and MySQL with optimized SQL queries for CRUD operations and secure data storage. Designed a normalized relational database using primary and foreign keys to maintain consistency and improve data integrity. Built a menu-driven interface with input validation, exception handling, and multi-table SQL JOIN operations to manage real-world academic records efficiently.",
    github: "https://github.com/puttajogeswar",
    color: "#10b981",
    icon: "🎓",
  },
];

const EXPERIENCE = [
  {
    role: "Gen AI Intern",
    company: "Hexaware Technologies",
    period: "June 2026 – Present · Offline",
   desc: "Developed and tested Generative AI applications by validating LLM responses, executing functional and API testing, debugging issues, and ensuring application quality. Contributed to an AI-powered Functional Requirements Document (FRD) Generator that automates website analysis and generates structured requirement documents using Python, FastAPI, Playwright MCP, Google Gemini LLM, JSON, and ReportLab.",
    color: "#f59e0b",
  },
  {
    role: "Python web developer",
    company: "Infosys Foundation Finishing School for Employability, Grade A",
    period: "september 2025 – september 2025 · 1 months",
    desc: "Successfully completed the Finishing School for Employability program conducted by ICT Academy.",
    color: "#00d4ff",
  },
  {
    role: "Web development Intern",
    company: "BIST Technologies Pvt. Ltd.",
    period: "May 2025 – Jul 2025 · 2 months",
    desc: "Worked on web application development using HTML, CSS, JavaScript, and responsive design principles. Assisted in developing, testing, and maintaining web applications while collaborating with the development team to deliver user-friendly solutions.",
  
    color: "#10b981",
  },
  
  {
    role: "AI ML Virtual Internship",
    company: "EduSkills (AICTE) · Grade A",
    period: "october 2025 – December 2025 · 10 weeks",
     desc: "Worked on AI and Machine Learning projects involving data preprocessing, model development, and performance evaluation. Assisted in building predictive models, analyzing datasets, and implementing machine learning algorithms using Python to solve real-world problems.",
    color: "#7c3aed",
  },
  {
    role: "Data Engineering Virtual Internship",
    company: "EduSkills (AICTE) · Grade A",
    period: "Jul – Sep 2025 · 10 weeks",
    desc: "Worked on data engineering projects involving data collection, transformation, and database management. Developed ETL workflows, optimized SQL queries, and ensured efficient data processing to support analytics and reporting.",
    color: "#ec4899",
  },
  {
    role: "Web Full stack Development Virtual Internship",
    company: "EduSkills (AICTE) ",
    period: "Apr – Jun 2025 · 10 weeks",
    desc: "Frontend development training. Crafted responsive web applications using modern HTML5, CSS3, and JavaScript, tested across multiple browser environments.",
    color: "#f59e0b",
  },
  {
    role: "Cloud Engineering Virtual Internship",
    company: "EduSkills + AWS Academy · Grade D",
    period: "Apr – Jun 2024 · 10 weeks",
    desc: "Cloud infrastructure training. Configured cloud services (EC2, IAM, S3) and studied cost-optimised deployment architecture.",
    color: "#f97316",
  },
  
];

const CERTS = [
  { 
    name: "Python Web Developer (Grade A+)", 
    issuer: "Infosys Foundation & ICT Academy - Finishing School for Employability", 
    year: "Sep 2025",
    period: "08 Sep 2025 - 25 Sep 2025",
    pdf: "/certificates/python-web-developer-infosys.jpg",
    icon: "🐍"
  },
  { 
    name: "Web Developer Certificate Program", 
    issuer: "BIST Technologies Pvt. Ltd.", 
    year: "July 2025",
    pdf: "/certificates/react-js.pdf",
    icon: "⚛️"
  },
  
  { 
    name: "Data Engineering Virtual Internship", 
    issuer: "AWS Academy & EduSkills", 
    year: "July - September 2024",
    pdf: "/certificates/aws-cloud.pdf",
    icon: "☁️"
  },
  
  { 
    name: "Web Full Stack Developer Virtual Internship", 
    issuer: "EduSkills (AICTE) · Grade A",
    year: "Apr - Jun 2025",
    pdf: "/certificates/java-fullstack.pdf",
    icon: "💻"
  },
  { 
    name: "AI ML Virtual Internship", 
    issuer: "EduSkills (AICTE) · Grade B",
    year: "Oct - Dec 2025",
    pdf: "/certificates/java-fullstack-2.pdf",
    icon: "🤖"
  },
  { 
    name: "Python Programming Course", 
    issuer: "BIST Technologies Pvt. Ltd.",
    year: "Feb - Mar 2025",
    pdf: "/certificates/python-programming.pdf",
    icon: "🐍"
  },
  { 
    name: "Cybersecurity Virtual Internship", 
    issuer: "Palo Alto Networks & EduSkills · Grade A",
    year: "Jan - Mar 2025",
    pdf: "/certificates/cybersecurity.pdf",
    icon: "🛡️"
  },
  { 
    name: "Python Course Completion Certificate", 
    issuer: "Aajhub Academy",
    year: "Feb 2025",
    pdf: "/certificates/internship-completion.pdf",
    icon: "✅"
  },
];

// ── Animated Counter ──────────────────────────────────────────────
function Counter({ end, suffix = "", instant = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        if (instant) {
          setCount(end);
          return;
        }
        let start = 0;
        const step = end / 40;
        const t = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(t); }
          else setCount(Math.floor(start));
        }, 30);
        return () => clearInterval(t);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, instant]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Skill Tag ────────────────────────────────────────────────────
function SkillTag({ label, color }) {
  return (
    <span style={{
      display: "inline-block", padding: "8px 14px", borderRadius: 20,
      fontSize: 13, fontWeight: 600, margin: "4px 6px",
      lineHeight: 1.2, whiteSpace: "nowrap",
      border: `1px solid ${color}44`,
      background: `${color}11`, color: color,
      transition: "all .2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = `${color}25`; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = `${color}11`; e.currentTarget.style.transform = ""; }}
    >{label}</span>
  );
}

// ── Section Heading ───────────────────────────────────────────────
function SectionHeading({ eyebrow, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <div style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", color: ACCENT, fontFamily: "monospace", marginBottom: 12 }}>{eyebrow}</div>
      <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>{title}</h2>
      <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${ACCENT},${PURPLE})`, margin: "18px auto 0", borderRadius: 2 }} />
    </div>
  );
}

// ── Certificate Modal ────────────────────────────────────────────
function CertificateModal({ cert, onClose }) {
  const isPdf = cert.pdf.toLowerCase().endsWith('.pdf');
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 2000,
      display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)",
      animation: "fadeIn 0.3s ease-out"
    }} onClick={onClose}>
      <div style={{
        background: "#050810", borderRadius: 20, padding: "28px", width: "90%", maxWidth: "800px", maxHeight: "90vh",
        overflow: "auto", border: `1px solid ${ACCENT}44`, position: "relative",
        boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${ACCENT}15`,
        animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: "absolute", top: 20, right: 22, background: "none", border: "none",
          color: ACCENT, fontSize: 24, cursor: "pointer", transition: "transform .2s, color .2s"
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.15) rotate(90deg)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.color = ACCENT; }}
        >✕</button>
        <h3 style={{ color: "#fff", marginBottom: 8, fontSize: 20, fontWeight: 700, paddingRight: 40 }}>{cert.name}</h3>
        <p style={{ color: "#6a7fa0", marginBottom: 20, fontSize: 13 }}>{cert.issuer} · {cert.year}</p>
        <div style={{ display: "flex", justifyContent: "center", background: "rgba(0,0,0,0.2)", borderRadius: 12, padding: "8px" }}>
          {isPdf ? (
            <iframe
              src={cert.pdf}
              style={{ width: "100%", height: "500px", borderRadius: 8, border: "none" }}
            />
          ) : (
            <img
              src={cert.pdf}
              alt={cert.name}
              style={{ width: "100%", maxHeight: "500px", objectFit: "contain", borderRadius: 8 }}
            />
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
          <a href={cert.pdf} download
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 8,
              background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, color: "#fff",
              fontWeight: 600, fontSize: 14, textDecoration: "none", cursor: "pointer",
              transition: "transform .2s, box-shadow .2s"
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${ACCENT}44`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            {isPdf ? "Download PDF ↓" : "Download Certificate ↓"}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typed, setTyped] = useState("");
  const [tab, setTab] = useState(Object.keys(SKILLS)[0]);
  const [expandedExp, setExpandedExp] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [toast, setToast] = useState("");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactErrors, setContactErrors] = useState({});
  const [contactStatus, setContactStatus] = useState("");

  const handleContactChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    setContactErrors(prev => ({ ...prev, [field]: "" }));
    setContactStatus("");
  };

  const handleSendMessage = () => {
    const errors = {};
    if (!contactForm.name.trim()) errors.name = "Name is required";
    if (!contactForm.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) errors.email = "Enter a valid email";
    if (!contactForm.message.trim()) errors.message = "Message is required";
    setContactErrors(errors);

    if (Object.keys(errors).length > 0) {
      setContactStatus("");
      return;
    }

    setContactStatus("Successfully message sent");
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleEmailClick = (e) => {
    navigator.clipboard.writeText("jogeswar.530@gmail.com").then(() => {
      setToast("Email copied to clipboard! 📋");
      setTimeout(() => setToast(""), 3000);
    }).catch(() => {
      // Ignore
    });
  };

  const titles = ["Gen AI Developer", "Software Engineer", "Full Stack Developer", "Backend Engineer", "Python Developer"];
  const titleRef = useRef({ idx: 0, char: 0, deleting: false });

  // Typing effect
  useEffect(() => {
    const tick = () => {
      const { idx, char, deleting } = titleRef.current;
      const word = titles[idx];
      if (!deleting && char < word.length) {
        setTyped(word.slice(0, char + 1));
        titleRef.current.char++;
      } else if (!deleting && char === word.length) {
        setTimeout(() => { titleRef.current.deleting = true; }, 1600);
      } else if (deleting && char > 0) {
        setTyped(word.slice(0, char - 1));
        titleRef.current.char--;
      } else if (deleting && char === 0) {
        titleRef.current.deleting = false;
        titleRef.current.idx = (idx + 1) % titles.length;
      }
    };
    const id = setInterval(tick, titleRef.current.deleting ? 50 : 90);
    return () => clearInterval(id);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (!section) return;
    const navHeight = 84; // account for fixed header height
    const top = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionColors = [ACCENT, PURPLE, GREEN, "#f59e0b", "#ec4899", "#f97316"];

  return (
    <div style={{ background: "#050810", color: "#c8d8f0", fontFamily: "'Inter', 'Segoe UI', sans-serif", overflowX: "hidden" }}>

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrollY > 60 ? "rgba(5,8,16,0.95)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(20px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(0,212,255,0.08)" : "none",
        transition: "all .4s",
        padding: "0 clamp(1rem,4vw,3rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <div style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 18, background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Putta Jogeswar
        </div>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4 }} className="desktop-nav">
          {NAV_LINKS.map((l, i) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", color: "#8a9bbf", cursor: "pointer", padding: "6px 14px", borderRadius: 6, fontSize: 14, fontWeight: 500, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = sectionColors[i]; e.currentTarget.style.background = `${sectionColors[i]}11`; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#8a9bbf"; e.currentTarget.style.background = "none"; }}
            >{l}</button>
          ))}
        </div>
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: ACCENT, fontSize: 22, cursor: "pointer" }}
          className="hamburger">☰</button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 999,
          background: "rgba(5,8,16,0.98)", backdropFilter: "blur(20px)",
          padding: "16px 24px 24px", borderBottom: `1px solid ${ACCENT}22`,
        }}>
          {NAV_LINKS.map((l, i) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ display: "block", width: "100%", background: "none", border: "none", color: "#c8d8f0", cursor: "pointer", padding: "12px 0", fontSize: 16, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ color: sectionColors[i], marginRight: 12, fontFamily: "monospace", fontSize: 12 }}>0{i + 1}.</span>{l}
            </button>
          ))}
        </div>
      )}

      {/* ── Hero ── */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px clamp(1rem,5vw,4rem) 60px", position: "relative", overflow: "hidden" }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          mask: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }} />
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "15%", left: "8%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}15 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: `radial-gradient(circle, ${PURPLE}15 0%, transparent 65%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1000, width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          {/* Left: Text Content */}
          <div>
            <div style={{ fontSize: 13, fontFamily: "monospace", color: ACCENT, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
              ⚡ Available for Full-Time Roles
            </div>
            <h1 style={{ fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 16, color: "#fff" }}>
              Putta<br />
              <span style={{ background: `linear-gradient(135deg,${ACCENT},${PURPLE},#ec4899)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Jogeswar</span>
            </h1>
            <div style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 600, color: "#8a9bbf", marginBottom: 28, height: 36, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: ACCENT }}>{">"}</span>
              <span style={{ color: "#c8d8f0" }}>{typed}</span>
              <span style={{ width: 2, height: "1.1em", background: ACCENT, display: "inline-block", animation: "blink 1s step-end infinite" }} />
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6a7fa0", maxWidth: 580, marginBottom: 40 }}>
                 I’m Jogeswar, a B.Tech Computer Science graduate driven by curiosity and a passion for building meaningful software. I enjoy transforming ideas into practical applications, writing clean and maintainable code, and continuously learning to create reliable, user-focused digital experiences.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Projects")}
                style={{ padding: "13px 32px", borderRadius: 8, background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, color: "#fff", border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${ACCENT}44`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >View Projects →</button>
              <a href="mailto:jogeswar.530@gmail.com"
                onClick={handleEmailClick}
                style={{ padding: "13px 32px", borderRadius: 8, background: "transparent", color: ACCENT, border: `1px solid ${ACCENT}44`, fontWeight: 700, fontSize: 15, cursor: "pointer", textDecoration: "none", transition: "all .2s", display: "inline-block" }}
                onMouseEnter={e => { e.currentTarget.style.background = `${ACCENT}11`; e.currentTarget.style.borderColor = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${ACCENT}44`; }}
              >Contact Me</a>
            </div>
            {/* Social Links */}
            <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
              {[
                { label: "LinkedIn", url: "https://www.linkedin.com/in/jogeswar-putta-537385317", icon: "in" },
                { label: "GitHub", url: "https://github.com/puttajogeswar", icon: "gh" },
                { label: "Email", url: "mailto:jogeswar.530@gmail.com", icon: "@" },
              ].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                  style={{ width: 40, height: 40, borderRadius: 8, border: `1px solid rgba(255,255,255,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#6a7fa0", fontSize: 13, fontWeight: 700, fontFamily: "monospace", textDecoration: "none", transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; e.currentTarget.style.background = `${ACCENT}11`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#6a7fa0"; e.currentTarget.style.background = ""; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              position: "relative", width: "100%", maxWidth: 360,
              aspectRatio: "1/1", borderRadius: 16,
              background: `linear-gradient(135deg,${ACCENT}20,${PURPLE}20)`,
              border: `2px solid ${ACCENT}44`,
              padding: 2,
              overflow: "hidden"
            }}>
              <img src="/images/profile1.jpeg" alt="Putta Jogeswar"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius: 14, display: "block" }} />
              {/* Animated gradient border */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: 16,
                background: `linear-gradient(45deg,${ACCENT},${PURPLE},${GREEN},${ACCENT})`,
                backgroundSize: "300% 300%",
                animation: "gradientShift 6s ease infinite",
                zIndex: -1,
                opacity: 0.5
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <div style={{ background: "rgba(0,212,255,0.03)", borderTop: `1px solid rgba(0,212,255,0.08)`, borderBottom: `1px solid rgba(0,212,255,0.08)`, padding: "32px clamp(1rem,5vw,4rem)" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(2rem,6vw,6rem)", flexWrap: "wrap" }}>
          {[
            { val: 6, suffix: "+", label: "Internships Completed" },
            { val: 3, suffix: "", label: "Projects Built" },
            { val: 8, suffix: "+", label: "Certifications Earned" },
            { val: 8.39, suffix: " CGPA", label: "Academic Score", instant: true },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "monospace" }}>
                <Counter end={s.float ? 8 : s.val} suffix={s.float ? ".5 CGPA" : s.suffix} instant={s.instant} />
              </div>
              <div style={{ fontSize: 13, color: "#6a7fa0", marginTop: 4, letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <section id="skills" style={{ padding: "100px clamp(1rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionHeading eyebrow="Technical Arsenal" title="Skills & Technologies" />
          {/* Tab buttons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
            {Object.keys(SKILLS).map((cat, i) => (
              <button key={cat} onClick={() => setTab(cat)}
                style={{
                  padding: "8px 18px", borderRadius: 6, border: `1px solid ${tab === cat ? sectionColors[i % 6] : "rgba(255,255,255,0.08)"}`,
                  background: tab === cat ? `${sectionColors[i % 6]}18` : "transparent",
                  color: tab === cat ? sectionColors[i % 6] : "#6a7fa0",
                  cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s",
                }}>{cat}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, alignItems: "center" }}>
            {(SKILLS[tab] || []).map((s, i) => (
              <SkillTag key={s} label={s} color={sectionColors[Object.keys(SKILLS).indexOf(tab) % 6]} />
            ))}
          </div>
          {/* All skills grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20, marginTop: 40 }}>
            {Object.entries(SKILLS).map(([cat, items], ci) => (
              <div key={cat} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.06)`, borderRadius: 12, padding: "20px 22px", transition: "border-color .2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${sectionColors[ci % 6]}44`}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
              >
                <div style={{ fontSize: 12, fontFamily: "monospace", color: sectionColors[ci % 6], letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {items.map(s => <SkillTag key={s} label={s} color={sectionColors[ci % 6]} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ padding: "100px clamp(1rem,5vw,4rem)", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeading eyebrow="What I've Built" title="Featured Projects" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24, alignItems: "stretch" }}>
            {PROJECTS.map((p, i) => (
              <div key={p.title} style={{
                background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: 16, display: "flex", flexDirection: "column", overflow: "hidden", height: "100%",
                minHeight: 560, transition: "all .3s", position: "relative", padding: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}55`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${p.color},transparent)` }} />
                <div style={{ position: "relative" }}>
                  <div style={{ width: "100%", height: 180, borderRadius: 12, overflow: "hidden", background: "rgba(255,255,255,0.03)", borderBottom: `1px solid rgba(255,255,255,0.06)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: "100%", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.02)" }}>
                        <span style={{ fontSize: 48, color: p.color }}>{p.icon}</span>
                      </div>
                    )}
                  </div>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ color: "#6a7fa0", fontSize: 22, textDecoration: "none", transition: "color .2s", position: "absolute", top: 18, right: 18 }}
                    onMouseEnter={e => e.currentTarget.style.color = p.color}
                    onMouseLeave={e => e.currentTarget.style.color = "#6a7fa0"}
                  >↗</a>
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6a7fa0", margin: "16px 0 0", overflowWrap: "anywhere" }}>{p.desc}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.stack.map(s => (
                      <span key={s} style={{ fontSize: 11, padding: "5px 12px", borderRadius: 12, background: `${p.color}15`, color: p.color, fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="https://github.com/puttajogeswar" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: ACCENT, fontSize: 15, fontWeight: 600, textDecoration: "none", border: `1px solid ${ACCENT}44`, padding: "10px 24px", borderRadius: 8, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = `${ACCENT}11`; }}
              onMouseLeave={e => { e.currentTarget.style.background = ""; }}
            >View All on GitHub →</a>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ padding: "100px clamp(1rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionHeading eyebrow="Where I've Worked" title="Experience & Internships" />
          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg,rgba(0,212,255,0.5),rgba(124,58,237,0.3),transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {EXPERIENCE.map((e, i) => (
                <div key={i} style={{ paddingLeft: 52, position: "relative", cursor: "pointer" }}
                  onClick={() => setExpandedExp(expandedExp === i ? null : i)}>
                  {/* Dot */}
                  <div style={{ position: "absolute", left: 12, top: 18, width: 13, height: 13, borderRadius: "50%", background: e.color, boxShadow: `0 0 10px ${e.color}88` }} />
                  <div style={{
                    background: "rgba(255,255,255,0.02)", border: `1px solid ${expandedExp === i ? e.color + "55" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 12, padding: "18px 22px", transition: "all .25s",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{e.role}</div>
                        <div style={{ fontSize: 13, color: e.color, marginTop: 3, fontWeight: 600 }}>{e.company}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 12, color: "#6a7fa0", fontFamily: "monospace" }}>{e.period}</span>
                        <span style={{ color: "#6a7fa0", fontSize: 14, transition: "transform .2s", transform: expandedExp === i ? "rotate(180deg)" : "" }}>▼</span>
                      </div>
                    </div>
                    {expandedExp === i && (
                      <p style={{ fontSize: 14, color: "#6a7fa0", lineHeight: 1.7, marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 12 }}>{e.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" style={{ padding: "100px clamp(1rem,5vw,4rem)", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading eyebrow="Professional Credentials" title="Certifications & Achievements" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {CERTS.map((c, i) => (
              <div key={c.name} onClick={() => setSelectedCert(c)}
                style={{
                  background: "rgba(255,255,255,0.02)", border: `2px solid rgba(255,255,255,0.06)`,
                  borderRadius: 14, padding: "22px 24px", transition: "all .25s", cursor: "pointer",
                  borderLeft: `3px solid ${sectionColors[i % 6]}`,
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.background = `${sectionColors[i % 6]}08`; 
                  e.currentTarget.style.transform = "translateY(-4px)"; 
                  e.currentTarget.style.borderColor = `${sectionColors[i % 6]}44`;
                  e.currentTarget.style.boxShadow = `0 8px 24px ${sectionColors[i % 6]}15`;
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)"; 
                  e.currentTarget.style.transform = ""; 
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: sectionColors[i % 6], fontWeight: 600, marginBottom: 6 }}>{c.issuer}</div>
                <div style={{ fontSize: 12, color: "#4a5880", fontFamily: "monospace", marginBottom: 12 }}>{c.year}{c.validity && ` · ${c.validity}`}</div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: "100px clamp(1rem,5vw,4rem)", background: "rgba(0,0,0,0.25)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading eyebrow="Let's Connect" title="Get In Touch" />
          <div style={{ display: "grid", gridTemplateColumns: "minmax(280px, 1fr) minmax(360px, 1.2fr)", gap: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28, padding: 32 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Contact Info</div>
              <div style={{ fontSize: 14, color: "#6a7fa0", lineHeight: 1.8, marginBottom: 28 }}>Feel free to reach out for collaborations, freelancing or full-time opportunities.</div>
              <div style={{ display: "grid", gap: 18 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 18, background: "rgba(124,58,237,0.18)", display: "grid", placeItems: "center", color: "#7c3aed", fontSize: 20 }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#6a7fa0", marginBottom: 4 }}>Location</div>
                    <div style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>Machilipatnam, AP, India</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 18, background: "rgba(0,212,255,0.18)", display: "grid", placeItems: "center", color: "#00d4ff", fontSize: 20 }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#6a7fa0", marginBottom: 4 }}>Email</div>
                    <div style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>jogeswar.530@gmail.com</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 18, background: "rgba(16,185,129,0.18)", display: "grid", placeItems: "center", color: "#10b981", fontSize: 20 }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#6a7fa0", marginBottom: 4 }}>Phone</div>
                    <div style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>+91-7893293036</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28, padding: 32 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 20 }}>Send a Message</div>
              <div style={{ display: "grid", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ display: "grid", gap: 8 }}>
                    <input type="text" placeholder="Your Name" value={contactForm.name} onChange={e => handleContactChange("name", e.target.value)}
                      style={{ width: "100%", padding: 18, borderRadius: 16, border: contactErrors.name ? "1px solid #f87171" : "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14 }} />
                    {contactErrors.name && <div style={{ color: "#f87171", fontSize: 12 }}>{contactErrors.name}</div>}
                  </div>
                  <div style={{ display: "grid", gap: 8 }}>
                    <input type="email" placeholder="Your Email" value={contactForm.email} onChange={e => handleContactChange("email", e.target.value)}
                      style={{ width: "100%", padding: 18, borderRadius: 16, border: contactErrors.email ? "1px solid #f87171" : "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14 }} />
                    {contactErrors.email && <div style={{ color: "#f87171", fontSize: 12 }}>{contactErrors.email}</div>}
                  </div>
                </div>
                <div style={{ display: "grid", gap: 8 }}>
                  <textarea placeholder="Your Message" rows={8} value={contactForm.message} onChange={e => handleContactChange("message", e.target.value)}
                    style={{ width: "100%", padding: 18, borderRadius: 16, border: contactErrors.message ? "1px solid #f87171" : "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14, resize: "vertical" }} />
                  {contactErrors.message && <div style={{ color: "#f87171", fontSize: 12 }}>{contactErrors.message}</div>}
                </div>
                <button type="button" disabled={!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()} onClick={handleSendMessage}
                  style={{ width: "100%", padding: "18px 24px", borderRadius: 16, border: "none", background: !contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim() ? "rgba(124,58,237,0.4)" : `linear-gradient(135deg,${ACCENT},${PURPLE})`, color: "#fff", fontSize: 16, fontWeight: 700, cursor: !contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim() ? "not-allowed" : "pointer", transition: "transform .2s" }}
                  onMouseEnter={e => { if (contactForm.name.trim() && contactForm.email.trim() && contactForm.message.trim()) e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
                >Send Message</button>
                {contactStatus && <div style={{ color: GREEN, fontSize: 14, fontWeight: 600 }}>{contactStatus}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ textAlign: "center", padding: "28px", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#4a5880", fontSize: 13 }}>
        <span style={{ fontFamily: "monospace", color: ACCENT }}>{"</>"}</span> Crafted with passion by{" "}
        <span style={{ color: "#8a9bbf", fontWeight: 600 }}>Putta Jogeswar</span> · 2026
      </footer>

      {/* Certificate Modal */}
      {selectedCert && <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 1024px) {
          section#projects > div > div { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          section#projects > div > div > div { min-height: 640 !important; }
        }
        @media (max-width: 768px) {
          section:nth-child(2) > div > div { grid-template-columns: 1fr !important; }
          section:nth-child(2) > div > div > div:last-child { order: -1; }
          section#projects > div > div { grid-template-columns: 1fr !important; gap: 20px !important; }
          section#projects > div > div > div { min-height: auto !important; }
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 90px; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050810; }
        ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.3); border-radius: 4px; }
      `}</style>

      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 30, right: 30, background: "rgba(10,15,30,0.95)",
          border: `1px solid ${ACCENT}`, color: "#fff", padding: "14px 24px", borderRadius: 10,
          boxShadow: `0 8px 30px ${ACCENT}22`, zIndex: 9999, display: "flex", alignItems: "center", gap: 10,
          fontFamily: "monospace", fontSize: 14, animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}