import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Award,
  Sparkles,
  Send,
  Target,
  Languages,
  CheckCircle2,
} from "lucide-react";
import { Section, Reveal } from "./Section";
import {
  SKILLS,
  SKILL_TAGS,
  EDUCATION,
  PROJECTS,
  CERTIFICATE_IMAGES,
  CERTIFICATE_LIST,
  ACHIEVEMENTS,
  STRENGTHS,
  CONTACT,
  SOCIAL,
} from "./data";
import resumeAsset from "@/assets/resume.docx.asset.json";

const TITLE =
  "Aspiring Software Developer | AI & Machine Learning Student | Python Developer | Full Stack Web Developer";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-dvh w-full max-w-6xl scroll-mt-28 flex-col justify-center px-5 pt-32 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles size={14} className="text-primary" /> Available for internships & opportunities
        </span>
        <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-6xl lg:text-7xl">
          <span className="gradient-text">Dilliprasanna Mulavagila</span>
        </h1>
        <p className="mt-5 text-base font-medium text-foreground/85 sm:text-lg">{TITLE}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Building intelligent software solutions with Artificial Intelligence, Machine Learning,
          and modern Web Technologies.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="/Dilliprasanna-Mulavagila-Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="gradient-brand glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <FileText size={16} /> View Resume
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} /> Contact Me
          </a>
          <a
            href={resumeAsset.url}
            download="Dilliprasanna-Mulavagila-Resume.docx"
            className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Download size={15} /> Word version
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3">
          {[
            { icon: Github, href: SOCIAL.github, label: "GitHub profile" },
            { icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn profile" },
            { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Send an email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer noopener"
              className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3">
          {[
            { k: "CGPA", v: "9.5" },
            { k: "Diploma", v: "92%" },
            { k: "Projects", v: "3+" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-2xl px-4 py-4 text-center">
              <dt className="text-xs tracking-wide text-muted-foreground uppercase">{s.k}</dt>
              <dd className="gradient-text mt-1 text-2xl font-bold">{s.v}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="glass rounded-3xl p-7">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            I am Dilliprasanna Mulavagila, a passionate and dedicated B.Tech student specializing in
            Artificial Intelligence and Machine Learning at Vemu Institute of Technology. I
            completed my Diploma in Computer Engineering with 92% and currently maintain a CGPA of
            9.5. I enjoy developing intelligent applications, solving real-world problems, and
            continuously improving my skills in Python, Java, AI, Machine Learning, Web Development,
            and Computer Vision. My goal is to become a Software Engineer specializing in AI-driven
            applications.
          </p>

          <div className="mt-7 rounded-2xl border border-glass-border p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Target size={16} className="text-primary" /> Career Objective
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              To secure a Software Developer or AI/ML Engineer role where I can apply my programming
              knowledge, machine learning skills, and problem-solving abilities to build
              intelligent, scalable, and impactful software solutions.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-glass-border p-5">
            <h3 className="text-sm font-semibold">Professional Weakness</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I occasionally spend extra time refining my work to achieve the highest quality. I
              continuously improve by balancing perfection with efficient delivery.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.1} className="glass rounded-3xl p-7">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Award size={16} className="text-accent" /> Achievements
            </h3>
            <ul className="mt-4 space-y-3">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="glass rounded-3xl p-7">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Languages size={16} className="text-accent" /> Languages
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["English", "Telugu"].map((l) => (
                <span
                  key={l}
                  className="rounded-full bg-primary/15 px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Education</h3>
        <ol className="relative space-y-5 border-l border-glass-border pl-6">
          {EDUCATION.map((e) => (
            <li key={e.degree} className="relative">
              <span className="gradient-brand absolute top-6 -left-[31px] grid h-3 w-3 place-items-center rounded-full" />
              <div className="glass rounded-3xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="flex items-center gap-2 text-base font-semibold">
                    <GraduationCap size={18} className="text-primary" /> {e.degree}
                  </h4>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold">
                    {e.score}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/85">{e.field}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.college}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Technical Skills">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass rounded-3xl p-7">
          <ul className="space-y-6">
            {SKILLS.map((s, i) => (
              <li key={s.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-muted"
                  role="progressbar"
                  aria-label={`${s.name} proficiency`}
                  aria-valuenow={s.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    className="gradient-brand h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-3xl p-7">
          <h3 className="text-sm font-semibold">Tools & Technologies</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SKILL_TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-glass-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-semibold">Core Strengths</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {STRENGTHS.map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent/15 px-4 py-2 text-xs font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="glass flex h-full flex-col rounded-3xl p-6"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {p.subtitle}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="Verified learning" title="Certificates">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATE_IMAGES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <motion.figure
              whileHover={{ y: -6 }}
              className="glass h-full overflow-hidden rounded-3xl p-3"
            >
              <img
                src={c.url}
                alt={`${c.title} certificate issued by ${c.issuer}`}
                loading="lazy"
                className="w-full rounded-2xl border border-glass-border"
              />
              <figcaption className="px-2 py-4">
                <h3 className="text-sm font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="glass mt-8 rounded-3xl p-7">
        <h3 className="text-sm font-semibold">Additional Certifications</h3>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {CERTIFICATE_LIST.map((c) => (
            <span
              key={c}
              className="rounded-full border border-glass-border px-4 py-2 text-sm text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Let's connect" title="Contact Me">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="glass rounded-3xl p-7">
          <ul className="space-y-5">
            {[
              { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: MapPin, label: "Location", value: CONTACT.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm break-all hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-3xl p-7">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-glass-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-glass-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-2xl border border-glass-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="gradient-brand glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Send size={16} /> Send Message
            </button>
            <p aria-live="polite" className="text-xs text-muted-foreground">
              {sent ? "Opening your email app — thanks for reaching out!" : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-glass-border px-5 py-10 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dilliprasanna Mulavagila · Built with React, TypeScript & Tailwind CSS
      </p>
    </footer>
  );
}
