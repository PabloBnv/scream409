"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "./LocaleContext";

export default function Header() {
  const { t, locale, setLocale } = useLocale();

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/shows", label: t.nav.shows },
    { href: "/music", label: t.nav.music },
    { href: "/band", label: t.nav.band },
    { href: "/contact", label: t.nav.contact },
  ];

  const toggleLocale = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="relative w-12 h-12">
          <Image
            src="/images/logo.jpeg"
            alt="Scream 409"
            fill
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="text-sm font-medium uppercase tracking-wide px-3 py-1 border border-accent hover:bg-accent hover:text-background transition-colors"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>

          <button className="md:hidden p-2" aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}