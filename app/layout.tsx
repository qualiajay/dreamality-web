import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dreamality — Your dreams, understood.",
  description:
    "An AI-powered dream journal for iPhone. Capture dreams by voice, receive intelligent interpretations, and discover what your inner world is telling you.",
  openGraph: {
    title: "Dreamality — Your dreams, understood.",
    description:
      "An AI-powered dream journal for iPhone. Capture dreams by voice, receive intelligent interpretations, and discover what your inner world is telling you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
