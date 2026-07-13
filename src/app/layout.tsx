import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Daniel Herrera — Data Analyst & Automation Specialist",
    template: "%s | Daniel Herrera",
  },
  description:
    "Analytical thinker with an engineering foundation. I build data pipelines, automation flows, and digital operations systems with Python, R, SQL, n8n and GoHighLevel.",
  metadataBase: new URL("https://danielvertex.com"),
  openGraph: {
    title: "Daniel Herrera — Data Analyst & Automation Specialist",
    description:
      "Analytical thinker with an engineering foundation. Building systems that measure, automate and scale.",
    url: "https://danielvertex.com",
    siteName: "Daniel Herrera",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Herrera — Data Analyst & Automation Specialist",
    description:
      "Analytical thinker with an engineering foundation. Building systems that measure, automate and scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
