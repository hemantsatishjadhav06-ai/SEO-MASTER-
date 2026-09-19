# Container image for the OpenSEO marketing site (web/).
#
# The site is a TanStack Start app built with the Cloudflare Vite plugin, so
# its natural home is Cloudflare Workers (`pnpm deploy`). This Dockerfile lets
# it also run on a generic container host such as Railway: it builds the site
# and serves the production build with `vite preview`, which runs the built
# worker in workerd and honours the host's $PORT.
FROM node:22

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

WORKDIR /app

RUN corepack enable

# Install dependencies first so this layer is cached across source-only changes.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Build the client + SSR worker and generate the sitemap.
RUN pnpm run build

EXPOSE 3000

# vite preview serves the production build in workerd. SERVE_HOST defaults to
# 0.0.0.0 (IPv4); hosts with an IPv6-only private network and healthchecks
# (e.g. Railway) set SERVE_HOST=:: so the server is reachable there (:: is
# dual-stack and still serves IPv4 clients). --port binds the platform PORT.
CMD ["sh", "-c", "pnpm exec vite preview --host ${SERVE_HOST:-0.0.0.0} --port ${PORT:-3000}"]
