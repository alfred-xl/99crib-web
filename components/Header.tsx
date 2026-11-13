"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/components/navLinks";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled || menuOpen;

  useEffect(() => {
    const updateScroll = () => setScrolled((previous) => {
      const next = window.scrollY > 30;
      return previous === next ? previous : next;
    });
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [pathname]);

  // A section stays active on its sub-pages too (e.g. a listing under /accommodations).
  // trailingSlash is on, so compare without it.
  const path = pathname.replace(/\/+$/, "") || "/";
  function isActive(href: string) {
    return href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);
  }

  // Desktop: active link is coloured, semibold, with a short bar underneath.
  function linkClass(href: string) {
    const base = "relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-current after:transition-opacity";
    if (isActive(href)) return `${base} font-semibold after:opacity-100 ${isSolid ? "text-brand" : "text-white"}`;
    return `${base} after:opacity-0 ${isSolid ? "text-gray-600 hover:text-brand" : "text-white/85 hover:text-white/90"}`;
  }

  // Mobile menu: active link sits in a light brand pill.
  function mobileLinkClass(href: string) {
    const base = "-mx-3 rounded-lg px-3 py-2 transition-colors";
    return isActive(href) ? `${base} bg-brand-light font-semibold text-brand` : `${base} text-gray-600 hover:bg-gray-50 hover:text-brand`;
  }

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${isSolid ? "bg-white/97 text-navy shadow-sm backdrop-blur-md" : "bg-transparent text-white"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 lg:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
        <Link href="/" aria-label="99 Crib home">
          <Image
            src={isSolid ? "/images/brand/logo.png" : "/images/brand/logo-white.png"}
            alt="99 Crib"
            width={isSolid ? 600 : 494}
            height={isSolid ? 170 : 147}
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={path === href ? "page" : undefined} className={linkClass(href)}>{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:justify-self-end">
          <Link href="/#download" className="shrink-0 whitespace-nowrap rounded-xl bg-brand px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-dark sm:px-5 sm:text-sm">
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
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu-in flex flex-col gap-1 border-t border-gray-100 px-5 py-4 text-sm lg:hidden">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} aria-current={path === href ? "page" : undefined} className={mobileLinkClass(href)}>{label}</Link>
          ))}
        </nav>
      )}
      </header>
      {!isHome && <div aria-hidden="true" className="h-[72px]" />}
    </>
  );
}
