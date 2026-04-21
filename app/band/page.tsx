"use client";

import { useLocale } from "@/components/LocaleContext";
import Image from "next/image";

const members = [
  {
    id: 1,
    name: "Ishvara Mantra",
    instagram: "https://instagram.com/ishvara_mantra",
  },
  {
    id: 2,
    name: "Xriset",
    instagram: "https://instagram.com/xriset",
  },
  {
    id: 3,
    name: "Hernán Drummer",
    instagram: "https://instagram.com/hernan.drummer",
  },
  {
    id: 4,
    name: "Fran Rotten",
    instagram: "https://instagram.com/fran.rotten",
  },
  {
    id: 5,
    name: "Lauchaggez",
    instagram: "https://instagram.com/lauchaggez",
  },
  {
    id: 6,
    name: "Edward Sustain",
    instagram: "https://instagram.com/edwardsustain",
  },
];

export default function BandPage() {
  const { t, locale } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-16">
        {t.band.title}
      </h1>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="card-metal p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-accent">
            {t.band.bio}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.band.description}</p>
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section>
        <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center tracking-widest">
          {locale === 'es' ? 'Miembros' : 'Members'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="card-metal group overflow-hidden"
            >
              {/* Member Image Placeholder */}
              <div className="relative aspect-square overflow-hidden bg-muted flex items-center justify-center">
                <svg className="w-16 h-16 text-muted-foreground/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Member Info */}
              <div className="p-4 text-center relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />

                <h3 className="font-heading text-lg mb-1">{member.name}</h3>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-xs tracking-widest hover:underline"
                >
                  @{member.instagram.replace('https://instagram.com/', '')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tribute Note */}
      <section className="mt-20 border-t border-accent/20 pt-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-heading text-xl md:text-2xl tracking-widest text-muted-foreground">
            {locale === 'es' 
              ? 'TRIBUTO OFICIAL A'
              : 'OFFICIAL TRIBUTE TO'}
          </p>
          <p className="font-heading text-3xl md:text-4xl mt-2 text-accent tracking-wider">
            BULLET FOR MY VALENTINE
          </p>
        </div>
      </section>
    </div>
  );
}