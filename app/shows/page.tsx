"use client";

import { useLocale } from "@/components/LocaleContext";

const upcomingShows = [
  {
    id: 1,
    day: 15,
    month: "MAY",
    year: 2026,
    venue: "Sala Maravillas",
    city: "Madrid, España",
    tickets: "https://ticketmaster.com",
  },
  {
    id: 2,
    day: 22,
    month: "MAY",
    year: 2026,
    venue: "La Riviera",
    city: "Madrid, España",
    tickets: "https://ticketmaster.com",
  },
  {
    id: 3,
    day: 5,
    month: "JUN",
    year: 2026,
    venue: "Wacken Open Air",
    city: "Wacken, Alemania",
    tickets: "https://wacken.com",
  },
];

export default function ShowsPage() {
  const { t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-16">
        {t.shows.title}
      </h1>

      {upcomingShows.length > 0 ? (
        <div className="max-w-3xl mx-auto space-y-6">
          {upcomingShows.map((show) => (
            <div
              key={show.id}
              className="card-metal p-0 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Date Box */}
                <div className="date-box p-4 md:p-6">
                  <span className="day">{show.day}</span>
                  <span className="month">{show.month}</span>
                  <span className="text-sm mt-1 opacity-80">{show.year}</span>
                </div>

                {/* Show Info */}
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl mb-1">
                    {show.venue}
                  </h3>
                  <p className="text-muted-foreground">{show.city}</p>
                </div>

                {/* Tickets Button */}
                <div className="p-4 md:p-6 flex items-center justify-end">
                  <a
                    href={show.tickets}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-metal text-sm px-6 py-3"
                  >
                    {t.shows.getTickets}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground mb-8">
            {t.shows.noShows}
          </p>
          <a
            href="mailto:booking@scream409.com"
            className="btn-metal inline-block px-8 py-4"
          >
            {t.contact.booking}
          </a>
        </div>
      )}

      {/* Past Shows Section */}
      <section className="mt-24 border-t border-accent/20 pt-16">
        <h2 className="section-title text-center mb-12">
          {t.shows.pastShows}
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-metal p-4 text-center">
              <p className="font-heading text-xl text-accent">15 FEB 2026</p>
              <p className="text-sm mt-2">Sala Maravillas, Madrid</p>
            </div>
            <div className="card-metal p-4 text-center">
              <p className="font-heading text-xl text-accent">20 ENE 2026</p>
              <p className="text-sm mt-2">Shoko!, Barcelona</p>
            </div>
            <div className="card-metal p-4 text-center">
              <p className="font-heading text-xl text-accent">10 DIC 2025</p>
              <p className="text-sm mt-2">La Riviera, Madrid</p>
            </div>
            <div className="card-metal p-4 text-center">
              <p className="font-heading text-xl text-accent">22 NOV 2025</p>
              <p className="text-sm mt-2">Café La Montaña, Valencia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}