import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Terminal,
  Briefcase,
  FolderGit2,
  Cpu,
  ExternalLink,
  Languages,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed Bahaa — DevOps Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ahmed Bahaa, an aspiring DevOps Engineer from 6th Of October, Egypt. Skilled in Linux, Docker, AWS, CI/CD, and automation.",
      },
      { property: "og:title", content: "Ahmed Bahaa — DevOps Engineer" },
      {
        property: "og:description",
        content:
          "Aspiring DevOps Engineer skilled in Linux, containerization, CI/CD pipelines, networking, and scripting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/ahmed-bahaa-mazen-196364219";
const GITHUB = "https://github.com/Ahmed-Mazen";
const EMAIL = "ahmedbahaamazen@gmail.com";

const skills = [
  { label: "Programming", items: ["C", "C++", "Python"] },
  {
    label: "Linux & Shell Scripting",
    items: ["Bash scripting", "Automation", "System operations"],
  },
  {
    label: "Docker",
    items: ["Images", "Containers", "Dockerfiles", "Docker Compose"],
  },
  { label: "Cloud Computing", items: ["AWS", "Oracle Cloud"] },
  {
    label: "CI/CD",
    items: ["GitHub Actions", "Basic pipelines", "Automation workflows"],
  },
  {
    label: "Networking",
    items: ["TCP/IP", "DNS", "HTTP/HTTPS", "Ports", "Routing fundamentals"],
  },
  { label: "Version Control", items: ["Git", "GitHub workflows"] },
];

const projects = [
  {
    title: "Water Pump System with Solar Energy",
    tag: "Arduino · Solar Tracking",
    description:
      "Built a water pump system using Arduino Uno, powered by a sun-tracking solar panel. Responsible for the sun tracking mechanism using two servo motors (x-axis and y-axis) and 4 LDR sensors in a plus shape. Developed an algorithm to detect light intensity and adjust movement. Overcame hardware inconsistencies by using calibration equations to ensure accurate sensor readings.",
    link: null as string | null,
  },
  {
    title: "Weather Station",
    tag: "ESP32 · OpenWeather API",
    description:
      "Created a weather station to detect indoor and outdoor temperatures. Utilized an ESP32 and DHT11 for indoor metrics, and integrated the OpenWeather API for outdoor data. Included an LCD Screen for physical readings and a built-in ESP32 web server to access data remotely via IP address.",
    link: "https://github.com/Ahmed-Mazen/WeatherStation",
  },
];

function SectionHeading({
  icon: Icon,
  title,
  command,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  command: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">ahmed@devops</span>
        <span className="text-electric">:~$</span> {command}
      </p>
      <h2 className="mt-2 flex items-center gap-3 text-3xl font-bold tracking-tight">
        <Icon className="h-7 w-7 text-primary" />
        {title}
      </h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero ─────────────────────────────── */}
      <header className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="animate-fade-up rounded-lg border border-border bg-surface/80 px-5 py-3 font-mono text-sm shadow-2xl backdrop-blur">
            <span className="text-primary">ahmed@devops</span>
            <span className="text-electric">:~$</span>{" "}
            <span className="text-foreground">whoami</span>
            <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary" />
          </div>

          <h1
            className="animate-fade-up mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Ahmed <span className="text-glow text-primary">Bahaa</span>
          </h1>

          <p
            className="animate-fade-up mt-4 font-mono text-lg text-electric sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            &gt; DevOps Engineer
          </p>

          <p
            className="animate-fade-up mt-3 flex items-center gap-2 text-muted-foreground"
            style={{ animationDelay: "0.25s" }}
          >
            <MapPin className="h-4 w-4 text-primary" />
            6th Of October, Egypt
          </p>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            Aspiring DevOps Engineer with a strong foundation in Linux systems,
            cloud computing, and automation. Skilled in containerization, CI/CD
            pipelines, networking fundamentals, and scripting to streamline
            development and deployment workflows. Passionate about building
            scalable, reliable systems and continuously improving operational
            efficiency.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 card-glow"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-surface px-6 py-3 font-semibold text-primary transition-colors hover:bg-accent"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24">
        {/* ── Education ────────────────────────── */}
        <section className="py-16">
          <SectionHeading
            icon={GraduationCap}
            title="Education"
            command="cat education.txt"
          />
          <div className="rounded-xl border border-border bg-card p-6 transition-all hover:card-glow sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">
                  Misr University for Science and Technology
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Computer and Software Engineering
                </p>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 font-mono text-sm text-primary">
                2022 – Present
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-muted-foreground">GPA</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-electric to-primary"
                  style={{ width: "88.75%" }}
                />
              </div>
              <span className="font-mono font-bold text-primary">3.55</span>
            </div>
          </div>
        </section>

        {/* ── Skills ─────────────────────────── */}
        <section className="py-16">
          <SectionHeading
            icon={Terminal}
            title="Technical Skills"
            command="ls ~/skills/"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.label}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:card-glow"
              >
                <h3 className="font-mono text-sm font-semibold text-electric">
                  {"// "}
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-raised px-3 py-1 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ─────────────────────── */}
        <section className="py-16">
          <SectionHeading
            icon={Briefcase}
            title="Experience"
            command="cat experience.log"
          />
          <div className="relative border-l-2 border-primary/30 pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
            <div className="rounded-xl border border-border bg-card p-6 transition-all hover:card-glow sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Vice Head of Embedded Systems Committee
                  </h3>
                  <p className="mt-1 font-mono text-sm text-electric">
                    IEEE MUST SB
                  </p>
                </div>
                <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 font-mono text-sm text-primary">
                  11/2024 – Present
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                As the vice of embedded systems, I teach members about embedded
                systems such as Standard C language to Embedded C,
                Microprocessors like ATMega32, and Robotics in general (Sensors,
                Circuits, etc).
              </p>
            </div>
          </div>
        </section>

        {/* ── Projects ───────────────────────── */}
        <section className="py-16">
          <SectionHeading
            icon={FolderGit2}
            title="Projects"
            command="git log --projects"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:card-glow"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-electric">
                  <Cpu className="h-4 w-4" />
                  {project.tag}
                </div>
                <h3 className="mt-3 text-xl font-bold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/60 hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {!project.link && (
                  <div className="mt-5 inline-flex w-fit items-center gap-1 font-mono text-xs text-muted-foreground">
                    <ChevronRight className="h-3.5 w-3.5 text-primary" />
                    hardware · arduino · solar
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────── */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 sm:grid-cols-3">
          <div>
            <h3 className="font-mono text-sm font-semibold text-primary">
              $ contact --phone
            </h3>
            <a
              href="tel:01004478854"
              className="mt-3 flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              01004478854
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
          </div>
          <div>
            <h3 className="font-mono text-sm font-semibold text-primary">
              $ languages --list
            </h3>
            <div className="mt-3 space-y-2">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Languages className="h-4 w-4" />
                Arabic <span className="text-xs text-electric">(Native)</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Languages className="h-4 w-4" />
                English{" "}
                <span className="text-xs text-electric">(Professional)</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-sm font-semibold text-primary">
              $ socials --connect
            </h3>
            <div className="mt-3 flex gap-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-raised text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:card-glow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-raised text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:card-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">
          © 2026 Ahmed Bahaa — <span className="text-primary">exit 0</span>
        </div>
      </footer>
    </div>
  );
}
