import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { IDetails } from "./DataType";

const page = async ({ params }: { params: Promise<{ id: string[] }> }) => {
  const { id } = await params;

  const ID = id.join("/");

  const res = await fetch(
    `https://content.guardianapis.com/${ID}?show-fields=bodyText,thumbnail,trailText,byline&api-key=${process.env.GUARDIAN_API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const data: IDetails = await res.json();
  const article = data.response.content;

  const {
    sectionName,
    webTitle,
    webPublicationDate,
    webUrl,
    fields: { thumbnail, trailText, byline, bodyText },
  } = article;

  const formattedDate = new Date(webPublicationDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        {/* Back */}
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#666666] transition-colors hover:text-[#173B6C]"
        >
          <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Category */}
        <div className="mb-5">
          <span className="inline-flex rounded-full border border-[#C65A2E]/20 bg-[#C65A2E]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C65A2E]">
            {sectionName}
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
          {webTitle}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#666666] md:text-xl">
          {trailText}
        </p>

        {/* Author + Date */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-[#E5E3DE] py-5">
          {byline && (
            <div>
              <p className="text-xs uppercase tracking-wider text-[#888888]">
                Written by
              </p>
              <p className="mt-1 text-sm font-semibold text-[#171717]">
                {byline}
              </p>
            </div>
          )}

          <div className="h-8 w-px bg-[#E5E3DE]" />

          <div>
            <p className="text-xs uppercase tracking-wider text-[#888888]">
              Published
            </p>
            <p className="mt-1 text-sm font-semibold text-[#171717]">
              {formattedDate}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#F1F0EC]">
          <Image
            src={thumbnail}
            alt={webTitle}
            width={1400}
            height={850}
            className="h-auto max-h-175 w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <article className="prose prose-lg max-w-none">
          <p className="mb-6 text-[17px] leading-8 text-[#333333] md:text-[18px] md:leading-9">
            {bodyText}
          </p>
        </article>

        {/* Source */}
        <div className="mt-14 border-t border-[#E5E3DE] pt-8">
          <a
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#173B6C] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#102C52]"
          >
            Read original article
            <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C65A2E]">
            Vistora Stories
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Discover more stories
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
            Explore more stories, ideas, and perspectives across different
            categories.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
          >
            Explore Vistora
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
