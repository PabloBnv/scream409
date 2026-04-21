export const translations = {
  es: {
    nav: {
      home: "Inicio",
      shows: "Shows",
      music: "Música",
      band: "La Banda",
      contact: "Contacto",
    },
    hero: {
      title: "Scream 409",
      subtitle: "Tributo a Bullet From My Valentine",
    },
    shows: {
      title: "Próximos Shows",
      noShows: "No hay shows programados",
      getTickets: "Entradas",
      pastShows: "Shows Anteriores",
      contactForBookings: "¿Querés que toquemos en tu evento? Escribinos!",
    },
    music: {
      title: "Música",
      listen: "Escuchar",
      watch: "Ver Video",
      videoTitle: "Nuestro Video",
    },
    band: {
      title: "La Banda",
      bio: "Sobre Nosotros",
      description: "Scream 409 es un proyecto musical dedicado a rendir tributo a una de las bandas más influyentes del género: Bullet For My Valentine. Nacimos del amor por su música y queremos transmitir esa energía explosiva a cada show.",
    },
    contact: {
      title: "Contacto",
      booking: "Booking",
      press: "Prensa",
      general: "General",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar",
      sending: "Enviando...",
    },
    footer: {
      followUs: "Síguenos",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      shows: "Shows",
      music: "Music",
      band: "The Band",
      contact: "Contact",
    },
    hero: {
      title: "Scream 409",
      subtitle: "Tribute to Bullet From My Valentine",
    },
    shows: {
      title: "Upcoming Shows",
      noShows: "No shows scheduled",
      getTickets: "Tickets",
      pastShows: "Past Shows",
      contactForBookings: "Want us to play at your event? Contact us!",
    },
    music: {
      title: "Music",
      listen: "Listen",
      watch: "Watch Video",
      videoTitle: "Our Video",
    },
    band: {
      title: "The Band",
      bio: "About Us",
      description: "Scream 409 is a musical project dedicated to paying tribute to one of the most influential bands in the genre: Bullet For My Valentine. We were born from the love for their music and we want to transmit that explosive energy to every show.",
    },
    contact: {
      title: "Contact",
      booking: "Booking",
      press: "Press",
      general: "General",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
    },
    footer: {
      followUs: "Follow Us",
      rights: "All rights reserved",
    },
  },
};

export type Locale = keyof typeof translations;
export type TranslationKeys = (typeof translations)["es"];