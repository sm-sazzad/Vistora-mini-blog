import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { IDetails } from "./DataType";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article",
};

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
      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:pb-20 md:pt-12">
        {/* Back Button */}
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-[#777777] transition-colors duration-300 hover:text-[#173B6C]"
        >
          <FiArrowLeft className="text-base transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Category */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full border border-[#C65A2E]/20 bg-[#C65A2E]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C65A2E]">
            {sectionName}
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
          {webTitle}
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-3xl text-base leading-7 text-[#666666] md:text-lg md:leading-8">
          {trailText}
        </p>

        {/* Meta */}
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-y border-[#E5E3DE] py-5">
          {byline && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#999999]">
                Written by
              </p>

              <p className="mt-1 text-sm font-semibold text-[#222222]">
                {byline}
              </p>
            </div>
          )}

          {byline && <span className="h-7 w-px bg-[#E5E3DE]" />}

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#999999]">
              Published
            </p>

            <p className="mt-1 text-sm font-semibold text-[#222222]">
              {formattedDate}
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED IMAGE ================= */}
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="group relative overflow-hidden rounded-[28px] bg-[#E8E6E0]">
          <Image
            src={thumbnail}
            alt={webTitle}
            width={1400}
            height={850}
            priority
            className="h-85 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] md:h-125 lg:h-162.5"
          />

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Article Label */}
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-[#C65A2E]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
              Vistora Article
            </span>
          </div>

          {/* Article Content */}
          <article>
            <p className="text-[17px] leading-[1.9] text-[#333333] md:text-[18px] md:leading-[1.95]">
              {bodyText}
            </p>
          </article>

          {/* Source */}
          <div className="mt-16 border-t border-[#E5E3DE] pt-8">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
              Original Source
            </p>

            <a
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#173B6C] transition-colors duration-300 hover:text-[#C65A2E]"
            >
              Read original article
              <FiExternalLink className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C65A2E]">
            Vistora Stories
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Discover more stories
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
            Explore thoughtful stories and fresh perspectives across different
            categories.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F1F0EC]"
          >
            Explore Vistora
            <FiArrowLeft className="rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
