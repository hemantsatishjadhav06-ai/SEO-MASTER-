import { createFileRoute } from "@tanstack/react-router";
import { comparisonPageList } from "@/lib/comparison-pages";
import { buildPageSeo } from "@/lib/seo";

const compareDescription =
  "See how OpenSEO compares to Semrush and Ahrefs, and where the free, open-source SEO tools fit. Focused workflows, usage-based pricing, and a tool you can self-host.";

export const Route = createFileRoute("/_marketing/compare")({
  head: () =>
    buildPageSeo({
      title: "Compare OpenSEO",
      description: compareDescription,
      path: "/compare",
      titleSuffix: "OpenSEO",
    }),
  component: CompareIndex,
});

function CompareIndex() {
  return (
    <article className="mx-auto max-w-5xl">
      <p className="text-sm font-medium text-[var(--color-brand-accent)]">
        Compare
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
        How OpenSEO compares
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-brand-muted)]">
        OpenSEO is the open-source, pay-as-you-go alternative to bloated,
        expensive SEO suites. Here's how it stacks up.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {comparisonPageList.map((page) => (
          <a
            key={page.slug}
            href={`/${page.slug}`}
            className="rounded-xl border border-[var(--color-border-subtle)] bg-white p-6 transition-colors hover:border-neutral-900"
          >
            <h2 className="text-lg font-semibold tracking-tight text-neutral-950">
              {page.eyebrow}
              <span
                aria-hidden="true"
                className="ml-1 text-[var(--color-brand-accent)]"
              >
                &rarr;
              </span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-brand-muted)]">
              {page.navDescription}
            </p>
          </a>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-[var(--color-border-subtle)] bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
          Try OpenSEO
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-brand-muted)]">
          The open source alternative to bloated, expensive, legacy SEO tools.
        </p>
        <div className="mt-4">
          <a
            href="https://app.openseo.so/sign-up"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-neutral-950 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Try OpenSEO
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </article>
  );
}
