import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — King Rock | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from King Rock in Toronto.",
  alternates: {
    canonical: "https://kingrockcannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
