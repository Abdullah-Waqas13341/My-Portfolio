import { Reveal } from "@/components/Reveal";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-5 py-24 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            CS @ NUST — ML, vision, and backends at production scale
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal delay={0.06} className="space-y-6 text-lg leading-relaxed text-zinc-400">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.12}>
            <div className="gradient-border rounded-2xl bg-surface-raised/40 p-8 backdrop-blur-sm">
              <ul className="flex flex-wrap gap-2">
                {about.badges.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-surface-border bg-black/30 px-4 py-2 text-sm text-zinc-300"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                Numbers from your CV — model accuracy, latency cuts, and
                throughput — are reflected across Experience and Projects.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
