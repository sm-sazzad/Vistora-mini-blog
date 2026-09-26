import { IData } from "@/lib/DataType";
import BlogCard from "./Card/BlogCard";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const getData = async (category: string, page: number): Promise<IData> => {
  const res = await fetch(
    `https://content.guardianapis.com/search?section=${category}&type=article&page=${page}&&show-fields=thumbnail,trailText,byline&api-key=${process.env.GUARDIAN_API_KEY}`,
  );
  const data = await res.json();
  return data;
};

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}) => {
  const { category } = await params;
  const { page } = await searchParams;

  const currentPage = Number(page) || 1;

  const data = await getData(category, currentPage);
  const results = data.response.results;

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
          Vistora Stories
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Latest from {results[0].sectionName}
        </h1>
      </div>
      <div className="grid grid-cols-3 justify-center gap-5 max-w-7xl mx-auto">
        {results.map((singleResults) => (
          <BlogCard key={singleResults.id} singleResults={singleResults} />
        ))}
      </div>
      <div className="mx-auto my-12 flex max-w-7xl items-center justify-between px-6">
        {/* Previous */}
        {currentPage > 1 ? (
          <Link
            href={`/blogs/${category}?page=${currentPage - 1}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <FaArrowLeftLong className="text-base transition-transform duration-300 group-hover:-translate-x-1" />
            Previous
          </Link>
        ) : (
          <div />
        )}

        {/* Current Page */}
        <span className="text-sm text-gray-500">
          Page <span className="font-semibold text-white">{currentPage}</span>
        </span>

        {/* Next */}
        <Link
          href={`/blogs/${category}?page=${currentPage + 1}`}
          className="group inline-flex items-center gap-2 rounded-full bg-[#173B6C] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#102C52]"
        >
          Next
          <FaArrowRightLong className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
};

export default page;
