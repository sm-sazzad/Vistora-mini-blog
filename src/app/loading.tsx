// app/loading.tsx
export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .skeleton {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.03) 0%,
            rgba(255,255,255,0.08) 50%,
            rgba(255,255,255,0.03) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
        }
      `}</style>

      {/* ============ HEADER SKELETON ============ */}
      <header className="border-b border-white/6 bg-[#0A0A0A]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="skeleton h-7 w-28 rounded-md" />

          {/* Nav links */}
          <div className="hidden items-center gap-10 md:flex">
            {[64, 80, 56, 64].map((w, i) => (
              <div
                key={i}
                className="skeleton h-4 rounded-md"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>

          {/* Search button */}
          <div className="skeleton h-9 w-24 rounded-full" />
        </div>
      </header>

      {/* ============ HERO SKELETON ============ */}
      <section className="relative overflow-hidden border-b border-white/6 bg-[#0A0A0A]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          {/* Left: Text content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="skeleton h-3 w-40 rounded-md" />

            {/* Title lines */}
            <div className="space-y-3">
              <div className="skeleton h-12 w-full max-w-md rounded-lg md:h-14" />
              <div className="skeleton h-12 w-[85%] max-w-md rounded-lg md:h-14" />
              <div className="skeleton h-12 w-[60%] max-w-md rounded-lg md:h-14" />
            </div>

            {/* Description */}
            <div className="space-y-2 pt-2">
              <div className="skeleton h-4 w-full max-w-lg rounded-md" />
              <div className="skeleton h-4 w-[90%] max-w-lg rounded-md" />
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <div className="skeleton h-12 w-40 rounded-full" />
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative hidden lg:block">
            <div className="skeleton aspect-4/3 w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES SECTION SKELETON ============ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Section heading */}
        <div className="mb-10 space-y-3">
          <div className="skeleton h-8 w-64 rounded-lg" />
          <div className="skeleton h-4 w-80 rounded-md" />
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/6 bg-white/2 p-6"
            >
              {/* Category label */}
              <div className="skeleton h-3 w-20 rounded-md" />

              {/* Title */}
              <div className="skeleton mt-5 h-6 w-32 rounded-md" />

              {/* Description */}
              <div className="mt-3 space-y-2">
                <div className="skeleton h-3.5 w-full rounded-md" />
                <div className="skeleton h-3.5 w-[80%] rounded-md" />
              </div>

              {/* Explore link */}
              <div className="skeleton mt-6 h-3.5 w-28 rounded-md" />
            </div>
          ))}
        </div>

        {/* All Categories button */}
        <div className="mt-12 flex justify-center">
          <div className="skeleton h-11 w-40 rounded-full" />
        </div>
      </section>

      {/* ============ FOOTER SKELETON ============ */}
      <footer className="border-t border-white/6 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand column */}
            <div className="space-y-3">
              <div className="skeleton h-6 w-24 rounded-md" />
              <div className="skeleton h-3.5 w-full max-w-xs rounded-md" />
              <div className="skeleton h-3.5 w-[70%] max-w-xs rounded-md" />
            </div>

            {/* Explore column */}
            <div className="space-y-3">
              <div className="skeleton h-4 w-20 rounded-md" />
              {[56, 48, 44, 40].map((w, i) => (
                <div
                  key={i}
                  className="skeleton h-3.5 rounded-md"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>

            {/* Company column */}
            <div className="space-y-3">
              <div className="skeleton h-4 w-20 rounded-md" />
              {[44, 52, 48].map((w, i) => (
                <div
                  key={i}
                  className="skeleton h-3.5 rounded-md"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>

            {/* Stay Updated column */}
            <div className="space-y-3">
              <div className="skeleton h-4 w-28 rounded-md" />
              <div className="skeleton h-3.5 w-full max-w-xs rounded-md" />
              <div className="skeleton h-3.5 w-[75%] max-w-xs rounded-md" />
              <div className="skeleton mt-2 h-10 w-28 rounded-full" />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-white/6 pt-6">
            <div className="mx-auto h-3.5 w-64 rounded-md skeleton" />
          </div>
        </div>
      </footer>
    </main>
  );
}
