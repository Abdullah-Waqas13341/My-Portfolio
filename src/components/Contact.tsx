import { Reveal } from "@/components/Reveal";
import { siteMeta } from "@/data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 py-28 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Let&apos;s build something ambitious
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">
            Open to internships and full-time roles in ML engineering, computer
            vision, and backend-heavy product teams.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${siteMeta.email}`}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-cyan/90 to-accent-violet/90 px-8 py-4 text-sm font-semibold text-surface shadow-lg transition hover:brightness-110"
            >
              Email {siteMeta.email}
            </a>
            <a
              href={siteMeta.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-surface-raised/60 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:border-accent-violet/50"
            >
              LinkedIn profile
            </a>
            <a
              href={`tel:${siteMeta.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center text-sm text-zinc-400 underline-offset-4 hover:text-white hover:underline"
            >
              {siteMeta.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
