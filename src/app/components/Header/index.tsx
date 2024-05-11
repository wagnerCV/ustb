"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <div className="w-60 max-w-full px-4 xl:mr-12">
                <Link
                  href="/"
                  className={`header-logo block ${
                    sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
                >
                  <Image
                    src="/images/lg.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="dark:hidden"
                  />
                  <Image
                    src="/images/lg.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="hidden dark:block"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:flex items-center">
                <ThemeToggler />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
