import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Next.js ISR Demo",
  description: "A modern web application demo built with Next.js and Incremental Static Regeneration.",
  applicationName: "Next.js App ISR",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ISR", "Demo"],
  authors: [{ name: "Demo Team" }],
  creator: "Demo Team",
  publisher: "Demo Team",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://render-strategy-demo-next-app.vercel.app",
    siteName: "Next.js App ISR",
    title: "Next.js ISR Demo",
    description: "A modern web application demo built with Next.js and Incremental Static Regeneration.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js ISR Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js ISR Demo",
    description: "A modern web application demo built with Next.js and the latest technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} min-h-screen bg-gray-50`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
