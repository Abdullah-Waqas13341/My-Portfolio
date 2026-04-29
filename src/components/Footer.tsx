import { siteMeta } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-surface-border px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>
          © {year} {siteMeta.name}. Built with Next.js.
        </p>
        <p className="font-mono text-xs text-zinc-600">
          Portfolio content lives in{" "}
          <code className="text-zinc-500">src/data/portfolio.ts</code>
        </p>
      </div>
    </footer>
  );
}
