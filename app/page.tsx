"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleContext";
import Link from "next/link";

export default function Home() {
  const { t, locale } = useLocale();

  return (
    <div className="min-h-[calc(100vh-80px)]">
      {/* Hero Section - Full Screen */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 z-10" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          {/* Logo - Large */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6">
            <Image
              src="/images/logo.jpeg"
              alt="Scream 409"
              fill
              className="object-contain logo-glow"
              priority
            />
          </div>

          {/* Title with Glow Effect */}
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-foreground mb-2 text-glow title-flicker">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="font-subheading text-xl md:text-2xl text-accent tracking-[0.3em] uppercase mb-8 text-glow-subtle">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/shows"
              className="btn-cta"
            >
              {locale === 'es' ? 'Ver Shows' : 'See Shows'}
            </Link>
            <Link
              href="/music"
              className="btn-metal px-8 py-3 text-sm"
            >
              {t.music.listen}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 border-t border-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-12">
            {locale === 'es' ? 'Último Lanzamiento' : 'Latest Release'}
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Album Cover */}
            <div className="relative w-64 h-64 border-2 border-accent/30">
              <Image
                src="/images/logo.jpeg"
                alt="EP 2024"
                fill
                className="object-contain p-4"
              />
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
            </div>

            {/* Album Info */}
            <div className="max-w-md text-left">
              <h3 className="font-heading text-4xl text-accent mb-2">EP</h3>
              <p className="text-muted-foreground mb-4 text-lg">2024</p>
              <p className="text-muted-foreground mb-6">
                {locale === 'es'
                  ? 'El primer EP de Scream 409. Cuatro tracks de metalcore intenso.'
                  : 'Scream 409 first EP. Four tracks of intense metalcore.'}
              </p>

              <div className="flex gap-4">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metal px-6 py-2 text-sm"
                >
                  Spotify
                </a>
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metal px-6 py-2 text-sm"
                >
                  Apple Music
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}