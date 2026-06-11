import { withSentryConfig } from "@sentry/nextjs";

// Blog/project content is served from Sanity at request time (ISR + webhook
// revalidation), so there is no build-time content step here anymore.

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Turbopack doesn't infer it from a stray
  // lockfile elsewhere on the machine (e.g. ~/package-lock.json).
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      // Sanity image CDN (blog cover images, in-body images, project covers).
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  experimental: {
    // Tree-shake large barrel-export packages so only the icons/helpers we use
    // ship to the client (big win for @tabler/icons-react).
    optimizePackageImports: [
      "@tabler/icons-react",
      "framer-motion",
      "lucide-react",
    ],
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
