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
      subtitle: "Rock desde las sombras",
    },
    shows: {
      title: "Próximos Shows",
      noShows: "No hay shows programados",
      getTickets: "Entradas",
      pastShows: "Shows Anteriores",
    },
    music: {
      title: "Música",
      listen: "Escuchar",
      watch: "Ver",
    },
    band: {
      title: "La Banda",
      bio: "Sobre Nosotros",
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
      subtitle: "Rock from the shadows",
    },
    shows: {
      title: "Upcoming Shows",
      noShows: "No shows scheduled",
      getTickets: "Tickets",
      pastShows: "Past Shows",
    },
    music: {
      title: "Music",
      listen: "Listen",
      watch: "Watch",
    },
    band: {
      title: "The Band",
      bio: "About Us",
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