import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  callback: () => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handClikedOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handClikedOutside);
    return () => {
      document.removeEventListener("mousedown", handClikedOutside);
    };
  }, [callback]);
  return ref;
}
