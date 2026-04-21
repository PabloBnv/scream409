"use client";

import { useLocale } from "@/components/LocaleContext";
import Image from "next/image";

const bandBio = {
  es: {
    title: "Sobre Nosotros",
    content: `Scream 409 nace en Madrid en 2023 como una expresión cruda de frustración y angústia. 
    Combinamos elementos de metalcore, post-hardcore y punk para crear un sonido que refleja 
    la realidad de una generación perdida entre la tecnología y la desconexión emocional.

    Nos definimos por la intensidad de nuestros directos y la honestidad de nuestras letras. 
    Cada show es una catarsis colectiva donde el público y la banda se unen en una sola voz.

    Nuestro objetivo es hacer que la gente sienta algo. En un mundo de homogenización musical, 
    Scream 409 representa la autenticidad de quienes no encajan en ningún lado.`,
  },
  en: {
    title: "About Us",
    content: `Scream 409 was born in Madrid in 2023 as a raw expression of frustration and anguish.
    We combine elements of metalcore, post-hardcore and punk to create a sound that reflects 
    the reality of a generation lost between technology and emotional disconnection.

    We define ourselves by the intensity of our live shows and the honesty of our lyrics.
    Every show is a collective catharsis where the audience and the band unite as one voice.

    Our goal is simple: to make people feel something. In a world of musical homogenization,
    Scream 409 represents the authenticity of those who don't fit anywhere.`,
  },
};

export default function BandPage() {
  const { t, locale } = useLocale();
  const bio = locale === 'es' ? bandBio.es : bandBio.en;

  const members = [
    {
      id: 1,
      name: "DxBx",
      role: locale === 'es' ? 'Voz' : 'Vocals',
      image: "/images/logo.jpeg",
    },
    {
      id: 2,
      name: "Jota",
      role: locale === 'es' ? 'Guitarra' : 'Guitar',
      image: "/images/logo.jpeg",
    },
    {
      id: 3,
      name: "Kike",
      role: locale === 'es' ? 'Guitarra' : 'Guitar',
      image: "/images/logo.jpeg",
    },
    {
      id: 4,
      name: "Fer",
      role: locale === 'es' ? 'Bajo' : 'Bass',
      image: "/images/logo.jpeg",
    },
    {
      id: 5,
      name: "Migue",
      role: locale === 'es' ? 'Batería' : 'Drums',
      image: "/images/logo.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-16">
        {t.band.title}
      </h1>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="card-metal p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-accent">
            {bio.title}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {bio.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section>
        <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center tracking-widest">
          {locale === 'es' ? 'Miembros' : 'Members'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="card-metal group overflow-hidden"
            >
              {/* Member Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Member Info */}
              <div className="p-4 text-center relative">
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />

                <h3 className="font-heading text-2xl mb-1">{member.name}</h3>
                <p className="text-accent text-sm tracking-widest uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment/Gear Section */}
      <section className="mt-20 border-t border-accent/20 pt-16">
        <h2 className="font-heading text-xl md:text-2xl mb-8 text-center tracking-widest text-muted-foreground">
          {locale === 'es' ? 'Equipo' : 'Gear'}
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-metal p-6">
            <h3 className="font-heading text-xl mb-4 text-accent">
              {locale === 'es' ? 'Guitarras' : 'Guitars'}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• ESP LTD EC-1000</li>
              <li>• Schecter C-1 FR</li>
              <li>• Peavey 6505+</li>
              <li>• Mesa Boogie Rectifier</li>
            </ul>
          </div>
          <div className="card-metal p-6">
            <h3 className="font-heading text-xl mb-4 text-accent">
              {locale === 'es' ? 'Bajo y Batería' : 'Bass & Drums'}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ibanez SR500</li>
              <li>• Hartke LH1000</li>
              <li>• Pearl Export EXX</li>
              <li>• Zildjian A Custom</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}