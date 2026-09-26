import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Vistora</h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Discover stories, ideas, places, and perspectives from around the
              world.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white">Explore</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link href="/blogs/technology" className="block hover:text-white">
                Technology
              </Link>

              <Link href="/blogs/travel" className="block hover:text-white">
                Travel
              </Link>

              <Link href="/blogs/food" className="block hover:text-white">
                Food
              </Link>

              <Link href="/blogs/sport" className="block hover:text-white">
                Sport
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link href="/about" className="block hover:text-white">
                About
              </Link>

              <Link href="/contact" className="block hover:text-white">
                Contact
              </Link>

              <Link href="/privacy" className="block hover:text-white">
                Privacy
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white">Stay Updated</h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Get interesting stories and updates delivered to you.
            </p>

            <button className="mt-5 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 Vistora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
