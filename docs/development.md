# Development Guide

Simple development guide for the Autonomous Website project.

## Quick Start

### Required Tools

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher
- **VS Code** with GitHub Copilot (recommended)

### Setup

```bash
git clone https://github.com/grassfieldk/autonomous-website.git
cd autonomous-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── ui/                 # Base UI components
│   └── FeatureCard.tsx     # Feature components
└── lib/                    # Utilities
```

import { Button } from "@/components/ui";
import { FeatureCard } from "@/components";

// 4. Relative imports
import "./styles.css";

````

## Development Workflow

### Code Standards

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use Tailwind CSS for styling
- Write clear, descriptive commit messages

### Basic Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Check code quality
npm run format       # Format code

# Git workflow
git checkout -b feature/your-feature
# Make changes
git add .
git commit -m "feat: add your feature"
git push origin feature/your-feature
````

## AI-Driven Development

This project leverages GitHub Copilot for code generation:

- Keep related files open for better context
- Write clear comments describing what you want
- Use descriptive variable and function names
- Review AI suggestions before accepting

## Testing & Performance

### Testing Philosophy

- AI-generated code reduces the need for extensive unit testing
- Focus on integration testing for critical user flows
- Use TypeScript for compile-time error checking

### Performance Basics

- Use Next.js Image component for images
- Implement proper loading states
- Optimize bundle size with dynamic imports when needed

```typescript
// Dynamic import for heavy components
const HeavyComponent = lazy(() => import("./HeavyComponent"));
```

1. **TypeScript Usage**
   - All components must be fully typed
   - Avoid `any` type usage
   - Use strict TypeScript configuration

## Common Issues

### Build Errors

- Run `npm run lint` to check for code issues
- Ensure all imports are correct
- Check TypeScript errors with `tsc --noEmit`

### Styling Issues

- Verify Tailwind classes are spelled correctly
- Check if custom CSS is conflicting
- Use browser dev tools to inspect elements

### Performance

- Use Next.js Image component for images
- Implement loading states for slow operations
- Use dynamic imports for large components

For more detailed component documentation, see [components.md](./components.md).
For deployment instructions, see [deployment.md](./deployment.md).
