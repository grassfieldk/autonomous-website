# Development Guide

This guide provides comprehensive instructions for developing the Autonomous Website project.

## 🛠️ Development Environment Setup

### Required Tools

| Tool        | Version  | Purpose            |
| ----------- | -------- | ------------------ |
| **Node.js** | ≥18.17.0 | JavaScript runtime |
| **npm**     | ≥9.0.0   | Package manager    |
| **Git**     | Latest   | Version control    |
| **VS Code** | Latest   | Recommended IDE    |

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "github.copilot",
    "github.copilot-chat"
  ]
}
```

### Environment Configuration

1. **Clone and Setup**

   ```bash
   git clone https://github.com/your-username/autonomous-website.git
   cd autonomous-website
   npm install
   ```

2. **Configure VS Code Settings**
   ```json
   {
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "tailwindCSS.experimental.classRegex": ["className\\s*=\\s*[\"']([^\"']*)[\"']"]
   }
   ```

## 🏗️ Project Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage component
│   ├── globals.css         # Global styles and design system
│   └── [feature]/          # Feature-based routing
├── components/             # Reusable components
│   ├── ui/                 # Base UI components
│   │   ├── Button.tsx      # Button component with variants
│   │   ├── Card.tsx        # Card layout components
│   │   ├── Badge.tsx       # Badge component
│   │   ├── Alert.tsx       # Alert component
│   │   └── index.ts        # Barrel exports
│   ├── [feature]/          # Feature-specific components
│   └── index.ts            # Main component exports
├── lib/                    # Utility functions and configurations
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── styles/                 # Additional stylesheets
```

### Design Principles

1. **Component-First Architecture**
   - All UI elements are built as reusable components
   - Components follow atomic design principles
   - Props are fully typed with TypeScript

2. **File Naming Conventions**
   - Components: `PascalCase.tsx`
   - Utilities: `camelCase.ts`
   - Constants: `SCREAMING_SNAKE_CASE.ts`

3. **Import Organization**

   ```typescript
   // 1. React and Next.js imports
   import React from "react";
   import Link from "next/link";

   // 2. Third-party libraries
   import clsx from "clsx";

   // 3. Internal imports (absolute paths)
   import { Button } from "@/components/ui";
   import { FeatureCard } from "@/components";

   // 4. Relative imports
   import "./styles.css";
   ```

## 🎨 Design System

### Color System

The project uses a semantic color system built on CSS custom properties:

```css
:root {
  /* Light theme */
  --background: #ffffff;
  --foreground: #171717;
  --primary: #0070f3;
  --primary-hover: #0056b3;
  --border: #e5e7eb;
  --muted: #f3f4f6;
  --muted-foreground: #6b7280;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark theme */
    --background: #0a0a0a;
    --foreground: #ededed;
    --primary: #0ea5e9;
    --border: #374151;
    --muted: #1f2937;
  }
}
```

### Typography Scale

```css
/* Headings */
h1 {
  @apply text-4xl font-semibold md:text-5xl;
}
h2 {
  @apply text-3xl font-semibold md:text-4xl;
}
h3 {
  @apply text-2xl font-semibold md:text-3xl;
}

/* Body text */
p {
  @apply text-base leading-relaxed;
}
small {
  @apply text-muted-foreground text-sm;
}
```

### Component Variants

Components use a consistent variant system:

```typescript
// Button variants
type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'default' | 'lg';

// Usage
<Button variant="primary" size="lg">Click me</Button>
```

## 🔧 Development Workflow

### Branch Strategy

- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/\***: Feature development branches
- **hotfix/\***: Critical bug fixes

### Commit Standards

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/modifications
- `chore`: Build process or auxiliary tool changes

**Examples:**

```
feat(ui): Add new Button component with variants
fix(layout): Resolve mobile navigation overflow issue
docs(readme): Update installation instructions
```

### Code Quality Standards

1. **TypeScript Usage**
   - All components must be fully typed
   - Avoid `any` type usage
   - Use strict TypeScript configuration

2. **Component Standards**

   ```typescript
   // Good: Proper typing and JSDoc
   interface ButtonProps {
     variant?: 'primary' | 'secondary';
     size?: 'sm' | 'md' | 'lg';
     children: React.ReactNode;
     onClick?: () => void;
   }

   /**
    * Button component with multiple variants and sizes
    */
   export function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
     return (
       <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
         {children}
       </button>
     );
   }
   ```

3. **CSS/Tailwind Best Practices**
   - Use semantic class names in globals.css
   - Prefer Tailwind utilities over custom CSS
   - Use CSS custom properties for theming

## 🧪 Testing Strategy

### Unit Testing

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Component Testing

```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });
});
```

## 🚀 Build and Deployment

### Build Process

```bash
# Development build
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

### Performance Optimization

1. **Bundle Analysis**

   ```bash
   npm run build:analyze
   ```

2. **Image Optimization**
   - Use Next.js Image component
   - Implement proper alt texts
   - Use WebP format when possible

3. **Code Splitting**
   - Implement dynamic imports for heavy components
   - Use React.lazy for route-level splitting

## 🔍 Debugging

### Common Issues

1. **Hydration Mismatches**
   - Ensure server and client render identically
   - Check for browser-only APIs in SSR

2. **Tailwind Classes Not Applied**
   - Verify class names in content configuration
   - Check for dynamic class generation

3. **TypeScript Errors**
   - Run `tsc --noEmit` for type checking
   - Use strict mode for better error detection

### Development Tools

- **React Developer Tools**: Component inspection
- **Tailwind CSS IntelliSense**: Class autocomplete
- **ESLint**: Code quality analysis
- **Prettier**: Code formatting

## 📝 Documentation Standards

### Component Documentation

Every component should include:

1. **JSDoc Comments**
2. **Usage Examples**
3. **Props Interface**
4. **Storybook Stories** (when applicable)

### Code Comments

```typescript
/**
 * Calculates the total price including tax
 * @param basePrice - The base price before tax
 * @param taxRate - The tax rate as a decimal (e.g., 0.08 for 8%)
 * @returns The total price including tax
 */
function calculateTotalPrice(basePrice: number, taxRate: number): number {
  return basePrice * (1 + taxRate);
}
```

## 🤖 AI Development Integration

### GitHub Copilot Best Practices

1. **Context Provision**
   - Keep related files open for better suggestions
   - Use descriptive variable and function names
   - Write clear JSDoc comments

2. **Code Review**
   - Always review AI-generated code
   - Test thoroughly before committing
   - Ensure code follows project standards

3. **Prompt Engineering**
   - Be specific in comments and function names
   - Provide examples when requesting complex logic
   - Break down complex tasks into smaller functions

This development guide ensures consistent, high-quality code while leveraging AI assistance effectively.
