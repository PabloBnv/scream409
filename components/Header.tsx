"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "./LocaleContext";
import { useState } from "react";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/20">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-16 h-16 md:w-20 md:h-20">
          <Image
            src="/images/logo.jpeg"
            alt="Scream 409"
            fill
            className="object-contain logo-glow"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Locale Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="w-10 h-10 flex items-center justify-center border-2 border-accent text-accent font-bold text-sm tracking-wider hover:bg-accent hover:text-background transition-all"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-accent/20">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-xl py-3 border-b border-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}