"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the actual error so you can still debug in the console,
    // but avoid showing Next's generic "Application error" overlay.
    console.error("GlobalError boundary caught:", error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <main className="app-container flex min-h-screen flex-col items-center justify-center text-center gap-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Something went wrong
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            There was an error loading this page.
          </h1>
          <p className="max-w-md text-sm text-slate-400">
            A client-side error occurred while rendering this route. You can
            go back home or try reloading the page.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-100 hover:border-primary/60 hover:text-primary transition-colors"
            >
              Back to homepage
            </a>
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center justify-center rounded-full border border-slate-800/80 bg-slate-950 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-300 hover:border-slate-600 hover:text-slate-50 transition-colors"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
