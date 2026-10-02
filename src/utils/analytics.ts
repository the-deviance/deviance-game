// Thin wrapper around Plausible (loaded in public/index.html). Events queue
// via the snippet's stub until the script loads, and silently no-op if it
// never does (ad blocker, offline), so game code can call track() freely.

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export function track(event: string, props?: Record<string, string | number>) {
  try {
    window.plausible?.(event, props ? { props } : undefined);
  } catch (error) {
    console.error('Analytics error:', error);
  }
}
