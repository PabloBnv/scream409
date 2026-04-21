"use client";

import { useLocale } from "@/components/LocaleContext";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLocale();
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
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase tracking-wider">
        {t.contact.title}
      </h1>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 text-accent">{t.contact.booking}</h3>
            <a href="mailto:booking@scream409.com" className="text-muted-foreground hover:text-accent">
              booking@scream409.com
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 text-accent">{t.contact.press}</h3>
            <a href="mailto:pr@scream409.com" className="text-muted-foreground hover:text-accent">
              pr@scream409.com
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 text-accent">{t.contact.general}</h3>
            <a href="mailto:info@scream409.com" className="text-muted-foreground hover:text-accent">
              info@scream409.com
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-muted border border-foreground/10 focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-muted border border-foreground/10 focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-muted border border-foreground/10 focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full px-6 py-3 bg-accent text-background font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors disabled:opacity-50"
          >
            {sending ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}