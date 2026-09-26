import { Result } from "@/lib/DataType";
import Link from "next/link";

const BlogCard = ({ singleResults }: { singleResults: Result }) => {
  const {
    id,
    sectionName,
    webTitle,
    webPublicationDate,
    fields: { thumbnail, trailText, byline },
  } = singleResults;

  const formattedDate = new Date(webPublicationDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      {/* Image */}
      <Link href={`/blog/${id}`} className="block overflow-hidden">
        <img
          src={thumbnail}
          alt={webTitle}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-400">
          {sectionName}
        </span>

        {/* Title */}
        <Link href={`/blog/${id}`}>
          <h2 className="mt-3 line-clamp-2 text-xl font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-orange-400">
            {webTitle}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
          {trailText}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
          <div className="min-w-0">
            {byline && (
              <p className="truncate text-sm font-medium text-gray-300">
                {byline}
              </p>
            )}

            <p className="mt-1 text-xs text-gray-500">{formattedDate}</p>
          </div>

          <Link
            href={`/blog/${id}`}
            className="shrink-0 text-sm font-medium text-gray-300 transition-all duration-300 group-hover:text-orange-400"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
