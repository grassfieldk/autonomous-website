# Performance Guide

Comprehensive performance optimization strategies and best practices for the Autonomous Website project.

## 🎯 Performance Philosophy

Our performance strategy is built on the principle of **AI-Optimized Performance**, where artificial intelligence guides optimization decisions:

```
    🚀 User Experience (Core Web Vitals)
   🚀🚀 Runtime Performance (React Optimization)
  🚀🚀🚀 Build Performance (Turbopack + Next.js)
 🚀🚀🚀🚀 Development Performance (Hot Reload + TypeScript)
```

### Performance Goals

| Metric                       | Target  | Current | Tools                |
| ---------------------------- | ------- | ------- | -------------------- |
| **First Contentful Paint**   | < 1.2s  | TBD     | Lighthouse           |
| **Largest Contentful Paint** | < 2.5s  | TBD     | Core Web Vitals      |
| **Cumulative Layout Shift**  | < 0.1   | TBD     | Chrome DevTools      |
| **First Input Delay**        | < 100ms | TBD     | Real User Monitoring |
| **Time to Interactive**      | < 3.0s  | TBD     | Lighthouse           |
| **Bundle Size**              | < 250KB | TBD     | Bundle Analyzer      |

## 🛠️ Performance Stack

### Core Technologies

| Category       | Technology      | Performance Benefit                              |
| -------------- | --------------- | ------------------------------------------------ |
| **Framework**  | Next.js 15      | Server-side rendering, automatic code splitting  |
| **Build Tool** | Turbopack       | 10x faster than Webpack, incremental compilation |
| **Runtime**    | React 19        | Concurrent features, automatic batching          |
| **Styling**    | Tailwind CSS v4 | Zero-runtime CSS, tree-shaking                   |
| **Bundling**   | Native ESM      | Faster module loading                            |
| **Images**     | Next.js Image   | Automatic optimization, lazy loading             |

### Performance Monitoring

| Tool                        | Purpose                      | Implementation          |
| --------------------------- | ---------------------------- | ----------------------- |
| **Lighthouse CI**           | Automated performance audits | GitHub Actions          |
| **Core Web Vitals**         | Real user metrics            | Google Analytics 4      |
| **Bundle Analyzer**         | Bundle size analysis         | Webpack Bundle Analyzer |
| **Performance Observer**    | Runtime monitoring           | Custom implementation   |
| **React DevTools Profiler** | Component performance        | Development only        |

## 🚀 Next.js Optimizations

### App Router Benefits

```typescript
// app/layout.tsx - Optimized root layout
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// Font optimization with Next.js
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// Optimized metadata
export const metadata: Metadata = {
  title: {
    default: 'Autonomous Website',
    template: '%s | Autonomous Website',
  },
  description: 'AI-powered autonomous web development',
  keywords: ['AI', 'autonomous', 'web development', 'Next.js'],
  authors: [{ name: 'AI Development Team' }],
  metadataBase: new URL('https://autonomous-website.dev'),
  // Enable preconnect for external resources
  other: {
    'dns-prefetch': '//fonts.googleapis.com',
    'preconnect': '//fonts.gstatic.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
```

### Code Splitting Strategies

```typescript
// Dynamic imports for code splitting
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));
const AdminPanel = lazy(() => import('./AdminPanel'));

// Component with loading state
export function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Lazy load with fallback */}
      <Suspense fallback={<ChartSkeleton />}>
        <HeavyChart />
      </Suspense>

      {/* Conditional lazy loading */}
      {isAdmin && (
        <Suspense fallback={<div>Loading admin panel...</div>}>
          <AdminPanel />
        </Suspense>
      )}
    </div>
  );
}
```

### Image Optimization

```typescript
// Optimized image component usage
import Image from 'next/image';

export function OptimizedHero() {
  return (
    <div className="relative h-96">
      <Image
        src="/hero-image.jpg"
        alt="Hero description"
        fill
        priority // Load above-the-fold images immediately
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..." // Low-quality placeholder
      />
    </div>
  );
}

// Responsive images
export function ResponsiveImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
      className="w-full h-auto"
      loading="lazy" // Lazy load below-the-fold images
    />
  );
}
```

## ⚛️ React Performance

### Component Optimization

```typescript
// Memoization best practices
import { memo, useMemo, useCallback } from 'react';

interface ExpensiveComponentProps {
  data: ComplexData[];
  onItemClick: (id: string) => void;
  filterText: string;
}

// Memoize the entire component
export const ExpensiveComponent = memo(function ExpensiveComponent({
  data,
  onItemClick,
  filterText,
}: ExpensiveComponentProps) {
  // Memoize expensive calculations
  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [data, filterText]);

  // Memoize callback to prevent child re-renders
  const handleItemClick = useCallback((id: string) => {
    onItemClick(id);
  }, [onItemClick]);

  return (
    <div>
      {filteredData.map(item => (
        <ExpensiveItem
          key={item.id}
          item={item}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
});

// Optimize child components
interface ExpensiveItemProps {
  item: ComplexData;
  onClick: (id: string) => void;
}

const ExpensiveItem = memo(function ExpensiveItem({
  item,
  onClick
}: ExpensiveItemProps) {
  const handleClick = useCallback(() => {
    onClick(item.id);
  }, [onClick, item.id]);

  return (
    <div onClick={handleClick}>
      {item.name}
    </div>
  );
});
```

### State Management Optimization

```typescript
// Optimize state updates
import { useReducer, useTransition } from 'react';

interface State {
  items: Item[];
  filter: string;
  isLoading: boolean;
}

type Action =
  | { type: 'SET_ITEMS'; payload: Item[] }
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload, isLoading: false };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export function OptimizedList() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    filter: '',
    isLoading: false,
  });

  // Use transitions for non-urgent updates
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (newFilter: string) => {
    startTransition(() => {
      dispatch({ type: 'SET_FILTER', payload: newFilter });
    });
  };

  return (
    <div>
      <input
        type="text"
        value={state.filter}
        onChange={(e) => handleFilterChange(e.target.value)}
        placeholder="Filter items..."
      />

      {isPending && <div>Filtering...</div>}

      <ItemList items={state.items} filter={state.filter} />
    </div>
  );
}
```

### Virtual Scrolling

```typescript
// Virtual scrolling for large lists
import { FixedSizeList as List } from 'react-window';

interface VirtualizedListProps {
  items: Item[];
  itemHeight: number;
  height: number;
}

export function VirtualizedList({
  items,
  itemHeight,
  height
}: VirtualizedListProps) {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <ItemComponent item={items[index]} />
    </div>
  );

  return (
    <List
      height={height}
      itemCount={items.length}
      itemSize={itemHeight}
      width="100%"
    >
      {Row}
    </List>
  );
}
```

## 🎨 CSS Performance

### Tailwind CSS Optimization

```css
/* tailwind.config.ts - Optimized configuration */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Only define what you need
      colors: {
        primary: '#0070f3',
        secondary: '#6b7280',
      },
      // Use CSS variables for dynamic values
      backgroundColor: {
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
      },
    },
  },
  // Enable JIT mode for faster builds
  mode: 'jit',
  plugins: [],
};

export default config;
```

### Critical CSS

```css
/* globals.css - Inline critical styles */
@layer base {
  /* Critical above-the-fold styles */
  html {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
  }

  body {
    margin: 0;
    background-color: white;
    color: #1a1a1a;
  }
}

@layer components {
  /* Component styles with minimal specificity */
  .btn-base {
    @apply inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors;
  }

  .btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500;
  }
}

@layer utilities {
  /* Custom utilities for performance */
  .animate-fade-in {
    animation: fadeIn 0.2s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
```

### CSS-in-JS Alternatives

```typescript
// Use CSS variables for dynamic styling
const dynamicStyles = {
  '--color-primary': theme.colors.primary,
  '--size-multiplier': scale,
} as React.CSSProperties;

return (
  <div style={dynamicStyles} className="bg-[rgb(var(--color-primary))]">
    Content
  </div>
);
```

## 📦 Bundle Optimization

### Webpack Bundle Analyzer

```javascript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable bundle analyzer in development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: false,
        })
      );
    }
    return config;
  },

  // Enable experimental features
  experimental: {
    turbo: {
      rules: {
        // Optimize specific file types
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
```

### Tree Shaking

```typescript
// Optimize imports for tree shaking
// ✅ Good: Named imports
import { Button, Card } from "@/components/ui";
import { format } from "date-fns";
import { debounce } from "lodash-es";

// ❌ Bad: Default imports of large libraries
import * as _ from "lodash";
import moment from "moment";

// ✅ Use barrel exports strategically
// components/ui/index.ts
export { Button } from "./Button";
export { Card } from "./Card";
export { Badge } from "./Badge";
// Don't export everything with *

// ✅ Use dynamic imports for conditional features
const AdminPanel = lazy(() =>
  import("./AdminPanel").then((module) => ({
    default: module.AdminPanel,
  }))
);
```

### Package Optimization

```json
// package.json - Optimize dependencies
{
  "dependencies": {
    "next": "15.3.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    // Use ES modules versions when available
    "lodash-es": "^4.17.21",
    "date-fns": "^2.30.0"
  },
  "peerDependencies": {
    // Avoid duplicate packages
    "react": "^19.0.0"
  }
}
```

## 🔧 Build Performance

### Turbopack Optimization

```typescript
// next.config.ts - Turbopack configuration
const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // Configure loaders for optimal performance
      loaders: {
        ".svg": ["@svgr/webpack"],
      },
      // Enable persistent caching
      memoryLimit: 4096,
    },
  },

  // Optimize for production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable SWC minification
  swcMinify: true,
};
```

### Development Performance

```json
// .vscode/settings.json - Optimize VS Code
{
  "typescript.preferences.includePackageJsonAutoImports": "off",
  "typescript.suggest.autoImports": false,
  "typescript.updateImportsOnFileMove.enabled": "never",
  "eslint.workingDirectories": ["src"],
  "tailwindCSS.experimental.configFile": "./tailwind.config.ts"
}
```

## 📊 Performance Monitoring

### Core Web Vitals Implementation

```typescript
// lib/analytics.ts - Performance monitoring
export function reportWebVitals(metric: any) {
  // Send to analytics service
  if (process.env.NODE_ENV === 'production') {
    // Google Analytics 4
    gtag('event', metric.name, {
      custom_map: { metric_value: 'value' },
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    });

    // Custom monitoring
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    }).catch(console.error);
  }
}

// app/layout.tsx - Use the reporter
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
```

### Custom Performance Monitoring

```typescript
// hooks/usePerformanceMonitor.ts
import { useEffect } from 'react';

export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      // Log slow renders in development
      if (process.env.NODE_ENV === 'development' && renderTime > 16) {
        console.warn(`Slow render detected: ${componentName} took ${renderTime}ms`);
      }

      // Send to monitoring service in production
      if (process.env.NODE_ENV === 'production' && renderTime > 100) {
        fetch('/api/performance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            component: componentName,
            renderTime,
            timestamp: Date.now(),
          }),
        }).catch(console.error);
      }
    };
  }, [componentName]);
}

// Usage in components
export function MyComponent() {
  usePerformanceMonitor('MyComponent');

  return <div>Component content</div>;
}
```

### Lighthouse CI Integration

```yaml
# .github/workflows/performance.yml
name: Performance CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - run: npm ci
      - run: npm run build
      - run: npm run start &

      - name: Wait for server
        run: npx wait-on http://localhost:3000

      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/", "http://localhost:3000/style-guide"],
      startServerCommand: "npm run start",
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 1200 }],
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
```

## 🔍 Performance Debugging

### React DevTools Profiler

```typescript
// Wrap components for profiling
import { Profiler } from 'react';

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) {
  console.log('Profiler:', {
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
}

export function ProfiledComponent({ children }: { children: React.ReactNode }) {
  return (
    <Profiler id="MyComponent" onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
}
```

### Performance Budgets

```json
// performance-budget.json
{
  "budgets": [
    {
      "resourceSizes": [
        {
          "resourceType": "script",
          "budget": 250
        },
        {
          "resourceType": "total",
          "budget": 500
        }
      ],
      "resourceCounts": [
        {
          "resourceType": "third-party",
          "budget": 10
        }
      ]
    }
  ]
}
```

## 📋 Performance Checklist

### Pre-Launch Checklist

- [ ] **Core Web Vitals**
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] **Images**
  - [ ] All images optimized with Next.js Image
  - [ ] Appropriate image formats (WebP, AVIF)
  - [ ] Lazy loading implemented
  - [ ] Proper sizing and srcSet
- [ ] **JavaScript**
  - [ ] Bundle size < 250KB
  - [ ] Tree shaking enabled
  - [ ] Code splitting implemented
  - [ ] Unused code removed
- [ ] **CSS**
  - [ ] Critical CSS inlined
  - [ ] Unused CSS purged
  - [ ] CSS minified
  - [ ] No render-blocking CSS
- [ ] **Fonts**
  - [ ] Font optimization enabled
  - [ ] Font display: swap
  - [ ] Preload critical fonts
  - [ ] Minimal font variants
- [ ] **Caching**
  - [ ] Proper Cache-Control headers
  - [ ] Static assets cached
  - [ ] API responses cached
  - [ ] Service worker implemented (if needed)

### Performance Monitoring Setup

- [ ] **Analytics**
  - [ ] Google Analytics 4 configured
  - [ ] Core Web Vitals tracking
  - [ ] Custom events for interactions
  - [ ] Error tracking enabled
- [ ] **CI/CD**
  - [ ] Lighthouse CI in pipeline
  - [ ] Performance budgets enforced
  - [ ] Bundle size monitoring
  - [ ] Automated performance tests

## 🚀 Advanced Optimizations

### Edge Computing

```typescript
// middleware.ts - Edge middleware
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // A/B testing at the edge
  const bucket = Math.random() < 0.5 ? "a" : "b";
  const response = NextResponse.next();
  response.cookies.set("bucket", bucket);

  // Add performance headers
  response.headers.set("X-Performance-Bucket", bucket);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

### Service Worker

```typescript
// public/sw.js - Performance-focused service worker
const CACHE_NAME = "autonomous-website-v1";
const STATIC_CACHE = [
  "/",
  "/style-guide",
  "/_next/static/css/app.css",
  "/_next/static/js/app.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_CACHE)));
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith("http")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
    );
  }
});
```

---

**Last Updated**: July 1, 2025  
**Performance Version**: 1.0.0  
**Maintained by**: AI Development Team

This performance guide ensures optimal user experience while maintaining development velocity in our AI-first approach.
