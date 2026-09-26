const loading = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header / Article Info */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        {/* Back link */}
        <div className="mb-10 h-5 w-28 animate-pulse rounded bg-[#E5E3DE]" />

        {/* Category */}
        <div className="h-7 w-28 animate-pulse rounded-full bg-[#E5E3DE]" />

        {/* Title */}
        <div className="mt-6 max-w-5xl space-y-3">
          <div className="h-12 w-full animate-pulse rounded bg-[#E5E3DE] md:h-14" />
          <div className="h-12 w-5/6 animate-pulse rounded bg-[#E5E3DE] md:h-14" />
        </div>

        {/* Description */}
        <div className="mt-6 max-w-3xl space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-[#E5E3DE]" />
          <div className="h-5 w-4/5 animate-pulse rounded bg-[#E5E3DE]" />
        </div>

        {/* Author + Date */}
        <div className="mt-8 flex flex-wrap gap-8 border-y border-[#E5E3DE] py-5">
          <div>
            <div className="h-3 w-20 animate-pulse rounded bg-[#E5E3DE]" />
            <div className="mt-2 h-4 w-28 animate-pulse rounded bg-[#E5E3DE]" />
          </div>

          <div className="h-8 w-px bg-[#E5E3DE]" />

          <div>
            <div className="h-3 w-16 animate-pulse rounded bg-[#E5E3DE]" />
            <div className="mt-2 h-4 w-24 animate-pulse rounded bg-[#E5E3DE]" />
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="h-80 w-full animate-pulse rounded-3xl bg-[#E5E3DE] md:h-125" />
      </section>

      {/* Article Content */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="space-y-4">
          <div className="h-5 w-full animate-pulse rounded bg-[#E5E3DE]" />
          <div className="h-5 w-full animate-pulse rounded bg-[#E5E3DE]" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-[#E5E3DE]" />

          <div className="h-5 w-full animate-pulse rounded bg-[#E5E3DE]" />
          <div className="h-5 w-5/6 animate-pulse rounded bg-[#E5E3DE]" />

          <div className="h-5 w-full animate-pulse rounded bg-[#E5E3DE]" />
          <div className="h-5 w-4/5 animate-pulse rounded bg-[#E5E3DE]" />

          <div className="h-5 w-full animate-pulse rounded bg-[#E5E3DE]" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-[#E5E3DE]" />
        </div>

        {/* Original Article Button */}
        <div className="mt-14 border-t border-[#E5E3DE] pt-8">
          <div className="h-11 w-44 animate-pulse rounded-full bg-[#E5E3DE]" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <div className="mx-auto h-3 w-28 animate-pulse rounded bg-white/10" />

          <div className="mx-auto mt-5 h-9 w-72 animate-pulse rounded bg-white/10" />

          <div className="mx-auto mt-5 h-4 w-full max-w-xl animate-pulse rounded bg-white/10" />

          <div className="mx-auto mt-7 h-11 w-36 animate-pulse rounded-full bg-white/10" />
        </div>
      </section>
    </main>
  );
};

export default loading;
