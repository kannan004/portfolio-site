
import "./App.css";

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaLinux,
  FaPython,
  FaJs,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiFlask,
  SiMysql,
} from "react-icons/si";


const GITHUB = "https://github.com/kannan004";
const LINKEDIN = "https://linkedin.com/in/kannan-kannan-a444a22a2";
const EMAIL = "kannan820408@gmail.com";
const PHONE = "+919176918780";
const WHATSAPP = "https://wa.me/919176918780";

const skills = [
  {
    number: "01",
    title: "Cloud Platforms",
    description: "Cloud infrastructure and core AWS services.",
    tools: ["AWS", "EC2", "VPC", "S3", "IAM"],
  },
  {
    number: "02",
    title: "DevOps & Automation",
    description: "Streamlining software delivery and deployments.",
    tools: ["Linux", "Git", "Jenkins", "Docker", "Kubernetes"],
  },
  {
    number: "03",
    title: "Infrastructure as Code",
    description: "Learning repeatable infrastructure provisioning.",
    tools: ["Terraform", "CI/CD", "Networking"],
  },
  {
    number: "04",
    title: "Development",
    description: "Building application and scripting fundamentals.",
    tools: ["Python", "Flask", "SQL", "JavaScript"],
  },
];

const projects = [
  {
    number: "01",
    type: "SECURITY APPLICATION",
    title: "CipherVault",
    description:
      "A privacy-focused file security application built around file encryption and authenticated access.",
    tools: ["Python", "Flask", "Fernet", "JWT", "SQLite"],
    link: GITHUB,
  },
  {
    number: "02",
    type: "CONTINUOUS DELIVERY",
    title: "CI/CD Pipeline",
    description:
      "A hands-on DevOps project exploring automated build and deployment workflows using modern delivery tools.",
    tools: ["Jenkins", "GitHub", "Docker", "Kubernetes"],
    link: GITHUB,
  },
  {
    number: "03",
    type: "CLOUD INFRASTRUCTURE",
    title: "AWS Infrastructure",
    description:
      "A cloud learning project focused on infrastructure as code and foundational AWS networking resources.",
    tools: ["AWS", "Terraform", "EC2", "VPC"],
    link: GITHUB,
  },
];
 

const certificates = [
  {
    id: 1,
    title: "RISE Internship Program",
    subtitle: "DevOps & Cloud Automation",
    issuer: "Tamizhan Skills",
    date: "March 2026",
    status: "Completed",
    accent: "amber",
    file: "/certificates/rise-devops-cloud.jpeg.jpeg",
  },
  {
    id: 2,
    title: "Web Development Internship",
    subtitle: "Internship Completion",
    issuer: "InternPe",
    date: "June – July 2025",
    status: "Completed",
    accent: "cyan",
    file: "/certificates/internpe-web-development.jpeg.jpeg",
  },
  {
    id: 3,
    title: "The Joy of Computing using Python",
    subtitle: "NPTEL · Score: 55%",
    issuer: "NPTEL / IIT Madras",
    date: "January – April 2024",
    status: "Completed",
    accent: "purple",
    file: "/certificates/nptel-python.jpeg.jpeg"
  },
  {
    id: 4,
    title: "MongoDB Basics for Students",
    subtitle: "Proof of Completion",
    issuer: "MongoDB",
    date: "August 22, 2025",
    status: "Completed",
    accent: "green",
    file: "/certificates/mongodb-basics.jpeg.jpeg",
  },
  {
    id: 5,
    title: "Basics of Computer Networking",
    subtitle: "Industrial Visit & Technical Session",
    issuer: "NetworkGeek",
    date: "September 2024",
    status: "Participation",
    accent: "cyan",
    file: "/certificates/networking-basics.jpeg.jpeg",
  },
  {
    id: 6,
    title: "Cloud Computing",
    subtitle: "NPTEL course",
    issuer: "NPTEL",
    date: "Currently learning",
    status: "In Progress",
    accent: "purple",
    file: "/certificates/cloud-computing.jpeg.jpeg",
  },
];
        
function SectionTitle({ label, title, description }) {
  return (
    <div className="section-title">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="nav container">
          <a className="brand" href="#home" aria-label="Kannan home">
            K<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certificates">Certificates</a>
          </div>

          <a className="nav-contact" href="#contact">
            Get in touch <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO ENTRY-LEVEL OPPORTUNITIES
            </div>

            <p className="hero-kicker">HELLO, I'M KANNAN S.</p>

            <h1>
              Building reliable
              <br />
              systems for the
              <br />
              <span>cloud era.</span>
            </h1>

            <p className="hero-description">
              Aspiring Cloud &amp; DevOps Engineer passionate about cloud
              infrastructure, deployment automation, and building secure,
              dependable technology.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <span>↗</span>
              </a>
              <a className="button button-outline" href="#contact">
                Let's connect
              </a>
            </div>

            <div className="hero-socials">
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <span />
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <span />
              <a href={`mailto:${EMAIL}`}>Email ↗</a>
            </div>
          </div>

          <div className="hero-side">
            <div className="portrait-card">
              <div className="portrait-glow" />
              <img
                className="profile-photo"
                src="/images/profile.png"
                alt="Portrait of Kannan S."
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="portrait-initials">K<span>.</span></div>
              <div className="portrait-caption">
                <span className="caption-line" />
                <div>
                  <strong>Kannan S.</strong>
                  <p>Cloud &amp; DevOps Engineering</p>
                </div>
              </div>
              <div className="portrait-index">CHENNAI, INDIA</div>
            </div>

            <div className="floating-note">
              <span className="note-icon">⌘</span>
              <div>
                <strong>Build. Automate. Improve.</strong>
                <p>Learning through hands-on projects</p>
              </div>
            </div>
          </div>

          <div className="hero-bottom-line">
            <span>01 / INTRODUCTION</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container">
            <SectionTitle
              label="01 — ABOUT ME"
              title="Curiosity into capability."
              description="A growing engineering skill set, built through learning, experimentation, and practical projects."
            />

            <div className="about-layout">
              <div className="about-copy">
                <p className="about-lead">
                  I'm a B.Tech student in Artificial Intelligence and Data
                  Science, working toward a career in Cloud and DevOps
                  engineering.
                </p>
                <p>
                  My focus is on understanding how applications are built,
                  deployed, secured, and operated. I'm developing practical
                  foundations in Linux, AWS, networking, containers, and
                  automation.
                </p>
                <p>
                  I believe consistent practice and real projects are the
                  foundation for becoming a dependable engineer.
                </p>
              </div>

              <div className="overview-grid">
                <article className="overview-card">
                  <span className="overview-label">EDUCATION</span>
                  <strong>2023–27</strong>
                  <p>B.Tech · AI &amp; Data Science</p>
                </article>
                <article className="overview-card">
                  <span className="overview-label">ACADEMICS</span>
                  <strong>7.91<span className="small-unit"> CGPA</span></strong>
                  <p>Current academic score</p>
                </article>
                <article className="overview-card overview-card-wide">
                  <span className="overview-label">CAREER FOCUS</span>
                  <strong>Cloud + DevOps</strong>
                  <p>Infrastructure · Automation · Reliability</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise-section section" id="expertise">
          <div className="container">
            <SectionTitle
              label="02 — TECHNICAL EXPERTISE"
              title="The tools behind the work."
              description="Technologies I'm learning and applying through guided practice and personal projects."
            />

            <div className="skills-grid">
              {skills.map((skill) => (
                <article
                  className={`skill-card skill-card-${skill.number}`}
                  key={skill.number}
                >
                  <div className="skill-card-top">
                    <span className="skill-icon" aria-hidden="true">
  {skill.number === "01" ? <FaAws /> :
   skill.number === "02" ? <FaDocker /> :
   skill.number === "03" ? <SiTerraform /> : <FaPython />}
</span>
                    <span className="skill-number">{skill.number}</span>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="skill-tags">
                    {skill.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <div className="container">
            <SectionTitle
              label="03 — SELECTED PROJECTS"
              title="Learning by building."
              description="Practical work connecting application development, cloud infrastructure, and DevOps."
            />

            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    ↗
                  </a>
                </article>
              ))}
            </div>
            <p className="project-note">
              Project links will be updated to their individual repositories
              when published.
            </p>
          </div>
        </section>

        <section className="education-section section" id="education">
          <div className="container">
            <SectionTitle
              label="04 — EDUCATION"
              title="The foundation."
            />

            <article className="education-card">
              <div className="education-date">2023 — 2027</div>
              <div className="education-details">
                <span className="section-label">BACHELOR'S DEGREE</span>
                <h3>
                  B.Tech in Artificial Intelligence
                  <br />
                  &amp; Data Science
                </h3>
                <p>Dhaanish Ahmed College of Engineering</p>
                <span className="education-score">CGPA · 7.91</span>
              </div>
              <span className="education-mark">ED.</span>
            </article>
          </div>
        </section>
        <section className="certificates-section section" id="certificates">
          <div className="container">
            <SectionTitle
              label="05 — CERTIFICATIONS & LEARNING"
              title="Proof of progress."
              description="Courses, technical learning, and internship milestones from my journey into software, cloud, and DevOps engineering."
            />

            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <article
                  className={`certificate-card certificate-${certificate.accent}`}
                  key={certificate.id}
                 onClick={() => {
    if (certificate.file) {
      window.open(certificate.file, "_blank", "noopener,noreferrer");
    }
  }}
  role={certificate.file ? "link" : undefined}
  tabIndex={certificate.file ? 0 : undefined}
>
                  <div className="certificate-card-top">
                    <span className="certificate-icon" aria-hidden="true">
                      ✦
                    </span>
                    <span
                      className={`certificate-status ${
                        certificate.status === "Completed"
                          ? "status-completed"
                          : certificate.status === "In Progress"
                            ? "status-progress"
                            : "status-participation"
                      }`}
                    >
                      {certificate.status}
                    </span>
                  </div>

                  <h3>{certificate.title}</h3>
                  <p className="certificate-subtitle">
                    {certificate.subtitle}
                  </p>
                  <p className="certificate-issuer">{certificate.issuer}</p>
                  <p className="certificate-date">{certificate.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="contact-section section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <span className="section-label">05 — CONTACT</span>
              <h2>
                Good things start
                <br />
                with a <span>conversation.</span>
              </h2>
              <p>
                Interested in entry-level Cloud or DevOps opportunities,
                collaborative projects, or connecting with fellow technology
                enthusiasts? Let's talk.
              </p>

              <div className="contact-actions">
                <a className="button button-light" href={`mailto:${EMAIL}`}>
                  Send me an email ↗
                </a>
                <a
                  className="button button-contact-outline"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="contact-details">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a href={`tel:${PHONE}`}>+91 91769 18780</a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a className="footer-brand" href="#home">
            K<span>.</span>
          </a>
          <p>Designed with purpose. Built for the future.</p>
          <span>© {new Date().getFullYear()} Kannan S.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
