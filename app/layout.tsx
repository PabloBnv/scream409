import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scream 409 | Tributo a Bullet For My Valentine",
  description: "Scream 409 - Tributo oficial a Bullet For My Valentine. Metalcore de Argentina.",
  keywords: ["metalcore", "tributo", "Bullet For My Valentine", "Argentina", "rock", "metal"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col metal-texture dark-texture">
        <LocaleProvider initialLocale="es">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}