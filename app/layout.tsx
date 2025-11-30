import type { Metadata } from "next";
import "./../styles/globals.css";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  icons: {
    icon: SITE.logoSmall,
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.appName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "app-shell bg-slate-950 text-slate-50 antialiased",
          inter.variable,
          spaceGrotesk.variable,
          jetBrainsMono.variable
        )}
      >
        <main className="app-main">{children}</main>
      </body>
    </html>
  );
}
