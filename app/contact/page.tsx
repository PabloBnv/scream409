"use client";

import { useLocale } from "@/components/LocaleContext";
import { useState } from "react";

export default function ContactPage() {
  const { t, locale } = useLocale();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFormState({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-16">
        {t.contact.title}
      </h1>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Booking */}
          <div className="card-metal p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-accent">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl mb-2 text-accent">{t.contact.booking}</h3>
            <a
              href="mailto:booking@scream409.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              booking@scream409.com
            </a>
          </div>

          {/* Press */}
          <div className="card-metal p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-accent">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl mb-2 text-accent">{t.contact.press}</h3>
            <a
              href="mailto:pr@scream409.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              pr@scream409.com
            </a>
          </div>

          {/* General */}
          <div className="card-metal p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-accent">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl mb-2 text-accent">{t.contact.general}</h3>
            <a
              href="mailto:info@scream409.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              info@scream409.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-metal p-8 md:p-12">
          <h2 className="font-heading text-2xl mb-8 text-center">
            {locale === 'es' ? 'Envíanos un mensaje' : 'Send us a message'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-subheading text-sm tracking-wider uppercase mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="input-metal w-full"
                  placeholder={locale === 'es' ? 'Tu nombre' : 'Your name'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-subheading text-sm tracking-wider uppercase mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="input-metal w-full"
                  placeholder={locale === 'es' ? 'tu@email.com' : 'your@email.com'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-subheading text-sm tracking-wider uppercase mb-2">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={6}
                className="input-metal w-full resize-none"
                placeholder={locale === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full btn-cta text-lg"
            >
              {sending ? t.contact.sending : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}