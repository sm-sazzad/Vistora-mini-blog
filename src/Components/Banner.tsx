import Image from "next/image";
import BannerImg from "@/assets/Banner.jpg";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={BannerImg}
        alt="Discover stories from around the world"
        width={1920}
        height={800}
        className="h-125 w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Stories That Matter
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Discover Stories.
              <br />
              Explore New Perspectives.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 md:text-lg">
              Explore inspiring stories, ideas, places, technology, food, and
              everything happening around the world.
            </p>

            <button className="mt-8 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Explore Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
