import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Blocks, Code2,
  Github, Gamepad2, Lightbulb, MapPin, Menu, Music2, Palette,
  X as CloseIcon, ChartNoAxesCombined
} from 'lucide-react'

const socials = [
  { name: 'GitHub', href: 'https://github.com/zyvenzn', icon: Github },
  { name: 'TikTok', href: 'https://www.tiktok.com/@zyvengm', icon: Music2 },
  { name: 'X', href: 'https://x.com/Zyvengm', icon: CloseIcon },
]

const skills = [
  { name: 'Web Development', detail: 'Building for the web', icon: Code2 },
  { name: 'UI / UX Design', detail: 'Designing experiences', icon: Palette },
  { name: 'Game Development', detail: 'Interactive worlds', icon: Gamepad2 },
  { name: 'Blockchain & Web3', detail: 'Exploring on-chain tech', icon: Blocks },
  { name: 'Trading Systems', detail: 'Tools & interfaces', icon: ChartNoAxesCombined },
  { name: 'Problem Solving', detail: 'Ideas into solutions', icon: Lightbulb },
]

const projects = [
  { name: 'MEMEVERSE', type: 'Web3 Universe', description: 'A universe of digital experiences.', mark: 'M', style: 'project-purple', status: 'FEATURED' },
  { name: 'ZYVENGM TERMINAL', type: 'Trading Experience', description: 'A trading-focused interactive concept.', mark: '↗', style: 'project-gold', status: 'IN DEVELOPMENT' },
  { name: 'DARK NEXUS', type: 'Game Project', description: 'A dark world built around exploration.', mark: 'N', style: 'project-slate', status: 'CONCEPT' },
  { name: 'PORTFOLIO V2', type: 'Personal Website', description: 'A new home for my work and ideas.', mark: 'Z', style: 'project-amber', status: 'CURRENT' },
]

const journey = [
  { year: '2025 — PRESENT', role: 'Independent Developer & Creator', note: 'Building ideas and exploring new digital experiences.' },
  { year: '2023 — 2025', role: 'Full-Stack Development', note: 'Learning, experimenting, and shipping projects.' },
  { year: '2021 — 2023', role: 'Tech Enthusiast', note: 'The beginning of a curious journey into technology.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="ZYVENGM home">
          <span className="brand-mark">Z</span><span>ZYVENGM</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <CloseIcon size={21} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let’s Connect <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-backdrop" />
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="hello-tag">Hello, I’m</span>
            <p className="hero-kicker">INDEPENDENT DIGITAL CREATOR</p>
            <h1 id="hero-title">ZYVENGM<span className="gold-period">.</span></h1>
            <h2>Developer <i /> Designer <i /> Creator</h2>
            <p className="hero-description">Turning ideas into extraordinary digital experiences.<br />Build. Create. Innovate.</p>
            <a className="primary-button" href="#projects">Explore My Work <ArrowDown size={16} /></a>
            <div className="social-row" aria-label="Social media">
              {socials.map(({ name, href, icon: Icon }) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon size={17} /></a>)}
            </div>
          </motion.div>
        </div>
        <motion.div className="hero-emblem" initial={{ opacity: 0, scale: .82, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .2 }}>
          <div className="emblem-orbit orbit-a" /><div className="emblem-orbit orbit-b" />
          <div className="emblem-letter">Z</div>
          <span className="emblem-caption">CREATE WITHOUT LIMITS</span>
        </motion.div>
        <div className="hero-bottom-line"><span>SCROLL TO EXPLORE</span><span>01 / 06</span></div>
      </section>

      <section className="intro-grid section-wrap" id="about">
        <div className="portrait-frame"><div className="portrait-art"><span className="portrait-monogram">Z</span><span className="portrait-label">ZYVENGM / DIGITAL CREATOR</span></div></div>
        <div className="about-copy">
          <span className="section-eyebrow">ABOUT ME <b /></span>
          <h2>Who is <em>ZYVENGM?</em></h2>
          <p>I’m a developer and creator passionate about building innovative solutions, crafting immersive experiences, and exploring the limitless possibilities of technology.</p>
          <p className="muted-copy">I enjoy turning ambitious ideas into thoughtful digital products — from interfaces and websites to experimental projects.</p>
          <a className="text-link" href="#contact">Let’s build something <ArrowRight size={16} /></a>
        </div>
        <div className="skills-panel" id="skills">
          <span className="section-eyebrow">MY SKILLS <b /></span>
          <h2>Skills &amp; Expertise</h2>
          <div className="skills-grid">
            {skills.map(({ name, detail, icon: Icon }) => <div className="skill-card" key={name}><Icon size={23} /><strong>{name}</strong><span>{detail}</span></div>)}
          </div>
        </div>
      </section>

      <section className="work-experience section-wrap" id="projects">
        <div className="projects-area">
          <div className="section-heading"><div><span className="section-eyebrow">SELECTED WORK <b /></span><h2>My <em>Projects</em></h2></div><span className="heading-note">A FEW THINGS I’VE BEEN WORKING ON</span></div>
          <div className="projects-grid">
            {projects.map((project, index) => <motion.article className="project-card" key={project.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: index * .08 }}>
              <div className={`project-art ${project.style}`}><span className="project-status">{project.status}</span><span className="project-symbol">{project.mark}</span><span className="project-art-caption">ZYVENGM / PROJECT {String(index + 1).padStart(2, '0')}</span></div>
              <div className="project-info"><div><span>{project.type}</span><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
            </motion.article>)}
          </div>
        </div>
        <aside className="experience-area" id="experience">
          <span className="section-eyebrow">EXPERIENCE <b /></span><h2>My <em>Journey</em></h2>
          <div className="timeline">
            {journey.map((item) => <div className="timeline-item" key={item.year}><span className="timeline-dot" /><span className="timeline-year">{item.year}</span><h3>{item.role}</h3><p>{item.note}</p></div>)}
          </div>
        </aside>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner section-wrap">
          <div><span className="section-eyebrow">CONTACT <b /></span><h2>Let’s Work <em>Together.</em></h2><p>Have a project in mind or just want to say hi?<br />My inbox is one click away.</p><a className="primary-button" href="https://x.com/Zyvengm" target="_blank" rel="noreferrer">Get In Touch <ArrowUpRight size={16} /></a></div>
          <div className="contact-details"><a href="https://github.com/zyvenzn" target="_blank" rel="noreferrer"><Github size={19} /><span><small>GITHUB</small>github.com/zyvenzn</span><ArrowUpRight size={15} /></a><a href="https://www.tiktok.com/@zyvengm" target="_blank" rel="noreferrer"><Music2 size={19} /><span><small>TIKTOK</small>@zyvengm</span><ArrowUpRight size={15} /></a><a href="https://x.com/Zyvengm" target="_blank" rel="noreferrer"><CloseIcon size={19} /><span><small>FOLLOW ON X</small>@Zyvengm</span><ArrowUpRight size={15} /></a><div className="location-line"><MapPin size={18} /><span><small>BASED IN</small>Indonesia</span></div></div>
          <div className="contact-watermark">Z</div>
        </div>
      </section>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">Z</span><span>ZYVENGM</span></a><span>© {new Date().getFullYear()} ZYVENGM. BUILT WITH INTENTION.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  )
}

export default App
