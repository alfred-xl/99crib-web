import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { navLinks } from "@/components/navLinks";
import SubscribeForm from "@/components/SubscribeForm";

export default function Footer() {
  const socialLinkClassName =
    "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-brand transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.6fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="99 Crib home">
              <Image src="/images/brand/logo-white.png" alt="99 Crib" width={494} height={147} className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Nigeria&apos;s verified student accommodation platform: safe, affordable housing near your university, without the fraud.
            </p>
            <nav aria-label="Social media" className="mt-6 flex flex-wrap gap-2.5">
              <a href="https://x.com/99crib" target="_blank" rel="noopener noreferrer" aria-label="99 Crib on X" className={socialLinkClassName}>
                <FaXTwitter aria-hidden="true" size={18} />
              </a>
              <a href="https://www.instagram.com/99crib/" target="_blank" rel="noopener noreferrer" aria-label="99 Crib on Instagram" className={socialLinkClassName}>
                <FaInstagram aria-hidden="true" size={20} />
              </a>
              <a href="https://www.tiktok.com/@99crib" target="_blank" rel="noopener noreferrer" aria-label="99 Crib on TikTok" className={socialLinkClassName}>
                <FaTiktok aria-hidden="true" size={18} />
              </a>
              <a href="https://www.linkedin.com/company/99crib/" target="_blank" rel="noopener noreferrer" aria-label="99 Crib on LinkedIn" className={socialLinkClassName}>
                <FaLinkedin aria-hidden="true" size={19} />
              </a>
              <a href="https://www.facebook.com/99crib" target="_blank" rel="noopener noreferrer" aria-label="99 Crib on Facebook" className={socialLinkClassName}>
                <FaFacebook aria-hidden="true" size={19} />
              </a>
            </nav>
            <Link href="/#download" className="mt-8 inline-flex rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
              Get the App
            </Link>
          </div>

          <nav aria-label="Company">
            <h2 className="text-sm font-semibold">Company</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              {navLinks.filter(({ href }) => href !== "/").map(({ href, label }) => (
                <Link key={href} href={href} className="transition-colors hover:text-white">{label}</Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Quick Links">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link href="/accommodations" className="transition-colors hover:text-white">Premium Listings</Link>
              <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
              <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/faq" className="transition-colors hover:text-white">FAQ</Link>
            </div>
          </nav>

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-sm font-semibold">Stay updated</h2>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              New verified listings and campus housing tips, straight to your inbox.
            </p>
            <SubscribeForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 99 Crib Properties Ltd. All rights reserved.</p>
          <p>Licensed payment processing via Rubies Payment</p>
        </div>
      </div>
    </footer>
  );
}
