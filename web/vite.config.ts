import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import mdx from "fumadocs-mdx/vite";

const mdxPlugin = mdx(await import("./source.config"));
const transformMdx = mdxPlugin.transform;
if (typeof transformMdx === "function") {
  mdxPlugin.transform = function (code, id, options) {
    // Leave raw prompt files to Vite instead of compiling them as MDX pages.
    if (new URLSearchParams(id.split("?")[1]).has("raw")) return;
    return transformMdx.call(this, code, id, options);
  };
}

// ALLOWED_HOST="*" disables Vite's host check (allowedHosts: true), needed
// behind a platform proxy (e.g. Railway) whose healthcheck/edge Host header
// isn't known ahead of time; otherwise Vite answers 403 "Blocked request".
const allowedHosts: true | undefined =
  process.env.ALLOWED_HOST === "*" ? true : undefined;

export default defineConfig({
  server: {
    port: 4322,
    allowedHosts,
  },
  preview: {
    allowedHosts,
  },
  ssr: {
    resolve: {
      conditions: ["worker", "import", "module", "default"],
    },
  },
  plugins: [
    mdxPlugin,
    tailwindcss(),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
    tanstackStart({
      prerender: {
        enabled: true,
        filter: ({ path }) => !/\.pdf(?:[?#]|$)/i.test(path),
      },
    }),
    react(),
  ],
});
