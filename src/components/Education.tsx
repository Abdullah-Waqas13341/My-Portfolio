import { Reveal } from "@/components/Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section
      className="px-5 py-16 sm:px-6"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="gradient-border flex flex-col gap-6 rounded-2xl bg-surface-raised/40 p-8 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Education
              </p>
              <h2
                id="education-heading"
                className="mt-2 text-2xl font-bold text-white md:text-3xl"
              >
                {education.degree}
              </h2>
              <p className="mt-1 text-lg text-zinc-400">{education.school}</p>
              <p className="mt-3 font-mono text-sm text-accent-cyan/90">
                {education.period}
              </p>
            </div>
            <ul className="max-w-md space-y-2 text-sm text-zinc-400">
              {education.extras.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
