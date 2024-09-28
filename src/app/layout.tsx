import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Importing fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Hash Pet",
  description: "Hash Pet - A next-generation digital platform for pet owners offering comprehensive pet care services through Web3 technology.",
  openGraph: {
    title: "Hash Pet - Next-Generation Web3 Pet Platform",
    description: "Explore innovative, data-driven pet care solutions on Hash Pet, connecting pet owners worldwide.",
    url: "https://www.hashpet.io",
    siteName: "Hash Pet",
    images: [
      {
        url: "https://hashpet.vercel.app/open-graph.png", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Hash Pet - Next-Generation Web3 Pet Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HashPet",
    title: "Hash Pet - Next-Generation Web3 Pet Platform",
    description: "Join Hash Pet, a comprehensive platform providing innovative solutions for pet owners globally.",
    images: ["https://hashpet.vercel.app/open-graph.png"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://www.hashpet.io",
    languages: {
      en: "https://www.hashpet.io/en",
    },
  },
};

// JSON-LD schema for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hash Pet",
  "url": "https://www.hashpet.io",
  "logo": "https://www.hashpet.io/logo.png",
  "sameAs": [
    "https://www.facebook.com/hashpet",
    "https://twitter.com/hashpet",
    "https://www.instagram.com/hashpet",
  ],
  "description": "Hash Pet is a Web3 platform revolutionizing the pet care industry with personalized, data-driven services for pet owners worldwide.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "help@hashpet.io",
    "contactType": "Customer Support",
    "areaServed": "Global",
    "availableLanguage": ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hash Pet is a next-generation Web3 platform that offers innovative, data-driven solutions for pet care, connecting pet owners worldwide." />
        <meta name="keywords" content="pet care, Web3, pet platform, pet health, pet nutrition, pet services, blockchain, Hash Pet" />
        <meta name="author" content="Hash Pet" />
        <meta charSet="UTF-8" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hash Pet - Next-Generation Web3 Pet Platform" />
        <meta property="og:description" content="Explore innovative, data-driven pet care solutions on Hash Pet, connecting pet owners worldwide." />
        <meta property="og:url" content="https://www.hashpet.io" />
        <meta property="og:site_name" content="Hash Pet" />
        <meta property="og:image" content="https://hashpet.vercel.app/open-graph.png" /> {/* Replace with your image URL */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HashPet" />
        <meta name="twitter:title" content="Hash Pet - Next-Generation Web3 Pet Platform" />
        <meta name="twitter:description" content="Join Hash Pet, a comprehensive platform providing innovative solutions for pet owners globally." />
        <meta name="twitter:image" content="https://hashpet.vercel.app/open-graph.png" /> {/* Replace with your image URL */}

        {/* Favicon */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" href="/logo-svg.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
