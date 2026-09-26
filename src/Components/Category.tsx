import Link from "next/link";
import CategoryCard from "./CategoryCard";
import { FiGrid } from "react-icons/fi";

const categories = [
  {
    name: "Technology",
    slug: "technology",
  },
  {
    name: "Travel",
    slug: "travel",
  },
  {
    name: "Food",
    slug: "food",
  },
  {
    name: "Sport",
    slug: "sport",
  },
  {
    name: "Lifestyle",
    slug: "lifeandstyle",
  },
  {
    name: "Culture",
    slug: "culture",
  },
];

const Category = () => {
  return (
    <div className="bg-black">
      <section className="mx-auto max-w-7xl px-6 py-16 ">
        <h2 className="text-3xl font-bold text-white">Explore Categories</h2>

        <p className="mt-2 text-gray-400">
          Choose a topic and discover stories you love.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10">
          {categories.map((category, indx) => (
            <CategoryCard key={indx} category={category} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="group  inline-flex items-center gap-2 rounded-full border border-[#E5E3DE] bg-white px-4 py-2 text-sm font-medium text-[#333333] shadow-sm transition-all duration-300 hover:border-[#173B6C]/20 hover:bg-[#173B6C] hover:text-white hover:shadow-md"
          >
            <FiGrid className="text-base transition-transform duration-300 group-hover:rotate-6" />
            All Categories
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Category;
