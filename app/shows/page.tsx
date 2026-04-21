"use client";

import { useLocale } from "@/components/LocaleContext";

export default function ShowsPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase tracking-wider">
        {t.shows.title}
      </h1>

      <div className="max-w-2xl mx-auto">
        <p className="text-center text-muted-foreground text-lg">
          {t.shows.noShows}
        </p>

        <div className="mt-12 text-center">
          <a
            href="mailto:booking@scream409.com"
            className="inline-block px-6 py-3 border border-accent hover:bg-accent hover:text-background transition-colors uppercase tracking-wider"
          >
            {t.contact.booking}
          </a>
        </div>
      </div>
    </div>
  );
}