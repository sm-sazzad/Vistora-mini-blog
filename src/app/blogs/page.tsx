import CategoryCard from "@/Components/CategoryCard";
import { categories } from "@/lib/CategoryName";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

const page = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C65A2E]">
            Vistora Categories
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#fdfcfc] md:text-5xl lg:text-6xl">
            Explore All Categories
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#b3b1b1] md:text-lg md:leading-8">
            Browse stories, ideas, and perspectives across every corner of
            Vistora.
          </p>
        </div>

        <div className="mt-8 h-px w-full bg-[#E5E3DE]" />
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
