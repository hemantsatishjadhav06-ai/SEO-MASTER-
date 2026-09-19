import { createFileRoute } from "@tanstack/react-router";
import { FeaturePageTemplate } from "@/components/feature-page";
import { comparisonPages } from "@/lib/comparison-pages";
import { buildPageSeo } from "@/lib/seo";

const page = comparisonPages.semrushAlternative;

export const Route = createFileRoute("/_marketing/semrush-alternative")({
  head: () =>
    buildPageSeo({
      title: "Open-source Semrush alternative",
      description: page.description,
      path: "/semrush-alternative",
      titleSuffix: "OpenSEO",
      imageAlt: page.imageAlt,
    }),
  component: () => <FeaturePageTemplate page={page} />,
});
