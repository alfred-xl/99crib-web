"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled || menuOpen;

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 0);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [pathname]);

  function linkClass(href: string) {
    if (pathname === href) return isSolid ? "text-brand" : "text-blue-400";
    return isSolid ? "text-gray-600" : "text-white/85";
  }

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 w-full ${isSolid ? "bg-white text-navy shadow-sm" : "bg-transparent text-white"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-2 px-5 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
        <Link href="/" aria-label="99 Crib home">
          <Image
            src={isSolid ? "/images/brand/logo.png" : "/images/brand/logo-white.png"}
            alt="99 Crib"
            width={isSolid ? 600 : 494}
            height={isSolid ? 170 : 147}
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 text-sm lg:flex">
          <Link href="/" aria-current={isHome ? "page" : undefined} className={linkClass("/")}>Home</Link>
          <Link href="/how-it-works" aria-current={pathname === "/how-it-works" ? "page" : undefined} className={linkClass("/how-it-works")}>How It Works</Link>
          <Link href="/accommodations" aria-current={pathname === "/accommodations" ? "page" : undefined} className={linkClass("/accommodations")}>Accommodations</Link>
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} className={linkClass("/about")}>About Us</Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={linkClass("/contact")}>Contact Us</Link>
        </nav>

        <div className="flex items-center gap-2 lg:justify-self-end">
          <Link href="/#download" className="shrink-0 whitespace-nowrap rounded-xl bg-brand px-3 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark sm:px-4 sm:text-sm">
            Get the App
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="rounded p-1 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-4 border-t border-gray-100 px-5 py-5 text-sm lg:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-current={isHome ? "page" : undefined} className={linkClass("/")}>Home</Link>
          <Link href="/how-it-works" onClick={() => setMenuOpen(false)} aria-current={pathname === "/how-it-works" ? "page" : undefined} className={linkClass("/how-it-works")}>How It Works</Link>
          <Link href="/accommodations" onClick={() => setMenuOpen(false)} aria-current={pathname === "/accommodations" ? "page" : undefined} className={linkClass("/accommodations")}>Accommodations</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} aria-current={pathname === "/about" ? "page" : undefined} className={linkClass("/about")}>About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} aria-current={pathname === "/contact" ? "page" : undefined} className={linkClass("/contact")}>Contact Us</Link>
        </nav>
      )}
      </header>
      {!isHome && <div aria-hidden="true" className="h-[72px]" />}
    </>
  );
}
