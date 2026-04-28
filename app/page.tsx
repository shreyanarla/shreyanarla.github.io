import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export default function Home() {
  const contactLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shreyanarla" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/shreyanarla?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
    },
    { label: "X", href: "https://x.com/shreya_narla?s=21" },
  ];

  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <nav>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-gradient" aria-hidden="true" />
        <Reveal className="hero-content">
          <h1 id="hero-title">{site.name}</h1>
          <p className="hero-copy">
            I build products people love to use.
            <br />
            A mom, a tinkerer, and a storyteller—figuring it out as I go.
          </p>
          <p className="hero-location" aria-label="Location">
            <span aria-hidden="true">📍</span> San Francisco Bay Area, California
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="primary-cta" href="#contact">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
            <a className="secondary-cta" href="https://shreyanarla.substack.com/">
              My writing <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-portrait" delay={160}>
          <Image
            src="/84C54FE8-5C4B-4570-9CA2-3430B32AA5CA.png"
            alt="Portrait of Shreya Narla"
            width={1122}
            height={1402}
            priority
          />
        </Reveal>
      </section>

      <section id="about" className="section-shell split-section" aria-labelledby="about-title">
        <Reveal className="section-heading">
          <p className="section-kicker">About</p>
          <h2 id="about-title">Always exploring. Usually building.</h2>
        </Reveal>
        <div className="prose-stack">
          {site.about.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 80}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="section-shell timeline-section"
        aria-labelledby="experience-title"
      >
        <Reveal className="section-heading">
          <p id="experience-title" className="section-kicker">Experience</p>
        </Reveal>
        <div className="timeline">
          {site.experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 80}>
              <article className="timeline-item">
                <div>
                  <p className="item-meta">{item.period}</p>
                  <h3>{item.company}</h3>
                </div>
                <div>
                  <p className="item-role">{item.role}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
        <Reveal className="section-heading contact-headline">
          <h2 id="contact-title">Products, ideas, or just a good conversation—I’m in.</h2>
        </Reveal>
        <Reveal className="contact-inner">
          <address className="contact-links" aria-label="Contact links">
            <a className="contact-email" href={`mailto:${site.email}`}>
              <span>Email</span>
              <span aria-hidden="true">↗</span>
            </a>
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href}>
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </address>
        </Reveal>
      </section>
    </main>
  );
}
