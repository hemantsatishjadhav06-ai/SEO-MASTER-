import { createFileRoute } from "@tanstack/react-router";
import { FeaturePageTemplate } from "@/components/feature-page";
import { comparisonPages } from "@/lib/comparison-pages";
import { buildPageSeo } from "@/lib/seo";

const page = comparisonPages.freeSeoTools;

export const Route = createFileRoute("/_marketing/free-seo-tools")({
  head: () =>
    buildPageSeo({
      title: "Free, open-source SEO tools",
      description: page.description,
      path: "/free-seo-tools",
      titleSuffix: "OpenSEO",
      imageAlt: page.imageAlt,
    }),
  component: () => <FeaturePageTemplate page={page} />,
});
