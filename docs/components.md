# Component Guide

Reference for all components in the Autonomous Website project.

## Overview

This project follows a component-driven architecture with a design system. All components are built with TypeScript for type safety and use Tailwind CSS for styling.

## Component Categories

### Base UI Components (`src/components/ui/`)

These are the foundational building blocks used throughout the application.

---

## Button

Button component with multiple variants and sizes.

### Import

```typescript
import { Button, LinkButton, ExternalLinkButton } from "@/components/ui";
```

### Props Interface

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}
```

### Variants

| Variant       | Usage                  | Appearance                  |
| ------------- | ---------------------- | --------------------------- |
| `primary`     | Main actions, CTAs     | Blue background, white text |
| `secondary`   | Secondary actions      | Gray background, dark text  |
| `destructive` | Delete, remove actions | Red background, white text  |
| `outline`     | Subtle actions         | Transparent bg, border      |
| `ghost`       | Minimal actions        | Transparent, hover effect   |

### Examples

```tsx
// Basic usage
<Button variant="primary" size="lg">
  Get Started
</Button>

// With click handler
<Button
  variant="destructive"
  onClick={() => handleDelete()}
  disabled={isLoading}
>
  Delete Item
</Button>

// Link button (internal navigation)
<LinkButton href="/about" variant="outline">
  Learn More
</LinkButton>

// External link button
<ExternalLinkButton
  href="https://github.com/grassfieldk/autonomous-website"
  variant="ghost"
>
  View on GitHub
</ExternalLinkButton>
```

---

## Card

Flexible card component for content organization.

### Import

```typescript
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui";
```

### Props Interfaces

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}
```

### Examples

```tsx
// Full card with all sections
<Card>
  <CardHeader
    title="Feature Title"
    description="Brief description of the feature"
  />
  <CardContent>
    <p>Main content goes here...</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Learn More</Button>
  </CardFooter>
</Card>

// Simple card
<Card>
  <CardContent>
    <h3>Simple Card</h3>
    <p>No header or footer needed.</p>
  </CardContent>
</Card>
```

---

## Badge

Small status indicators and labels.

### Import

```typescript
import { Badge } from "@/components/ui";
```

### Props Interface

```typescript
interface BadgeProps {
  variant?: "primary" | "secondary" | "destructive";
  children: React.ReactNode;
  className?: string;
}
```

### Examples

```tsx
// Technology badges
<Badge variant="primary">React</Badge>
<Badge variant="primary">TypeScript</Badge>
<Badge variant="secondary">Beta</Badge>

// Status badges
<Badge variant="destructive">Critical</Badge>
```

---

## Alert

Contextual feedback messages.

### Import

```typescript
import { Alert } from "@/components/ui";
```

### Props Interface

```typescript
interface AlertProps {
  variant?: "info" | "success" | "warning" | "error";
  children: React.ReactNode;
  className?: string;
}
```

### Examples

```tsx
// Information alert
<Alert variant="info">
  <strong>Info:</strong> This is an information message.
</Alert>

// Success message
<Alert variant="success">
  <strong>Success:</strong> Operation completed successfully!
</Alert>

// Error message
<Alert variant="error">
  <strong>Error:</strong> Something went wrong.
</Alert>
```

---

## Feature Components (`src/components/`)

### FeatureCard

Specialized card for showcasing features on the homepage.

#### Import

```typescript
import { FeatureCard } from "@/components";
```

#### Props Interface

```typescript
interface FeatureCardProps {
  title: string;
  description: string;
  content: string;
  className?: string;
}
```

#### Example

```tsx
<FeatureCard
  title="AI-Powered Development"
  description="Automated code generation"
  content="Our AI system handles everything from code writing to documentation generation, making development faster and more efficient."
/>
```

### TechBadgeList

Component for displaying lists of technology badges.

#### Import

```typescript
import { TechBadgeList } from "@/components";
```

#### Props Interface

```typescript
interface TechBadgeItem {
  name: string;
  variant?: "primary" | "secondary" | "destructive";
}

interface TechBadgeListProps {
  technologies: TechBadgeItem[];
  className?: string;
}
```

#### Example

```tsx
const technologies = [
  { name: "Next.js", variant: "primary" },
  { name: "TypeScript", variant: "primary" },
  { name: "Tailwind CSS", variant: "secondary" },
];

<TechBadgeList technologies={technologies} />;
```

---

## Styling Guidelines

### Component Styling

1. **Use Tailwind Classes**: Prefer Tailwind utilities over custom CSS
2. **Semantic Class Names**: Use meaningful class names for custom styles
3. **Responsive Design**: Always consider mobile-first approach
4. **Dark Mode**: Support dark mode using CSS custom properties

### CSS Custom Properties

Components use CSS custom properties defined in `globals.css`:

```css
:root {
  --color-primary: #0070f3;
  --color-background: #ffffff;
  --color-foreground: #171717;
  /* ... more variables */
}
```

### Example Component Styling

```tsx
// Good: Using design system classes
<button className="btn btn-primary">
  Click me
</button>

// Good: Combining with additional Tailwind classes
<Card className="shadow-lg hover:shadow-xl transition-shadow">
  <CardContent>Content</CardContent>
</Card>

// Avoid: Inline styles (use sparingly)
<div style={{ backgroundColor: '#ff0000' }}>
  Not recommended
</div>
```

---

## Component Development Best Practices

### 1. TypeScript First

Always define proper interfaces for props:

```typescript
// Good: Explicit interface
interface ComponentProps {
  title: string;
  isVisible?: boolean;
  onClick: () => void;
}

// Avoid: Any or implicit types
function Component(props: any) {
  /* ... */
}
```

### 2. Default Props

Use default parameters instead of defaultProps:

```typescript
// Good: Default parameters
function Button({ variant = "primary", size = "default", children }: ButtonProps) {
  // Component logic
}
```

### 3. JSDoc Documentation

Document all components with JSDoc:

```typescript
/**
 * Button component with multiple variants and sizes
 *
 * @param variant - The visual style variant
 * @param size - The size of the button
 * @param children - The button content
 * @param onClick - Click event handler
 */
export function Button({ variant, size, children, onClick }: ButtonProps) {
  // Implementation
}
```

### 4. Composition over Configuration

Design components to be composable:

```tsx
// Good: Composable design
<Card>
  <CardHeader title="Title" />
  <CardContent>
    <p>Flexible content</p>
  </CardContent>
</Card>

// Avoid: Too many props
<Card
  title="Title"
  content="Content"
  hasFooter={true}
  footerButtons={['Save', 'Cancel']}
/>
```

### 5. Accessibility

Ensure components are accessible:

```tsx
// Good: Proper ARIA attributes and semantic HTML
<button
  aria-label="Close dialog"
  onClick={onClose}
  className="btn btn-ghost"
>
  <CloseIcon aria-hidden="true" />
</button>

// Good: Semantic structure
<Card role="article" aria-labelledby="card-title">
  <CardHeader>
    <h3 id="card-title">Article Title</h3>
  </CardHeader>
</Card>
```

---

## Responsive Design

All components are designed to be responsive by default:

### Breakpoint System

```css
/* Mobile first approach */
.component {
  @apply text-sm; /* Base: mobile */
  @apply md:text-base; /* Tablet: 768px+ */
  @apply lg:text-lg; /* Desktop: 1024px+ */
  @apply xl:text-xl; /* Large: 1280px+ */
}
```

### Grid Layouts

```tsx
// Responsive grid example
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <FeatureCard key={item.id} {...item} />
  ))}
</div>
```

---

## Testing Components

### Unit Tests

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct variant class', () => {
    render(<Button variant="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Visual Testing

Consider using Storybook for component development and testing:

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    children: "Button",
  },
};
```

---

## Performance Considerations

### Bundle Size

- Use tree-shaking friendly exports
- Avoid importing entire libraries
- Use dynamic imports for heavy components

### Runtime Performance

- Memoize expensive calculations
- Use React.memo for pure components
- Implement proper key props for lists

```typescript
// Good: Memoized component
export const ExpensiveComponent = React.memo(function ExpensiveComponent({
  data
}: Props) {
  const processedData = useMemo(() =>
    expensiveCalculation(data),
    [data]
  );

  return <div>{processedData}</div>;
});
```

This component guide provides documentation for building and using components in the Autonomous Website project, ensuring consistency and maintainability across the codebase.
