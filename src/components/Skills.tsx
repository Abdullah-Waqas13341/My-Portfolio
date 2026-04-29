import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-5 py-24 sm:px-6"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
            Skills
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Tools & stacks
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-surface-border bg-surface-raised/30 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  {cat.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
