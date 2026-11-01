import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Globe2, MoveUpRight, Radio, Sparkles, Zap } from 'lucide-react'

const links = [
  { name: 'pump.fun', handle: '@Zyvenn', description: 'Where ideas turn into on-chain experiments.', href: 'https://pump.fun/u/Zyvenn', mark: 'P', tone: 'pump', label: 'TOKEN LAUNCHPAD' },
  { name: 'fomo', handle: 'fomo.family', description: 'Tuned in to the culture. Always early.', href: 'https://fomo.family/r/zyvengm', mark: 'f', tone: 'fomo', label: 'COMMUNITY' },
  { name: 'X / Twitter', handle: '@Zyvengm', description: 'Thoughts, updates, and everything in between.', href: 'https://x.com/Zyvengm', mark: '𝕏', tone: 'x', label: 'SOCIAL' },
]

function App() {
  return (
    <main className="page-shell">
      <nav className="nav wrap">
        <a className="wordmark" href="#top" aria-label="ZyvenGM home"><span className="brand-dot" />zyven<span>gm</span><sup>®</sup></a>
        <div className="nav-right"><span className="availability"><i /> AVAILABLE ONLINE</span><a className="nav-link" href="https://x.com/Zyvengm" target="_blank" rel="noreferrer">LET'S CONNECT <ArrowUpRight size={14} /></a></div>
      </nav>

      <section className="hero wrap" id="top">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <div className="eyebrow"><Sparkles size={13} /> PERSONAL DIGITAL SPACE <span>—</span> 2026</div>
          <h1>Just a human<br />on the <em>internet.</em></h1>
          <p className="intro">Exploring the on-chain world, connecting with good people, and following the next big idea. This is where you can find me.</p>
          <a className="scroll-cue" href="#links"><span className="scroll-icon"><ArrowDownRight size={16} /></span> EXPLORE MY CORNER <span className="line" /></a>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .92, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, delay: .15 }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-core"><span>ZYV</span><b>✳</b></div>
          <span className="art-label label-top">INTERNET NATIVE</span><span className="art-label label-bottom">SOLANA ECOSYSTEM ↗</span>
          <span className="spark spark-a">✳</span><span className="spark spark-b">✳</span>
        </motion.div>
        <div className="hero-index">01 <span>/</span> 03</div>
      </section>

      <section className="links-section wrap" id="links">
        <div className="section-heading"><div><span className="eyebrow">THE DIGITAL FOOTPRINT</span><h2>Find me <em>here.</em></h2></div><p>Three tabs open.<br />Infinite possibilities.</p></div>
        <div className="link-grid">
          {links.map((item, index) => (
            <motion.a className="link-card" href={item.href} target="_blank" rel="noreferrer" key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: index * .1 }} whileHover={{ y: -6 }}>
              <div className="card-top"><span className="card-label">{item.label}</span><span className="card-arrow"><ArrowUpRight size={17} /></span></div>
              <div className={`platform-mark ${item.tone}`}>{item.mark}</div>
              <div className="card-info"><h3>{item.name}</h3><span className="handle">{item.handle}</span><p>{item.description}</p></div>
              <div className="card-bottom"><span>OPEN PROFILE</span><MoveUpRight size={15} /></div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="note wrap"><div className="note-icon"><Zap size={19} /></div><div><span className="eyebrow">A LITTLE NOTE</span><p>Stay curious. Stay early. <em>Have fun out there.</em></p></div><span className="note-aside">BUILT ON CURIOSITY ↗</span></section>

      <footer className="footer wrap"><a className="wordmark" href="#top"><span className="brand-dot" />zyven<span>gm</span><sup>®</sup></a><span className="footer-copy">INDEPENDENTLY ONLINE · © 2026 ZYVENGM</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a></footer>
    </main>
  )
}

export default App
