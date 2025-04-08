import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { PostHogProvider } from "./providers";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Massive Brain - Conversational AI Tutor for iPad",
  description:
    "The world's first AI tutor that can talk to you, see your work, and write on your screen.",
  openGraph: {
    images: "/assets/og_image.jpg",
  },
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },
  metadataBase: new URL("https://massivebrain.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} antialiased`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
