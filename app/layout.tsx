import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scream 409",
  description: "Rock desde las sombras | Rock from the shadows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <LocaleProvider initialLocale="es">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}