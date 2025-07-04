import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Navigation Bar Component
 *
 * Common navigation bar with site logo and main navigation links
 */
export function NavBar() {
  return (
    <nav className="bg-nav-background/80 border-nav-border fixed top-0 z-50 w-full border-b-4 backdrop-blur-[2px]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-foreground hover:text-primary text-xl font-bold transition-colors"
          >
            Autonom<span className="text-primary">Lab.</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            ホーム
          </Link>
          <Link
            href="/theme-preview"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            テーマプレビュー
          </Link>
          <a
            href="https://github.com/grassfieldk/autonomous-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
