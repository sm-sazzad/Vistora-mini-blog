import Link from "next/link";
import Navlogo from "@/assets/Navbar.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-b border-[#E5E3DE] bg-[#FAFAF8] sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Navlogo} alt="Vistora" className="h-10 w-auto" />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#171717] transition-colors hover:text-[#173B6C]"
          >
            Home
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-[#171717] transition-colors hover:text-[#173B6C]"
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-[#171717] transition-colors hover:text-[#173B6C]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-[#171717] transition-colors hover:text-[#173B6C]"
          >
            Contact
          </Link>
        </div>

        {/* Search */}
        <button className="rounded-full bg-[#173B6C] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#102C52]">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
