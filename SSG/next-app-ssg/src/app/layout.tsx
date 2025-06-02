import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Next.js SSG Demo",
  description: "A modern web application demo built with Next.js and Static Site Generation.",
  applicationName: "Next.js App SSG",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSG", "Static Site Generation", "Demo"],
  authors: [{ name: "Demo Team" }],
  creator: "Demo Team",
  publisher: "Demo Team",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://render-strategy-demo-next-app-ssg.vercel.app",
    siteName: "Next.js App SSG",
    title: "Next.js SSG Demo",
    description: "A modern web application demo built with Next.js and Static Site Generation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js SSG Demo",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Next.js SSG Demo",
    description: "A modern web application demo built with Next.js and Static Site Generation.",
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
