"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const GITHUB_URL = "https://github.com/arbies9";
const LINKEDIN_URL = "https://www.linkedin.com/in/arbab-a-6a97a0144";
const EMAIL = "arbab360@gmail.com";

type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
  highlight?: boolean;
  status?: "In Progress" | "Shipped";
};

const IN_PROGRESS: Project[] = [
  {
    name: "llm-ops-dashboard",
    description:
      "A tiny, opinionated dashboard for the four things every LLM app eventually needs to measure: latency (p50/p95), cost, cache hit rate, and error budget — all behind a single proxy you drop in front of your model calls. The kind of artifact you ship to convince leadership a feature is healthy.",
    tags: ["Applied AI", "Observability", "Next.js", "TypeScript", "SQLite"],
    url: "https://github.com/arbies9/llm-ops-dashboard",
    status: "In Progress",
    highlight: true,
  },
  {
    name: "State of LLM Evals (2026)",
    description:
      "A methodology-first deep-dive comparing Promptfoo, Braintrust, LangSmith, Inspect, and Ragas. Same workload through every tool, scored on a fixed rubric (dev ergonomics, CI, cost transparency, multi-model, output analysis, OSS posture). RFC-style writing, real recommendation at the end.",
    tags: ["TPM", "Eval", "Technical Writing", "RFC"],
    url: "https://github.com/arbies9/state-of-llm-evals",
    status: "In Progress",
    highlight: true,
  },
];

const PROJECTS: Project[] = [
  {
    name: "Sale-Leaseback Toolkit",
    description:
      "Compliance-aware deal analyzer and document generator for residential sale-leaseback transactions. Combines structured underwriting logic with LLM-assisted drafting to move deals from intake to closing-ready paperwork.",
    tags: ["TypeScript", "Applied AI", "Document Gen", "Fintech"],
    url: "https://github.com/arbies9/sale-leaseback-toolkit",
    highlight: true,
  },
  {
    name: "Stable Diffusion — Text to Image",
    description:
      "Text-to-image generation pipeline exploring diffusion model inference, prompt engineering, and a clean UX surface around an open-source generative backbone.",
    tags: ["Generative AI", "Diffusion Models", "Python", "Product UX"],
    url: "https://github.com/arbies9/Stable-Diffusion",
    highlight: true,
  },
  {
    name: "More on GitHub",
    description:
      "Coursework, experiments, and earlier web projects — exploring full-stack patterns, responsive UI, and developer tooling.",
    tags: ["Web", "Experiments", "Open Source"],
    url: GITHUB_URL,
  },
];

const FOCUS = [
  {
    title: "Applied AI",
    body:
      "Turning research-grade models into products people can actually use. Eval-driven iteration, latency-aware design, and clean abstractions over messy model behavior.",
    glyph: "◇",
  },
  {
    title: "AI Software Engineering",
    body:
      "Production-minded code around LLMs and ML: structured outputs, retrieval, guardrails, observability, and the unsexy plumbing that makes intelligent systems reliable.",
    glyph: "◆",
  },
  {
    title: "Secure & Cleared Engineering",
    body:
      "Shipping in environments where reliability isn't a metric, it's the mission. TS/SCI with Full Scope Poly, comfortable under federal security constraints, and writing code that has to be audited as carefully as it ships.",
    glyph: "◈",
  },
];

type Experience = {
  company: string;
  role: string;
  location: string;
  range: string;
  yearLabel: string;
  body: string;
  current?: boolean;
};

const EXPERIENCE: Experience[] = [
  {
    company: "Accenture Federal Service",
    role: "Software Engineer",
    location: "Annapolis Junction, MD",
    range: "Feb 2026 — Now",
    yearLabel: "2026 — Now",
    current: true,
    body:
      "Modernizing customized PeopleSoft platforms across production and non-production environments for a federal civilian agency. Shipping client-driven enhancements inside Agile sprint cycles, building AI-assisted Python tooling that meaningfully cuts manual-ops work, and translating stakeholder requirements into shippable deliverables — without losing the audit trail.",
  },
  {
    company: "National Security Agency",
    role: "Software Engineer",
    location: "Fort Meade, MD",
    range: "Sep 2024 — Feb 2026",
    yearLabel: "2024 — 2026",
    body:
      "Delivered features on highly secured web applications using TypeScript, JavaScript, and React across multiple integrated products. Optimized TS and Python tooling on classified systems with agentic AI workflows, and stepped in to lead sprint planning during leadership gaps — shipping reliably in an environment where reliability isn't a feature, it's the mission.",
  },
  {
    company: "CUNY Tech Prep",
    role: "Software Engineering Fellow",
    location: "Remote",
    range: "Aug 2023 — May 2024",
    yearLabel: "2023 — 2024",
    body:
      "Selected for a competitive industry program training top CUNY students in advanced web development. Built full-stack applications in React, Node, Express, and Postgres, and learned the way industry teams actually ship — version control, MVC, TDD, CI/CD — well before the first paid line of code.",
  },
  {
    company: "Tempco Glass Fabrication",
    role: "IT / Software Engineer Intern",
    location: "Flushing, NY",
    range: "Jun 2023 — Aug 2023",
    yearLabel: "2023",
    body:
      "First professional role, on home turf in Flushing: rebuilt the company's website to drive a 35% lift in traffic, shipped a quota-management system in Airtable, PHP, and SQL, and partnered with the IT manager to tighten day-to-day web ops. Small shop, real users, fast feedback loop.",
  },
];

export default function Page() {
  return (
    <main className="relative">
      {/* Decorative orbs */}
      <div className="orb float" style={{ background: "#1d4ed8", top: -120, left: -120 }} />
      <div className="orb float" style={{ background: "#3b82f6", top: 200, right: -160, animationDelay: "1.5s" }} />

      <Nav />

      <Hero />

      <Section num="01" id="about" eyebrow="About" title="Software engineer at the intersection of AI and national security.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass p-6 md:col-span-2">
            <p className="text-base leading-relaxed text-ink-100/90">
              I&apos;m <strong className="text-white">Arbab Ansari</strong> — a software engineer based
              in Washington, DC, with a track record of shipping secure, AI-augmented systems
              across federal mission platforms, classified web applications, and the legacy
              government tooling agencies actually rely on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-100/80">
              My career has taken me from a glass-fabrication IT shop in Flushing, to a
              competitive engineering fellowship at CUNY Tech Prep, to delivering features on
              highly secured web applications at the National Security Agency, and now to
              Accenture Federal Service — where I modernize PeopleSoft platforms relied on
              across a federal civilian agency. I hold an Active TS/SCI clearance with Full
              Scope Polygraph, and I bring a rare combination of agentic AI-assisted
              development and the discipline that comes from writing code where every change
              is audited and reliability is the mission.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-100/80">
              I was born and raised in New York City and studied Computer Science at CUNY
              Queens College. I now call Washington, DC home — closer to the agencies and
              missions the work serves. Applied AI is the through-line: I use it daily in
              production, and I&apos;m focused on what it takes to make it reliable, auditable,
              and useful where the cost of a bad output is high.
            </p>
          </div>
          <div className="glass p-6">
            <p className="eyebrow">At a glance</p>
            <ul className="mt-4 space-y-3 text-sm">
              <Stat label="Based in" value="Washington, DC · NYC native" />
              <Stat label="Education" value="B.A. Computer Science, CUNY Queens College" />
              <Stat label="Clearance" value="Active TS/SCI · Full Scope Polygraph" />
              <Stat label="Stack" value="TypeScript · Python · React · AI-assisted dev" />
            </ul>
          </div>
        </div>
      </Section>

      <Section num="02" id="focus" eyebrow="Focus" title="Three lenses on the same problem: making intelligent products actually work.">
        <div className="grid gap-6 md:grid-cols-3">
          {FOCUS.map((f) => (
            <div key={f.title} className="glass p-6 group">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-700/40 text-ink-200 text-xl border border-ink-300/20 group-hover:border-ink-300/50 transition-colors">
                  {f.glyph}
                </span>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-100/85">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section num="03" id="experience" eyebrow="Experience" title="From a Flushing IT shop to classified platforms at Fort Meade.">
        <p className="mb-10 max-w-3xl text-sm md:text-base leading-relaxed text-ink-100/80">
          Four years of building production software in regulated, mission-critical
          environments — full-stack web, AI-assisted tooling, and the modernization work
          government agencies actually depend on.
        </p>
        <ExperienceTimeline items={EXPERIENCE} />
      </Section>

      <Section num="04" id="in-progress" eyebrow="In Progress" title="Currently building — open scaffolds, real roadmaps.">
        <p className="mb-10 max-w-3xl text-sm md:text-base leading-relaxed text-ink-100/80">
          Two active projects I&apos;m scoping in public — one applied-AI build, one
          methodology deep-dive on LLM evals. Repos are live; READMEs lay out the
          architecture, methodology, and a versioned roadmap.
        </p>
        <Timeline items={IN_PROGRESS} />
      </Section>

      <Section num="05" id="projects" eyebrow="Selected Work" title="Shipping intelligent tools — from spec to production.">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Section>

      <Section num="06" id="contact" eyebrow="Contact" title="Let&apos;s build something.">
        <div className="glass p-8 md:p-10">
          <p className="text-base md:text-lg leading-relaxed text-ink-100/90 max-w-2xl">
            If you&apos;re hiring for secure software, AI-augmented engineering, or federal-mission
            modernization — I&apos;d love to talk.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> Connect on LinkedIn
            </a>
            <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
              <Icon name="mail" /> {EMAIL}
            </a>
            <a className="btn btn-ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="px-6 md:px-10 pb-10 pt-2">
        <div className="mx-auto max-w-6xl border-t border-ink-300/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-ink-200/60">
          <p>© {new Date().getFullYear()} Arbab Ansari. Built with Next.js & Tailwind.</p>
          <p>Born in NYC · Built in DC · Always learning.</p>
        </div>
      </footer>
    </main>
  );
}

/* ---------- components ---------- */

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#focus", label: "Focus" },
    { href: "#experience", label: "Experience" },
    { href: "#in-progress", label: "Now" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ink-950/40 border-b border-ink-300/10">
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between gap-6">
        <Link href="#top" className="font-semibold tracking-tight text-white">
          arbab<span className="text-ink-400">.</span>
        </Link>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-ink-100/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary !py-2 !px-4 text-xs sm:text-sm"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const shimmerRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = shimmerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle("is-paused", !entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id="top" className="relative px-6 md:px-10 pt-16 pb-28 md:pt-24 md:pb-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow rise">Software Engineer · Applied AI · National Security</p>
        <h1 className="rise mt-8 font-bold tracking-tight leading-[0.92] text-[clamp(3.25rem,12vw,9rem)]">
          <span className="block">Arbab</span>
          <span className="block">
            <span ref={shimmerRef} className="shimmer-text">Ansari</span>
            <span className="text-ink-400">.</span>
          </span>
        </h1>
        <p className="fade mt-8 max-w-3xl text-xl md:text-2xl text-white/95 font-medium leading-snug tracking-tight">
          Building at the intersection of software, AI, and national security.
        </p>
        <p className="fade mt-4 max-w-2xl text-base md:text-lg text-ink-100/80 leading-relaxed">
          From CUNY classrooms in Queens to classified web platforms at the NSA — engineering
          software where reliability isn&apos;t a feature, it&apos;s the mission. Born and raised in NYC,
          now based in Washington, DC.
        </p>
        <div className="fade mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#experience">See experience</a>
          <a className="btn btn-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <div className="fade mt-12 flex flex-wrap gap-2">
          <span className="chip">TypeScript</span>
          <span className="chip">Python</span>
          <span className="chip">React</span>
          <span className="chip">AI-Assisted Dev</span>
          <span className="chip">TS/SCI · Full Scope Poly</span>
          <span className="chip">Federal Mission Systems</span>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  num,
  eyebrow,
  title,
  children,
}: {
  id: string;
  num?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="cv-auto relative px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {num && (
          <p className="mb-3 font-mono text-xs sm:text-sm tracking-[0.2em] text-ink-300/60">
            — {num}
          </p>
        )}
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl leading-tight">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, hideStatus = false }: { project: Project; hideStatus?: boolean }) {
  return (
    <article
      className={`glass p-6 flex flex-col ${p.highlight ? "md:col-span-1" : "md:col-span-2"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold text-white break-words">{p.name}</h3>
          {!hideStatus && p.status === "In Progress" && (
            <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-ink-200/90 rounded-full bg-ink-700/40 border border-ink-300/30 px-2.5 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-ink-300 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-200" />
              </span>
              In Progress
            </span>
          )}
        </div>
        <Link
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-ink-300 hover:text-white transition-colors text-sm"
          aria-label={`Open ${p.name} on GitHub`}
        >
          ↗
        </Link>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-100/85 flex-1">
        {p.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
    </article>
  );
}

function TimelineRail({ children }: { children: React.ReactNode }) {
  return (
    <ol className="relative">
      <div
        className="absolute top-2 bottom-2 w-px bg-gradient-to-b from-ink-300/10 via-ink-300/30 to-ink-300/10 left-[3.75rem] sm:left-[6rem]"
        aria-hidden
      />
      {children}
    </ol>
  );
}

function TimelineItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="relative pl-20 sm:pl-32 pb-10 last:pb-0">
      <div className="absolute left-0 top-7 w-14 sm:w-20 text-right">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-ink-300/80 break-words">
          {label}
        </span>
      </div>
      <span
        className="absolute top-[1.85rem] flex h-3 w-3 -translate-x-1/2 left-[3.75rem] sm:left-[6rem]"
        aria-hidden
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-ink-300 opacity-60 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-ink-200 ring-4 ring-ink-950" />
      </span>
      {children}
    </li>
  );
}

function Timeline({ items }: { items: Project[] }) {
  return (
    <TimelineRail>
      {items.map((p) => (
        <TimelineItem key={p.name} label="Now">
          <ProjectCard project={p} hideStatus />
        </TimelineItem>
      ))}
    </TimelineRail>
  );
}

function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <TimelineRail>
      {items.map((e) => (
        <TimelineItem key={`${e.company}-${e.range}`} label={e.yearLabel}>
          <ExperienceCard item={e} />
        </TimelineItem>
      ))}
    </TimelineRail>
  );
}

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="glass p-6 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold text-white break-words">{item.company}</h3>
          <p className="mt-1 text-sm text-ink-100/85 break-words">
            {item.role} <span className="text-ink-300/60">·</span> {item.location}
          </p>
        </div>
        {item.current && (
          <span className="shrink-0 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-ink-200/90 rounded-full bg-ink-700/40 border border-ink-300/30 px-2.5 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ink-300 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-200" />
            </span>
            Current
          </span>
        )}
      </div>
      <p className="mt-2 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-300/70 break-words">
        {item.range}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink-100/85">{item.body}</p>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex flex-col gap-1 min-w-0">
      <span className="text-[11px] uppercase tracking-widest text-ink-300/80">{label}</span>
      <span className="text-sm text-white break-words">{value}</span>
    </li>
  );
}

function Icon({ name }: { name: "linkedin" | "github" | "mail" }) {
  const common = "w-4 h-4";
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21H18.4v-5.36c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.05 1.39-2.05 2.83V21H10z" />
      </svg>
    );
  }
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={common} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
