import type { FeaturePage } from "@/lib/feature-pages";

// Comparison / alternative landing pages. They reuse the same FeaturePage
// shape and <FeaturePageTemplate> as the feature pages, but live under their
// own top-level marketing routes (e.g. /semrush-alternative) because they
// target comparison and "alternative" search intent rather than a single
// product feature. Screenshots are reused from the feature pages so there are
// no new image assets to manage.
const KEYWORD_IMAGE =
  "https://imagedelivery.net/ysLOa6bzFaM49Jxok-TAlw/d77077d0-cdf4-4523-0c41-56a7b4861300/public";
const DOMAIN_IMAGE =
  "https://imagedelivery.net/ysLOa6bzFaM49Jxok-TAlw/189e22b8-fdf8-46b4-198c-e912beef2300/public";
const BACKLINKS_IMAGE =
  "https://imagedelivery.net/ysLOa6bzFaM49Jxok-TAlw/d97206ed-bd64-447c-2b9e-1b9f07c5ec00/public";

export const COMPARISON_PAGE_SLUGS = {
  semrushAlternative: "semrush-alternative",
  ahrefsAlternative: "ahrefs-alternative",
  freeSeoTools: "free-seo-tools",
} as const;

export const comparisonPages = {
  semrushAlternative: {
    slug: COMPARISON_PAGE_SLUGS.semrushAlternative,
    eyebrow: "Semrush alternative",
    navDescription: "A lean, pay-as-you-go alternative to Semrush.",
    title: "An open-source Semrush alternative",
    description:
      "OpenSEO covers the SEO workflows most teams actually use — keyword research, rank tracking, backlinks, site audits, and competitor insights — without a bloated suite or a monthly subscription. Bring your own DataForSEO key and pay only for the data you pull.",
    primaryKeyword: "semrush alternative",
    secondaryKeywords: [
      "free semrush alternative",
      "open source semrush alternative",
      "cheaper than semrush",
    ],
    imageAlt: "OpenSEO keyword research dashboard",
    imageSrc: KEYWORD_IMAGE,
    workflows: [
      {
        title: "Keyword research",
        description:
          "Expand seed topics into keyword ideas with volume, difficulty, CPC, and intent, and inspect the live SERP beside the metrics.",
      },
      {
        title: "Rank tracking",
        description:
          "Track your positions for the keywords you care about across locations and devices, and watch movement over time.",
      },
      {
        title: "Site audits & backlinks",
        description:
          "Crawl your site for technical issues and review referring domains and anchors — the same core research Semrush centralizes, minus the suite.",
      },
    ],
    metrics: [],
    showMetrics: false,
    useCases: [
      "Teams that want Semrush's core research without a per-seat annual contract.",
      "Founders and consultants who only need SEO data a few times a month.",
      "Agencies that want to fork and self-host their own SEO tooling.",
    ],
    differentiators: [
      "Open source — read the code, fork it, self-host it.",
      "Pay-as-you-go: bring your own DataForSEO key and pay only for what you pull.",
      "Built for AI agents with a first-class MCP server and agent skills.",
      "A focused, modern UI instead of a sprawling legacy suite.",
    ],
    related: [
      { label: "Keyword research", href: "/features/keyword-research" },
      { label: "Rank tracking", href: "/features/rank-tracking" },
      { label: "Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "Is OpenSEO a drop-in replacement for Semrush?",
        answer:
          "OpenSEO covers the most-used SEO workflows — keyword research, rank tracking, backlinks, site audits, and competitor insights. It is intentionally focused rather than an all-in-one suite, so a few of Semrush's peripheral modules are out of scope by design.",
      },
      {
        question: "How is the pricing different?",
        answer:
          "Instead of a fixed monthly subscription, OpenSEO is pay-as-you-go. You bring your own DataForSEO API key and pay DataForSEO directly for the data you pull, so light usage costs very little.",
      },
      {
        question: "Can I self-host it?",
        answer:
          "Yes. OpenSEO is open source and can be self-hosted with Docker or on Cloudflare. You own your data and your deployment.",
      },
    ],
  },
  ahrefsAlternative: {
    slug: COMPARISON_PAGE_SLUGS.ahrefsAlternative,
    eyebrow: "Ahrefs alternative",
    navDescription: "A pay-as-you-go alternative to Ahrefs.",
    title: "An open-source Ahrefs alternative",
    description:
      "Get the backlink analysis, keyword research, and rank tracking you reach for in Ahrefs — in a modern, open-source tool you control. No annual plan, no row limits you can't see past. Pay only for the data you pull through your own DataForSEO key.",
    primaryKeyword: "ahrefs alternative",
    secondaryKeywords: [
      "free ahrefs alternative",
      "open source ahrefs alternative",
      "cheaper than ahrefs",
    ],
    imageAlt: "OpenSEO backlinks report",
    imageSrc: BACKLINKS_IMAGE,
    workflows: [
      {
        title: "Backlink analysis",
        description:
          "Review referring domains, anchors, and new and lost links for any domain to understand a site's link profile.",
      },
      {
        title: "Keyword & SERP research",
        description:
          "Find keyword ideas with volume and difficulty and inspect the real SERP so content decisions match what's ranking.",
      },
      {
        title: "Rank tracking",
        description:
          "Follow your rankings over time for the queries that matter, by location and device.",
      },
    ],
    metrics: [],
    showMetrics: false,
    useCases: [
      "Link builders who want backlink data without a full Ahrefs subscription.",
      "SEOs who need dependable keyword and rank data on a variable budget.",
      "Developers who want an SEO tool they can extend and automate.",
    ],
    differentiators: [
      "Open source and self-hostable — no vendor lock-in.",
      "Usage-based pricing through your own DataForSEO key.",
      "MCP server and agent skills so AI agents can run the research for you.",
      "A clean, focused interface built around real workflows.",
    ],
    related: [
      { label: "Backlinks", href: "/features/backlinks" },
      { label: "Free backlink checker", href: "/backlink-checker" },
      { label: "Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "Does OpenSEO have its own backlink index?",
        answer:
          "OpenSEO sources backlink and keyword data through DataForSEO, which aggregates large third-party datasets. You connect your own DataForSEO key and OpenSEO presents that data in focused workflows.",
      },
      {
        question: "Is there a free way to try it?",
        answer:
          "Yes — the hosted app has a free tier to try it out, and there's a free backlink checker you can use without an account. For full features you add a DataForSEO key or subscribe to the hosted plan.",
      },
      {
        question: "Can I automate it with an AI agent?",
        answer:
          "Yes. OpenSEO ships an MCP server and pre-built agent skills, so agents like Claude Code can run keyword, backlink, and rank-tracking research directly.",
      },
    ],
  },
  freeSeoTools: {
    slug: COMPARISON_PAGE_SLUGS.freeSeoTools,
    eyebrow: "Free SEO tools",
    navDescription: "Free, open-source SEO tools you can self-host.",
    title: "Free, open-source SEO tools",
    description:
      "OpenSEO is free and open source. Self-host it and you only ever pay the underlying data provider for what you pull — no subscription in between. Start with the free backlink checker, then run keyword research, rank tracking, and site audits from one workspace.",
    primaryKeyword: "free seo tools",
    secondaryKeywords: [
      "free seo tools online",
      "open source seo tools",
      "free seo audit tool",
    ],
    imageAlt: "OpenSEO domain overview",
    imageSrc: DOMAIN_IMAGE,
    workflows: [
      {
        title: "Free backlink checker",
        description:
          "Check the backlinks pointing at any domain right now — no account required.",
      },
      {
        title: "Self-host the full toolkit",
        description:
          "Run OpenSEO with Docker or on Cloudflare's free tier and unlock keyword research, rank tracking, site audits, and more.",
      },
      {
        title: "Pay only for data",
        description:
          "Bring your own DataForSEO key so the only cost is the data you actually pull — the software itself is free.",
      },
    ],
    metrics: [],
    showMetrics: false,
    useCases: [
      "Anyone who wants real SEO data without committing to a paid suite.",
      "Students and hobbyists learning SEO on a budget.",
      "Developers who want to self-host free SEO tooling for their team.",
    ],
    differentiators: [
      "Genuinely free and open source — MIT licensed.",
      "Free backlink checker with no sign-up.",
      "Self-host on Cloudflare's free tier or with Docker.",
      "No subscription — usage-based data costs only.",
    ],
    featuredLink: {
      title: "Try the free backlink checker",
      description:
        "Check any domain's backlinks in your browser, no account needed.",
      href: "/backlink-checker",
    },
    related: [
      { label: "Backlink checker", href: "/backlink-checker" },
      { label: "Why open source?", href: "/open-source-seo" },
      { label: "Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "Is OpenSEO really free?",
        answer:
          "The software is free and open source (MIT licensed). When you self-host, your only cost is what you pay the data provider (DataForSEO) for the data you pull. There's also a paid hosted plan if you'd rather not self-host.",
      },
      {
        question: "What can I use without paying anything?",
        answer:
          "The free backlink checker works with no account. Self-hosting the app is free; you only add a DataForSEO key when you want keyword, rank, and audit data.",
      },
      {
        question: "Where's the source code?",
        answer:
          "OpenSEO is on GitHub. You can read it, fork it, and self-host it however you like.",
      },
    ],
  },
} satisfies Record<string, FeaturePage>;

export const comparisonPageList = Object.values(comparisonPages);
