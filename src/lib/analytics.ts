type GTag = (...args: unknown[]) => void;

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: GTag }).gtag === 'function') {
    (window as unknown as { gtag: GTag }).gtag('event', event, params ?? {});
  }
}
