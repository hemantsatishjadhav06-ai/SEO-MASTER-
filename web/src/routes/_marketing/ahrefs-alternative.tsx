import { createFileRoute } from "@tanstack/react-router";
import { FeaturePageTemplate } from "@/components/feature-page";
import { comparisonPages } from "@/lib/comparison-pages";
import { buildPageSeo } from "@/lib/seo";

const page = comparisonPages.ahrefsAlternative;

export const Route = createFileRoute("/_marketing/ahrefs-alternative")({
  head: () =>
    buildPageSeo({
      title: "Open-source Ahrefs alternative",
      description: page.description,
      path: "/ahrefs-alternative",
      titleSuffix: "OpenSEO",
      imageAlt: page.imageAlt,
    }),
  component: () => <FeaturePageTemplate page={page} />,
});
