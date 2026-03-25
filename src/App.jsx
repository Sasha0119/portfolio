import './App.css'
import { ContactForm } from './components/ContactForm'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { Reveal } from './components/Reveal'
import { SkillsGrid } from './components/SkillsGrid'
import { NAV, PROFILE, PROJECTS, SKILLS } from './content'

const CTAS = [
  { label: 'View projects', href: '#projects', variant: 'ghost' },
  { label: 'Hire me', href: '#contact', variant: 'primary' },
]

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <Navbar
        navItems={NAV}
        brand={{ mark: 'BS', name: PROFILE.name, role: PROFILE.role }}
        ctas={CTAS}
      />

      <main className="main">
        <section id="home" className="section hero" aria-label="Hero">
          <div className="container hero-grid">
            <Reveal className="hero-copy" delay={0}>
              <p className="eyebrow">Frontend Developer</p>
              <h1 className="headline">
                Men tez ishlaydigan va professional ko'rinishga ega bo'lgan toza, moslashuvchan interfeyslarni yarataman.
              </h1>
              <p className="lead">{PROFILE.summary}</p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Hire me
                </a>
                <a className="btn btn-ghost" href="#projects">
                  Loyihalarni ko'rish
                </a>
                <a className="btn btn-ghost" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

              <div className="hero-meta">
                <div className="meta-item">
                  <span className="meta-label">Focus</span>
                  <span className="meta-value">Responsive UI • Debugging • Fundamentals</span>
                </div>
                  <div className="meta-item"><span className="meta-label">Izlayapman</span>
                  <span className="meta-value">Internships • Junior lavozim • Freelance loyihalar</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="hero-card" delay={120}>
              <div className="glass">
                <div className="glass-top">
                  <div className="avatar" aria-hidden="true">
                    <span>{PROFILE.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                  </div>
                  <div>
                    <p className="card-name">{PROFILE.name}</p>
                    <p className="muted">{PROFILE.role}</p>
                  </div>
                </div>

                <div className="glass-body">
                  <div className="stat">
                    <span className="stat-k">Kuchli tomon</span>
                    <span className="stat-v">UI dizayn va uyg‘unlik</span>
                  </div>
                  <div className="stat">
                    <span className="stat-k">Asboblar</span>
                    <span className="stat-v">Vite • GitHub • DevTools</span>
                  </div>
                  <div className="stat">
                    <span className="stat-k">Email</span>
                    <a className="inline-link" href={`mailto:${PROFILE.email}`}>
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section" aria-label="About">
          <div className="container">
            <Reveal delay={0}>
              <h2 className="section-title">Haqida</h2>
              <p className="section-subtitle">
                Real loyihalar bilan tajriba qilgan boshlang'ich dasturchi, toza kod, kuchli UI va doimiy rivojlanishga e'tibor beruvchi.
              </p>
            </Reveal>

            <div className="grid-2">
              <Reveal className="card" delay={80}>
                <h3 className="card-title">Qanday ishlayman</h3>
                <p className="muted">
                  Men aniqlik va qulaylikni ustun qo‘yamman. Avvalo mobilga moslashuvchan layout yarataman, 
                  so‘ng joylashuv, holatlar va accessibility (kirish imkoniyati)ni takomillashtiraman. 
                  Xatolarni brauzer devtools orqali bosqichma-bosqich tekshirib, tuzataman.
                </p>
              </Reveal>
              <Reveal className="card" delay={140}>
                <h3 className="card-title">Maqsadlar</h3>
                <p className="muted">
                  Maqsadim – frontend bo‘yicha stajirovkalar yoki junior lavozimlarda ishlash, 
                  haqiqiy mahsulotlarga hissa qo‘shish, jamoadan o‘rganish va React hamda zamonaviy UI injiniring amaliyotlarini rivojlantirish.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-label="Projects">
          <div className="container">
            <Reveal delay={0}>
              <h2 className="section-title">Loyihalar</h2>
              <p className="section-subtitle">
                Real UI ishini ko‘rsatadigan loyihalar tanlovi: layoutlar, holatlar, responsivlik va amaliy funksiyalar.
              </p>
            </Reveal>

            <div className="projects-grid">
              {PROJECTS.map((p, idx) => (
                <Reveal key={p.title} delay={60 + idx * 60}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="projects-footer">
              <a className="btn btn-ghost" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                GitHub-da batafsil ko'rish
              </a>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section" aria-label="Skills">
          <div className="container">
            <Reveal delay={0}>
              <h2 className="section-title">Skills</h2>
              <p className="section-subtitle">
                Asosiy bilimlar: responsiv UI, xatolarni tuzatish va zamonaviy asbob-uskunalarga e’tibor bilan.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <SkillsGrid skills={SKILLS} />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section" aria-label="Contact">
          <div className="container">
            <Reveal delay={0}>
              <h2 className="section-title">Aloqa</h2>
              <p className="section-subtitle">
                Lavozim yoki kichik loyiha bormi? Xabar yuboring, men tez orada javob beraman.
              </p>
            </Reveal>

            <div className="grid-2 contact-grid">
              <Reveal className="card" delay={80}>
                <h3 className="card-title">Links</h3>
                <div className="contact-links">
                  <a className="chip chip-link" href={`mailto:${PROFILE.email}`}>
                    {PROFILE.email}
                  </a>
                  <a className="chip chip-link" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </Reveal>

              <Reveal className="card" delay={140}>
                <h3 className="card-title">Xabar yuborish</h3>
                <ContactForm email={PROFILE.email} />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="muted">
            © {new Date().getFullYear()} {PROFILE.name}. React va Vite bilan ishlab chiqilgan.
          </p>
          <a className="inline-link" href="#home">
            Yuqoriga qaytish
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
