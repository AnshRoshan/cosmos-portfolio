// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://49e328bcd52c4c5e98284c236f5335dc@o4507340981141504.ingest.de.sentry.io/4507340983697488",

  // Sample a fraction of transactions in production (1.0 was very heavy).
  tracesSampleRate: 0.1,

  debug: false,

  // Session Replay was removed: its client recorder is a large bundle + runtime
  // cost that isn't worth it for a portfolio. Error + performance monitoring
  // stay on. Re-add `Sentry.replayIntegration()` here if you need replays.
});

// Instrument client-side router navigations (required for Next.js App Router tracing).
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
