import type { Metadata } from "next";
import "./globals.css";
import { FloatingProfileCard } from "@/components/FloatingProfileCard";
import { SideNavigation } from "@/components/SideNavigation";

export const metadata: Metadata = {
  title: "Farell Bryan Ursipuny | Legal & Government Relations",
  description: "Digital Portfolio of Farell Bryan Ursipuny - Legal, Public Policy, Government Relations, and Communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-black selection:text-white">
        <FloatingProfileCard />
        <SideNavigation />
        {children}
      </body>
    </html>
  );
}
