import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — King Rock | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at King Rock.",
  alternates: {
    canonical: "https://kingrockcannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
