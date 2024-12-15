import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    if (stored === null) return initialValue;

    try {
      return JSON.parse(stored);
    } catch {
      // If JSON parsing fails, return the raw string
      return stored === "dark" ? true : stored === "light" ? false : stored;
    }
  });

  useEffect(() => {
    // For boolean theme values, store as 'dark' or 'light'
    if (key === "theme") {
      localStorage.setItem(key, value ? "dark" : "light");
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
