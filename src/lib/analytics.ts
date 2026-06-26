type GTag = (...args: unknown[]) => void;

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as Window & { gtag?: GTag }).gtag === 'function') {
    (window as Window & { gtag: GTag }).gtag('event', event, params ?? {});
  }
}
