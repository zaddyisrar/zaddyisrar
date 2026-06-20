import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://zaddyisrar.com"),

  title: {
    default: "Zaddy Israr",
    template: "%s | Zaddy Israr",
  },

  description:
    "Building products, AI systems, stories, businesses and digital worlds.",

  keywords: [
    "Zaddy Israr",
    "Muhammad Israr",
    "AI Developer",
    "Web Developer",
    "Social Media Marketing",
    "Generative AI",
    "AWS",
    "Portfolio",
  ],

  authors: [
    {
      name: "Muhammad Israr",
    },
  ],

  creator: "Muhammad Israr",

  openGraph: {
    title: "Zaddy Israr",
    description:
      "Building products, AI systems, stories, businesses and digital worlds.",
    url: "https://zaddyisrar.com",
    siteName: "Zaddy Israr",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaddy Israr",
    description:
      "Building products, AI systems, stories, businesses and digital worlds.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030407] text-white">
        {children}
      </body>
    </html>
  );
}