"use client";

import { useState, useEffect } from "react";

/**
 * Theme Toggle Component
 *
 * Provides a toggle button to switch between light and dark themes
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Function to apply theme by setting data-theme attribute
  const applyTheme = (isDarkMode: boolean) => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDark(isDarkMode);

    // Apply initial theme
    applyTheme(isDarkMode);

    // Listen for storage changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        const newIsDark = e.newValue === "dark";
        setIsDark(newIsDark);
        applyTheme(newIsDark);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Save theme preference to localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Apply theme
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="border-border bg-background text-foreground hover:bg-muted h-8 w-8 rounded-md border transition-colors"
      aria-label="テーマを切り替え"
      title={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
    />
  );
}
