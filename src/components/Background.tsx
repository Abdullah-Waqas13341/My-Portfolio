export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-[size:48px_48px] bg-grid-fade opacity-60"
        aria-hidden
      />
      <div
        className="animate-pulse-slow absolute -left-1/4 top-[-20%] h-[70vmin] w-[70vmin] rounded-full bg-glow-conic opacity-40 blur-3xl"
        aria-hidden
      />
      <div
        className="animate-pulse-slow absolute bottom-[-25%] right-[-15%] h-[55vmin] w-[55vmin] rounded-full bg-glow-conic opacity-30 blur-3xl [animation-delay:2s]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"
        aria-hidden
      />
    </div>
  );
}
