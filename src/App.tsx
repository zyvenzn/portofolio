import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Blocks, Code2, Github, Gamepad2,
  Lightbulb, Menu, Music2, Palette, X, ChartNoAxesCombined,
  Home, UserRound, BriefcaseBusiness, Mail
} from 'lucide-react'

const socials = [
  { name: 'GitHub', href: 'https://github.com/zyvenzn', icon: Github, label: 'github.com/zyvenzn' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@zyvengm', icon: Music2, label: 'tiktok.com/@zyvengm' },
  { name: 'X', href: 'https://x.com/Zyvengm', icon: X, label: 'x.com/Zyvengm' },
]
const skills = [
  { name: 'Web Development', icon: Code2 },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Game Development', icon: Gamepad2 },
  { name: 'Blockchain & Web3', icon: Blocks },
  { name: 'Trading Systems', icon: ChartNoAxesCombined },
  { name: 'Problem Solving', icon: Lightbulb },
]
const projects = [
  { name: 'MEMEVERSE', type: 'Next-Gen Web3 Universe', image: '/project-memeverse.svg', note: 'A digital universe concept' },
  { name: 'ZYVENGM Terminal', type: 'Trade. Analyze. Create.', image: '/project-terminal.svg', note: 'A custom trading game concept' },
  { name: 'Dark Nexus', type: 'Game Project', image: '/project-nexus.svg', note: 'An experimental game concept' },
  { name: 'Portfolio v2.0', type: 'Next-Gen Portfolio', image: '/project-portfolio.svg', note: 'Personal digital space' },
]
const affiliates = [
  { name: 'Pump.fun', href: 'https://pump.fun/u/Zyvenn', logo: 'https://cdn.jsdelivr.net/npm/solana-icons@latest/svg/platforms/pumpfun.svg', caption: 'Trade Memecoins' },
  { name: 'FOMO', href: 'https://fomo.family/r/Zyvengm', logo: '/fomo-app-logo.svg', caption: 'Discover Memecoins' },
  { name: 'Axiom', href: 'https://axiom.trade/@zyven', logo: 'https://cdn.jsdelivr.net/npm/solana-icons@latest/svg/platforms/axiom.svg', caption: 'Trade Smarter' },
  { name: 'GMGN', href: 'https://gmgn.ai/r/W3HH77cw', logo: '/gmgn-app-logo.svg', caption: 'Track & Trade' },
]
const nav = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Projects', href: '#projects', icon: BriefcaseBusiness },
  { label: 'Contact', href: '#contact', icon: Mail },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="portfolio-frame" id="home">
      <header className="topbar">
        <a className="identity" href="#home"><span className="z-logo">Z</span><span>ZYVENGM</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'desktop-nav open' : 'desktop-nav'}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          )}
        </nav>
        <a className="connect-pill" href="#contact">Let’s Connect <ArrowRight size={15} /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" />
        <div className="hero-copy">
          <span className="hello-label">Hello, I’m</span>
          <h1 id="hero-title">ZYVENGM</h1>
          <h2>Developer <i /> Designer <i /> Creator</h2>
          <p>Turning ideas into extraordinary digital experiences.<br />Build. Create. Innovate.</p>
          <a className="outline-button" href="#projects">Explore My Work <ArrowDown size={16} /></a>
          <div className="hero-socials">
            {socials.map(({name,href,icon:Icon}) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon size={19}/></a>)}
          </div>
        </div>
        <div className="hero-z" aria-hidden="true"><span>Z</span><i/><b/></div>
        <div className="hero-edge"><span>SCROLL TO EXPLORE</span><span>01 — THE CREATOR</span></div>
      </section>

      <section className="about-skills" id="about">
        <div className="profile-image"><img src="/profile-portrait.svg" alt="Stylized ZYVENGM profile artwork" /></div>
        <div className="about-copy">
          <span className="eyebrow">ABOUT ME <i /></span>
          <h2>Who is <em>ZYVENGM?</em></h2>
          <p>I’m a passionate developer and creator, focused on building innovative solutions, creating immersive experiences, and exploring the limitless possibilities of technology.</p>
          <a className="small-link" href="#contact">Know More About Me <ArrowRight size={15}/></a>
        </div>
        <div className="skills-block" id="skills">
          <span className="eyebrow">MY SKILLS <i /></span>
          <h2>Skills &amp; Expertise</h2>
          <div className="skills-grid">
            {skills.map(({name,icon:Icon}) => <div className="skill-tile" key={name}><Icon size={25}/><span>{name}</span></div>)}
          </div>
        </div>
      </section>

      <section className="affiliate-section" id="affiliates">
        <div className="affiliate-heading"><span className="eyebrow">APP TRADE LINK <i /></span><p>Join &amp; Explore</p></div>
        <div className="affiliate-grid">
          {affiliates.map(({name,href,logo,caption}) => <a className="affiliate-card" key={name} href={href} target="_blank" rel="noopener noreferrer sponsored" aria-label={`Open ${name} app trade link`}>
            <span className="affiliate-brand"><img src={logo} alt={`${name} logo`} loading="lazy" /><strong>{name}</strong></span>
            <span className="affiliate-caption">{caption}<ArrowRight size={14}/></span>
          </a>)}
        </div>
      </section>

      <section className="projects-experience">
        <div className="projects-block" id="projects">
          <div className="section-top"><div><span className="eyebrow">SELECTED WORK <i /></span><h2>MY PROJECTS</h2><p>Featured Projects</p></div><a href="#contact">View All Projects <ArrowRight size={14}/></a></div>
          <div className="project-grid">
            {projects.map((project,index) => <motion.article className="project-card" key={project.name} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45,delay:index*.07}}>
              <img src={project.image} alt="" />
              <div className="project-meta"><div><h3>{project.name}</h3><p>{project.type}</p></div><a href="#contact" aria-label={`Ask about ${project.name}`}><ArrowUpRight size={16}/></a></div>
            </motion.article>)}
          </div>
        </div>
        <aside className="experience-block" id="experience">
          <span className="eyebrow">EXPERIENCE <i /></span><h2>My Journey</h2>
          <div className="journey-list">
            <div className="journey-item"><span>NOW</span><div><strong>Independent Creator</strong><p>Building personal projects and exploring ideas.</p></div></div>
            <div className="journey-item"><span>01</span><div><strong>Developer &amp; Designer</strong><p>Learning by designing, developing, and experimenting.</p></div></div>
            <div className="journey-item"><span>∞</span><div><strong>Always Exploring</strong><p>Curiosity, creativity, and continuous improvement.</p></div></div>
          </div>
        </aside>
      </section>

      <footer className="contact-footer" id="contact">
        <div className="contact-intro"><span className="eyebrow">CONTACT <i /></span><h2>Let’s Work Together</h2><p>Have a project in mind or just want to say hi?<br/>Feel free to reach out!</p><a className="small-link" href="https://x.com/Zyvengm" target="_blank" rel="noreferrer">Contact Me <ArrowRight size={15}/></a></div>
        <div className="social-directory">
          {socials.map(({name,href,icon:Icon,label})=><a key={name} href={href} target="_blank" rel="noreferrer"><Icon size={19}/><span>{label}</span><ArrowUpRight size={14}/></a>)}
        </div>
        <div className="motto">DREAM BIG <b>•</b> BUILD BOLDER<small>— ZYVENGM —</small></div>
      </footer>
      <div className="copyright"><a className="identity" href="#home"><span className="z-logo">Z</span><span>ZYVENGM</span></a><span>© {new Date().getFullYear()} ZYVENGM. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP ↑</a></div>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {nav.map(({label,href,icon:Icon},i)=><a key={label} className={i===0?'active':''} href={href}><Icon size={19}/><span>{label}</span></a>)}
      </nav>
    </main>
  )
}
export default App
