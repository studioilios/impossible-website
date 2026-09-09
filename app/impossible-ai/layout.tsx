import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import PageTransition from "./_ia/components/PageTransition";

const rajdhani = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Impossible AI",
  description: "India's AI Multi-Agent Fitness Platform.",
};

export default function ImpossibleAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${rajdhani.variable} flex flex-col`}>
      <PageTransition />
      {children}
    </div>
  );
}
