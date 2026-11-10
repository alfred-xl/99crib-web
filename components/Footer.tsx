import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socialLinkClassName =
    "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="99 Crib home">
              <Image src="/images/brand/logo-white.png" alt="99 Crib" width={494} height={147} className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Nigeria&apos;s verified student accommodation platform: safe, affordable housing near your university, without the fraud.
            </p>
            <nav aria-label="Social media" className="mt-7 flex flex-wrap gap-3">
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
            <Link href="/#download" className="mt-8 inline-flex rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">
              Get the App
            </Link>
          </div>

          <nav aria-label="Company">
            <h2 className="font-semibold">Company</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
              <Link href="/careers" className="hover:text-white">Careers</Link>
              <Link href="/press" className="hover:text-white">Press</Link>
            </div>
          </nav>

          <nav aria-label="For Students">
            <h2 className="font-semibold">For Students</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link href="/how-it-works" className="hover:text-white">How It Works</Link>
              <Link href="/accommodations" className="hover:text-white">Browse Listings</Link>
              <Link href="/safety" className="hover:text-white">Safety &amp; Verification</Link>
              <Link href="/faq" className="hover:text-white">FAQ</Link>
            </div>
          </nav>

          <nav aria-label="For Landlords">
            <h2 className="font-semibold">For Landlords</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link href="/landlords" className="hover:text-white">List a Property</Link>
              <Link href="/safety#verification" className="hover:text-white">Verification Process</Link>
              <Link href="/landlords#faq" className="hover:text-white">Landlord FAQ</Link>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 99 Crib Technologies Ltd. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
