import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { getResourcePage, RESOURCE_HOME } from "./resourceData";

const page = getResourcePage("") ?? RESOURCE_HOME;

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.description,
  alternates: { canonical: "https://www.kingrockcannabis.com/resources" },
};

export default function ResourcesPage() {
  return <ResourceView page={page} />;
}
