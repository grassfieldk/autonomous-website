# API Reference

Comprehensive API documentation for all components, utilities, and interfaces in the Autonomous Website project.

## 📚 Overview

This reference provides detailed documentation for:

- **UI Components** - Base components from `src/components/ui/`
- **Composite Components** - Page-specific components from `src/components/`
- **TypeScript Interfaces** - Type definitions and contracts
- **Utility Functions** - Helper functions and utilities
- **Configuration** - Config files and environment setup

## 🧩 UI Components

### Button

Versatile button component with multiple variants, sizes, and states.

#### Import

```typescript
import { Button } from "@/components/ui/Button";
```

#### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

| Prop        | Type                                                                | Default     | Description                     |
| ----------- | ------------------------------------------------------------------- | ----------- | ------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style variant            |
| `size`      | `'sm' \| 'md' \| 'lg'`                                              | `'md'`      | Button size                     |
| `isLoading` | `boolean`                                                           | `false`     | Shows loading spinner when true |
| `leftIcon`  | `ReactNode`                                                         | `undefined` | Icon displayed before text      |
| `rightIcon` | `ReactNode`                                                         | `undefined` | Icon displayed after text       |
| `disabled`  | `boolean`                                                           | `false`     | Disables the button             |
| `type`      | `'button' \| 'submit' \| 'reset'`                                   | `'button'`  | HTML button type                |

#### Usage Examples

```typescript
// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="secondary" size="lg">
  Large Secondary Button
</Button>

// With loading state
<Button isLoading disabled>
  Processing...
</Button>

// With icons
<Button
  leftIcon={<PlusIcon />}
  rightIcon={<ArrowRightIcon />}
>
  Add Item
</Button>

// Form submission
<Button type="submit" variant="primary">
  Submit Form
</Button>
```

#### CSS Classes

```css
/* Base classes */
.btn-base         /* Common button styles */
.btn-primary      /* Primary variant */
.btn-secondary    /* Secondary variant */
.btn-outline      /* Outline variant */
.btn-ghost        /* Ghost variant */
.btn-destructive  /* Destructive variant */

/* Size classes */
.btn-sm           /* Small size */
.btn-md           /* Medium size */
.btn-lg           /* Large size */

/* State classes */
.btn-loading      /* Loading state */
.btn-disabled     /* Disabled state */
```

---

### Card

Flexible card component for displaying content with optional header, body, and footer.

#### Import

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
```

#### Props

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
```

| Component | Prop      | Type                                    | Default     | Description       |
| --------- | --------- | --------------------------------------- | ----------- | ----------------- |
| `Card`    | `variant` | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Card visual style |
| `Card`    | `padding` | `'none' \| 'sm' \| 'md' \| 'lg'`        | `'md'`      | Internal padding  |

#### Usage Examples

```typescript
// Basic card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Outlined card with custom padding
<Card variant="outlined" padding="lg">
  <CardContent>
    <h3>Custom Card</h3>
    <p>With custom styling</p>
  </CardContent>
</Card>

// Elevated card
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated Card</CardTitle>
  </CardHeader>
  <CardContent>
    Content with shadow effect
  </CardContent>
</Card>
```

---

### Badge

Small status indicators and labels with different variants and sizes.

#### Import

```typescript
import { Badge } from "@/components/ui/Badge";
```

#### Props

```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: () => void;
}
```

| Prop        | Type                                                                      | Default     | Description                 |
| ----------- | ------------------------------------------------------------------------- | ----------- | --------------------------- |
| `variant`   | `'default' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Color scheme                |
| `size`      | `'sm' \| 'md' \| 'lg'`                                                    | `'md'`      | Badge size                  |
| `removable` | `boolean`                                                                 | `false`     | Shows remove button         |
| `onRemove`  | `() => void`                                                              | `undefined` | Remove button click handler |

#### Usage Examples

```typescript
// Basic badges
<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Removable badge
<Badge
  variant="info"
  removable
  onRemove={() => console.log('Badge removed')}
>
  Removable Badge
</Badge>
```

---

### Alert

Contextual feedback messages for user actions with different severity levels.

#### Import

```typescript
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert";
```

#### Props

```typescript
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
```

| Component | Prop          | Type                                                       | Default     | Description          |
| --------- | ------------- | ---------------------------------------------------------- | ----------- | -------------------- |
| `Alert`   | `variant`     | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Alert type           |
| `Alert`   | `dismissible` | `boolean`                                                  | `false`     | Shows dismiss button |
| `Alert`   | `onDismiss`   | `() => void`                                               | `undefined` | Dismiss callback     |
| `Alert`   | `icon`        | `ReactNode`                                                | `undefined` | Custom icon          |

#### Usage Examples

```typescript
// Basic alerts
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>

// Dismissible alert
<Alert
  variant="warning"
  dismissible
  onDismiss={() => setShowAlert(false)}
>
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Please review your input before proceeding.
  </AlertDescription>
</Alert>

// With custom icon
<Alert variant="info" icon={<InfoIcon />}>
  <AlertDescription>
    This is an informational message.
  </AlertDescription>
</Alert>
```

## 🎯 Composite Components

### FeatureCard

Specialized card component for displaying feature information with icons and descriptions.

#### Import

```typescript
import { FeatureCard } from "@/components/FeatureCard";
```

#### Props

```typescript
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}
```

| Prop          | Type        | Default     | Description                    |
| ------------- | ----------- | ----------- | ------------------------------ |
| `title`       | `string`    | -           | Feature title (required)       |
| `description` | `string`    | -           | Feature description (required) |
| `icon`        | `ReactNode` | `undefined` | Feature icon                   |
| `href`        | `string`    | `undefined` | Optional link URL              |
| `className`   | `string`    | `undefined` | Additional CSS classes         |

#### Usage Examples

```typescript
// Basic feature card
<FeatureCard
  title="AI-Powered Development"
  description="Leverage GitHub Copilot for autonomous code generation and maintenance."
/>

// With icon and link
<FeatureCard
  title="Modern Architecture"
  description="Built with Next.js 15, TypeScript, and Tailwind CSS."
  icon={<CodeIcon />}
  href="/architecture"
/>

// With custom styling
<FeatureCard
  title="Performance Optimized"
  description="Turbopack and React 19 for lightning-fast development."
  className="border-blue-200 hover:border-blue-300"
/>
```

---

### TechBadgeList

Component for displaying a list of technology badges with consistent styling.

#### Import

```typescript
import { TechBadgeList } from "@/components/TechBadgeList";
```

#### Props

```typescript
interface TechBadgeListProps {
  technologies: Array<{
    name: string;
    version?: string;
    variant?: BadgeProps["variant"];
  }>;
  className?: string;
}
```

| Prop           | Type              | Default     | Description                     |
| -------------- | ----------------- | ----------- | ------------------------------- |
| `technologies` | `Array<TechItem>` | -           | List of technologies (required) |
| `className`    | `string`          | `undefined` | Additional CSS classes          |

#### TechItem Interface

```typescript
interface TechItem {
  name: string; // Technology name
  version?: string; // Optional version number
  variant?: BadgeProps["variant"]; // Badge color variant
}
```

#### Usage Examples

```typescript
// Basic tech badge list
<TechBadgeList
  technologies={[
    { name: 'Next.js', version: '15.3.4' },
    { name: 'TypeScript', version: '5.8.3' },
    { name: 'Tailwind CSS', version: '4.1.11' },
  ]}
/>

// With custom variants
<TechBadgeList
  technologies={[
    { name: 'React', version: '19.0.0', variant: 'success' },
    { name: 'Turbopack', variant: 'info' },
    { name: 'ESLint', version: '9.30.0', variant: 'secondary' },
  ]}
/>

// With custom styling
<TechBadgeList
  technologies={techStack}
  className="justify-center gap-3"
/>
```

## 📝 TypeScript Interfaces

### Common Types

```typescript
// Color variants used across components
type ColorVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

// Size variants
type SizeVariant = "sm" | "md" | "lg";

// Component base props
interface ComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Icon props
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}
```

### Page Props

```typescript
// Homepage props
interface HomePageProps {
  features: FeatureItem[];
  technologies: TechItem[];
  metadata: PageMetadata;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

interface TechItem {
  name: string;
  version?: string;
  variant?: ColorVariant;
  description?: string;
}

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
}
```

### Configuration Types

```typescript
// Tailwind config types
interface TailwindConfig {
  content: string[];
  theme: {
    extend: {
      colors: Record<string, string>;
      fontFamily: Record<string, string[]>;
      spacing: Record<string, string>;
    };
  };
  plugins: any[];
}

// Next.js config types
interface NextConfig {
  experimental?: {
    turbo?: boolean;
  };
  typescript?: {
    ignoreBuildErrors?: boolean;
  };
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
}
```

## 🛠️ Utility Functions

### Class Name Utilities

```typescript
// cn: Conditional className utility
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage example
const buttonClasses = cn(
  "btn-base",
  variant === "primary" && "btn-primary",
  size === "lg" && "btn-lg",
  disabled && "btn-disabled",
  className
);
```

### Type Guards

```typescript
// Type guard utilities
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isValidVariant(value: string): value is ColorVariant {
  return [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "info",
  ].includes(value);
}

export function hasProperty<T extends object, K extends string>(
  obj: T,
  prop: K
): obj is T & Record<K, unknown> {
  return prop in obj;
}
```

### Formatting Utilities

```typescript
// Format version numbers
export function formatVersion(version: string): string {
  return version.startsWith("v") ? version : `v${version}`;
}

// Format file sizes
export function formatFileSize(bytes: number): string {
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

// Format dates
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
```

## ⚙️ Configuration Reference

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f9fafb",
          500: "#6b7280",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
```

### ESLint Configuration

```typescript
// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "error",
      "prefer-const": "error",
    },
  },
];

export default eslintConfig;
```

## 🔍 Usage Examples

### Complete Component Implementation

```typescript
// Example: Custom form component using the API
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Alert, AlertDescription } from '@/components/ui/Alert';

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      await onSubmit(formData);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card variant="outlined" className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>

      <CardContent>
        {error && (
          <Alert variant="error" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert variant="success" className="mb-4">
            <AlertDescription>
              Thank you! Your message has been sent.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input-base"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-base"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="input-base"
            />
          </div>
        </form>
      </CardContent>

      <CardFooter>
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || success}
          className="w-full"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </CardFooter>
    </Card>
  );
}
```

## 📚 Best Practices

### Component Design

1. **Composition over Configuration**

   ```typescript
   // ✅ Good: Composable components
   <Card>
     <CardHeader>
       <CardTitle>Title</CardTitle>
     </CardHeader>
     <CardContent>Content</CardContent>
   </Card>

   // ❌ Avoid: Too many props
   <Card title="Title" content="Content" showHeader={true} />
   ```

2. **Prop Interface Design**

   ```typescript
   // ✅ Good: Extend HTML attributes
   interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: "primary" | "secondary";
   }

   // ✅ Good: Use union types for variants
   type Variant = "primary" | "secondary" | "outline";
   ```

3. **TypeScript Best Practices**

   ```typescript
   // ✅ Use proper generic constraints
   interface ComponentProps<T extends React.ElementType = "div"> {
     as?: T;
   }

   // ✅ Use conditional types when needed
   type ConditionalProps<T> = T extends "button"
     ? React.ButtonHTMLAttributes<HTMLButtonElement>
     : React.HTMLAttributes<HTMLDivElement>;
   ```

### Performance Optimization

1. **Memoization**

   ```typescript
   // ✅ Memoize expensive computations
   const expensiveValue = useMemo(() => computeExpensiveValue(props.data), [props.data]);

   // ✅ Memoize callback functions
   const handleClick = useCallback(() => {
     onAction?.(item.id);
   }, [onAction, item.id]);
   ```

2. **Component Splitting**
   ```typescript
   // ✅ Split complex components
   const ComplexComponent = () => (
     <div>
       <Header />
       <MainContent />
       <Footer />
     </div>
   );
   ```

## 🔧 Development Tools

### VS Code Snippets

Add these snippets to `.vscode/snippets.json`:

```json
{
  "React Component": {
    "prefix": "comp",
    "body": [
      "interface ${1:Component}Props {",
      "  ${2:// Props here}",
      "}",
      "",
      "export function ${1:Component}({ ${3:} }: ${1:Component}Props) {",
      "  return (",
      "    <div>",
      "      ${4:// Content here}",
      "    </div>",
      "  );",
      "}"
    ]
  }
}
```

### TypeScript Utility Types

```typescript
// Common utility types for components
type PropsWithChildren<P = {}> = P & {
  children?: React.ReactNode;
};

type PropsWithClassName<P = {}> = P & {
  className?: string;
};

type VariantProps<T extends Record<string, any>> = {
  [K in keyof T]?: keyof T[K] | null | undefined;
};
```

---

**Last Updated**: July 1, 2025  
**API Version**: 1.0.0  
**Maintained by**: AI Development Team

This API reference is automatically generated and maintained. For the most current information, refer to the component source code and TypeScript definitions.
