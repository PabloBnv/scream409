"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleContext";

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        
        <div className="relative z-20 text-center px-4">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <Image
              src="/images/logo.jpeg"
              alt="Scream 409"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <a
            href="https://www.instagram.com/scream.409/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-background font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
          >
            {t.music.listen}
          </a>
        </div>
      </section>
    </div>
  );
}