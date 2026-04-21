"use client";

import { useLocale } from "@/components/LocaleContext";
import Image from "next/image";

export default function BandPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase tracking-wider">
        {t.band.title}
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-muted p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.band.bio}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Member 1</span>
          </div>
          <div className="aspect-square bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Member 2</span>
          </div>
          <div className="aspect-square bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Member 3</span>
          </div>
          <div className="aspect-square bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Member 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}