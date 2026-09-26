import Link from "next/link";

interface CategoryType {
  category: {
    name: string;
    slug: string;
  };
}

const CategoryCard = ({ category }: CategoryType) => {
  return (
    <Link
      href={`/blogs/${category.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      {/* Subtle glow */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition-all duration-300 group-hover:bg-orange-500/20" />

      <div className="relative">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-400">
          Category
        </span>

        <h3 className="mt-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
          {category.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Discover the latest stories and insights from {category.name}.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
          Explore stories
          <span className="text-orange-400">→</span>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
