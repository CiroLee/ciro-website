import { onUnmounted } from 'vue';

export function useEventListener<E extends keyof WindowEventMap>(
  target: EventTarget,
  eventType: E,
  // eslint-disable-next-line no-unused-vars
  listener: (event: Event) => void,
  options?: boolean | AddEventListenerOptions
): void {
  const opt = options ?? false;
  target.addEventListener(eventType, listener, opt);

  onUnmounted(() => {
    target.removeEventListener(eventType, listener, opt);
  });
}
