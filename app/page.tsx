import Link from "next/link";

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
    title: "Technical Program Management",
    body:
      "Translating ambiguous product bets into shippable roadmaps. Aligning engineering, design, and stakeholders so the right thing gets built — and gets out the door.",
    glyph: "◈",
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

      <Section id="about" eyebrow="About" title="Builder at the intersection of AI, engineering, and product.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass p-6 md:col-span-2">
            <p className="text-base leading-relaxed text-ink-100/90">
              I&apos;m <strong className="text-white">Arbab Ansari</strong> — a New York–based engineer
              focused on shipping <em>applied AI</em>. I grew up writing code to chase product
              ideas, studied CS at Queens College, and now spend my time turning model
              capabilities into things that feel inevitable in a product surface: fast,
              trustworthy, and quietly useful.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-100/80">
              I move comfortably between the IC seat and the program-management seat —
              writing the prototype on Monday, the eval harness on Wednesday, and the
              rollout plan on Friday. I care about latency budgets, sharp interfaces,
              and a small surface area you can actually maintain.
            </p>
          </div>
          <div className="glass p-6">
            <p className="eyebrow">At a glance</p>
            <ul className="mt-4 space-y-3 text-sm">
              <Stat label="Based in" value="New York, NY" />
              <Stat label="Education" value="B.S. CS, Queens College &apos;23" />
              <Stat label="Stack" value="TypeScript · Python · Next.js · LLM tooling" />
              <Stat label="Working on" value="Applied AI · TPM workflows" />
            </ul>
          </div>
        </div>
      </Section>

      <Section id="focus" eyebrow="Focus" title="Three lenses on the same problem: making intelligent products actually work.">
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

      <Section id="in-progress" eyebrow="In Progress" title="Currently building — open scaffolds, real roadmaps.">
        <p className="mb-8 max-w-3xl text-sm md:text-base leading-relaxed text-ink-100/80">
          Two active projects I&apos;m scoping in public — one applied-AI build, one TPM-style
          deep-dive. Repos are live; READMEs lay out the architecture, methodology, and a
          versioned roadmap.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {IN_PROGRESS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Selected Work" title="Shipping intelligent tools — from spec to production.">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let&apos;s build something.">
        <div className="glass p-8 md:p-10">
          <p className="text-base md:text-lg leading-relaxed text-ink-100/90 max-w-2xl">
            If you&apos;re working on applied AI, model-powered product surfaces, or
            need an engineer who can also drive the program — I&apos;d love to talk.
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
          <p>Designed in New York · Always learning.</p>
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
  return (
    <section id="top" className="relative px-6 md:px-10 pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow rise">Applied AI · AI Software Engineer · TPM</p>
        <h1 className="rise mt-6 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
          Building <span className="shimmer-text">intelligent</span> products
          <br className="hidden sm:block" />
          that actually ship.
        </h1>
        <p className="fade mt-6 max-w-2xl text-base md:text-lg text-ink-100/85 leading-relaxed">
          Hi, I&apos;m <strong className="text-white">Arbab</strong>. I design, build, and ship
          AI-powered products — sitting between engineering, model behavior, and program
          delivery so the right thing actually makes it to users.
        </p>
        <div className="fade mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#projects">See selected work</a>
          <a className="btn btn-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <div className="fade mt-12 flex flex-wrap gap-2">
          <span className="chip">LLM Apps</span>
          <span className="chip">Retrieval & Eval</span>
          <span className="chip">Next.js / TypeScript</span>
          <span className="chip">Python</span>
          <span className="chip">Roadmapping</span>
          <span className="chip">Stakeholder Alignment</span>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl leading-tight">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article
      className={`glass p-6 flex flex-col ${p.highlight ? "md:col-span-1" : "md:col-span-2"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold text-white break-words">{p.name}</h3>
          {p.status === "In Progress" && (
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
