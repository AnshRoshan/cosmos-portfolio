import { withSentryConfig } from "@sentry/nextjs";

// Next.js 16 uses Turbopack by default, which does not run webpack plugins.
// Velite is therefore kicked off here at config-load time so content
// collections are generated for both `next dev` (watch) and `next build`.
const isDev = process.argv.includes("dev");
const isBuild = process.argv.includes("build");

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Turbopack doesn't infer it from a stray
  // lockfile elsewhere on the machine (e.g. ~/package-lock.json).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: "ansh-roshan",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Hides source maps from generated client bundles
  hideSourceMaps: true,
});
