import CategoryCard from "./CategoryCard";

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
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white">Explore Categories</h2>

        <p className="mt-2 text-gray-400">
          Choose a topic and discover stories you love.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 my-10">
          {categories.map((category, indx) => (
            <CategoryCard key={indx} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
