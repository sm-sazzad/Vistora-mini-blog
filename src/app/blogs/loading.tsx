const loading = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header Skeleton */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="max-w-3xl">
          <div className="h-4 w-40 animate-pulse rounded bg-[#E5E3DE]" />

          <div className="mt-5 h-12 w-3/4 animate-pulse rounded bg-[#E5E3DE] md:h-14" />

          <div className="mt-5 h-5 w-full max-w-2xl animate-pulse rounded bg-[#E5E3DE]" />
          <div className="mt-2 h-5 w-2/3 max-w-2xl animate-pulse rounded bg-[#E5E3DE]" />
        </div>

        <div className="mt-8 h-px w-full bg-[#E5E3DE]" />
      </section>

      {/* Category Cards Skeleton */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E5E3DE] bg-white p-7"
            >
              <div className="h-3 w-20 animate-pulse rounded bg-[#E5E3DE]" />

              <div className="mt-5 h-8 w-2/3 animate-pulse rounded bg-[#E5E3DE]" />

              <div className="mt-4 h-4 w-full animate-pulse rounded bg-[#E5E3DE]" />
              <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-[#E5E3DE]" />

              <div className="mt-6 h-4 w-28 animate-pulse rounded bg-[#E5E3DE]" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default loading;
