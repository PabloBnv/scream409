"use client";

import { useLocale } from "@/components/LocaleContext";
import Image from "next/image";

export default function MusicPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase tracking-wider">
        {t.music.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-muted p-6 text-center">
          <div className="relative w-full aspect-square mb-4">
            <Image
              src="/images/logo.jpeg"
              alt="Scream 409"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">EP</h2>
          <p className="text-muted-foreground mb-4">2024</p>
          <div className="flex flex-col gap-2">
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-background font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent hover:bg-accent hover:text-background transition-colors uppercase tracking-wider"
            >
              Apple Music
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}