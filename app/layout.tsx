import "./globals.css";
import { LocaleProvider } from "@/components/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Scream 409 | Tributo a Bullet For My Valentine</title>
        <meta name="description" content="Scream 409 - Tributo oficial a Bullet For My Valentine. Metalcore de Argentina." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://scream409.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Scream 409 | Tributo a Bullet For My Valentine" />
        <meta property="og:description" content="Scream 409 - Tributo oficial a Bullet For My Valentine. Metalcore de Argentina." />
        <meta property="og:image" content="https://scream409.netlify.app/images/logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="scream409.netlify.app" />
        <meta name="twitter:url" content="https://scream409.netlify.app/" />
        <meta name="twitter:title" content="Scream 409 | Tributo a Bullet For My Valentine" />
        <meta name="twitter:description" content="Scream 409 - Tributo oficial a Bullet For My Valentine. Metalcore de Argentina." />
        <meta name="twitter:image" content="https://scream409.netlify.app/images/logo.png" />

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