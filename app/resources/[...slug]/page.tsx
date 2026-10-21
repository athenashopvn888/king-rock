import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ResourceView from "../ResourceView";
import { getResourcePage, RESOURCE_PAGES } from "../resourceData";
import { VAPE_PAGE, cigaretteRedirectDestination } from "../../lib/cigaretteGate";

type ResourceRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

function routeSlug(slug?: string[]) {
  return (slug || []).join("/");
}

export function generateStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const route = routeSlug(slug);
  if (cigaretteRedirectDestination(`/resources/${route}`)) redirect(VAPE_PAGE);
  const page = getResourcePage(route);
  if (!page) return {};
  return {
    title: { absolute: page.seoTitle },
    description: page.description,
    alternates: { canonical: "https://www.kingrockcannabis.com/resources/" + page.slug },
  };
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const route = routeSlug(slug);
  if (cigaretteRedirectDestination(`/resources/${route}`)) redirect(VAPE_PAGE);
  const page = getResourcePage(route);
  if (!page) notFound();
  return <ResourceView page={page} />;
}
