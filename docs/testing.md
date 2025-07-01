# Testing Guide

Testing strategies and best practices for the Autonomous Website project.

## Testing Philosophy

Our testing approach follows the **AI-First Testing Pyramid**, where automated testing works with AI-generated code:

```
    ▲ E2E Tests (AI-Generated Scenarios)
   ▲▲ Integration Tests (Component Interaction)
  ▲▲▲ Unit Tests (Component Logic)
 ▲▲▲▲ Static Analysis (TypeScript + ESLint)
```

### Core Principles

1. **Type Safety First**: TypeScript provides the foundation layer of testing
2. **Component-Driven Testing**: Each component is independently testable
3. **AI-Generated Test Cases**: Use AI to generate test scenarios
4. **Performance Testing**: Ensure performance across devices
5. **Accessibility Testing**: Maintain WCAG 2.1 compliance

## Testing Stack

| Category            | Tool                  | Purpose                     | Status  |
| ------------------- | --------------------- | --------------------------- | ------- |
| **Test Runner**     | Vitest                | Fast unit testing           | Planned |
| **Testing Library** | React Testing Library | Component testing utilities | Planned |
| **E2E Testing**     | Playwright            | Cross-browser automation    | Planned |
| **Visual Testing**  | Storybook             | Component visual regression | Planned |
| **Performance**     | Lighthouse CI         | Performance monitoring      | Planned |
| **Accessibility**   | axe-core              | Accessibility compliance    | Planned |

## Test Organization

```
src/
├── __tests__/              # Global test utilities
│   ├── setup.ts           # Test environment setup
│   ├── mocks/             # Mock data and functions
│   └── utils.tsx          # Testing utilities
├── components/
│   ├── ui/
│   │   ├── Button.test.tsx    # Unit tests
│   │   ├── Button.stories.tsx # Storybook stories
│   │   └── Button.tsx         # Component
│   └── __tests__/         # Integration tests
tests/
├── e2e/                   # End-to-end tests
│   ├── homepage.spec.ts   # Page-level tests
│   └── user-flows.spec.ts # User journey tests
└── performance/           # Performance tests
    └── lighthouse.spec.ts # Lighthouse audits
```

## 🧪 Unit Testing

### Component Testing Pattern

```typescript
// Example: Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles correctly', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Testing Utilities

```typescript
// src/__tests__/utils.tsx
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

// Custom render function with providers
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  return render(ui, {
    // Add any providers here if needed
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
```

## 🔗 Integration Testing

Integration tests verify that components work together correctly:

```typescript
// components/__tests__/FeatureSection.test.tsx
import { render, screen } from '@testing-library/react';
import { FeatureSection } from '../FeatureSection';

describe('FeatureSection Integration', () => {
  it('renders all feature cards with correct data', () => {
    const features = [
      { title: 'Feature 1', description: 'Description 1' },
      { title: 'Feature 2', description: 'Description 2' },
    ];

    render(<FeatureSection features={features} />);

    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
  });
});
```

## 🌐 End-to-End Testing

### Page-Level Testing

```typescript
// tests/e2e/homepage.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads successfully with all key elements", async ({ page }) => {
    await page.goto("/");

    // Check main heading
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Check navigation
    await expect(page.getByRole("navigation")).toBeVisible();

    // Check feature cards
    await expect(page.locator('[data-testid="feature-card"]')).toHaveCount(3);
  });

  test("style guide page displays all components", async ({ page }) => {
    await page.goto("/style-guide");

    // Check component sections
    await expect(page.getByText("Typography")).toBeVisible();
    await expect(page.getByText("Buttons")).toBeVisible();
    await expect(page.getByText("Cards")).toBeVisible();
  });
});
```

### User Flow Testing

```typescript
// tests/e2e/user-flows.spec.ts
import { test, expect } from "@playwright/test";

test.describe("User Flows", () => {
  test("navigation between pages works correctly", async ({ page }) => {
    await page.goto("/");

    // Navigate to style guide
    await page.click("text=Style Guide");
    await expect(page).toHaveURL("/style-guide");

    // Check breadcrumb navigation
    await page.click("text=Home");
    await expect(page).toHaveURL("/");
  });
});
```

## Visual Testing with Storybook

### Story Definition

```typescript
// components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Versatile button component with multiple variants and states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
```

## Performance Testing

### Lighthouse CI Configuration

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./out",
      url: ["http://localhost:3000/", "http://localhost:3000/style-guide"],
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
```

### Performance Test Example

```typescript
// tests/performance/lighthouse.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Performance Tests", () => {
  test("homepage meets performance benchmarks", async ({ page }) => {
    await page.goto("/");

    // Measure Core Web Vitals
    const vitals = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals = {};

          entries.forEach((entry) => {
            if (entry.entryType === "largest-contentful-paint") {
              vitals.lcp = entry.startTime;
            }
          });

          resolve(vitals);
        }).observe({ entryTypes: ["largest-contentful-paint"] });
      });
    });

    // Assert performance metrics
    expect(vitals.lcp).toBeLessThan(2500); // LCP < 2.5s
  });
});
```

## ♿ Accessibility Testing

### Automated Accessibility Tests

```typescript
// tests/accessibility/a11y.spec.ts
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Tests", () => {
  test("homepage has no accessibility violations", async ({ page }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("style guide page is accessible", async ({ page }) => {
    await page.goto("/style-guide");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('[data-testid="skip-accessibility"]')
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
```

## AI-Generated Testing

### Test Generation Prompts

Use these prompts with GitHub Copilot to generate tests:

1. **Component Tests**:

   ```
   Generate unit tests for [ComponentName] including:
   - Props validation
   - Event handling
   - Edge cases
   - Accessibility requirements
   ```

2. **Integration Tests**:

   ```
   Create integration tests for [FeatureName] that verify:
   - Component interactions
   - Data flow
   - Error handling
   - User workflows
   ```

3. **E2E Tests**:
   ```
   Write end-to-end tests for [PageName] covering:
   - Critical user paths
   - Form submissions
   - Navigation flows
   - Performance checks
   ```

## 📊 Test Coverage

### Coverage Targets

| Category       | Target | Current | Status  |
| -------------- | ------ | ------- | ------- |
| **Statements** | 90%    | TBD     | Planned |
| **Branches**   | 85%    | TBD     | Planned |
| **Functions**  | 95%    | TBD     | Planned |
| **Lines**      | 90%    | TBD     | Planned |

### Coverage Configuration

```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/__tests__/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/__tests__/", "**/*.stories.tsx", "**/*.config.*"],
      thresholds: {
        global: {
          statements: 90,
          branches: 85,
          functions: 95,
          lines: 90,
        },
      },
    },
  },
});
```

## Test Setup & Installation

### 1. Install Testing Dependencies

```bash
# Core testing framework
npm install -D vitest @vitest/ui jsdom

# React testing utilities
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event

# E2E testing
npm install -D playwright @playwright/test

# Visual testing
npm install -D @storybook/react @storybook/react-vite

# Accessibility testing
npm install -D @axe-core/playwright

# Performance testing
npm install -D @lhci/cli
```

### 2. Update package.json Scripts

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "lighthouse": "lhci autorun"
  }
}
```

### 3. Test Environment Setup

```typescript
// src/__tests__/setup.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
}));
```

## Continuous Testing

### GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - run: npm ci
      - run: npm run test:run
      - run: npm run test:e2e
      - run: npm run lighthouse

      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## Testing Best Practices

### 1. Test Naming Convention

```typescript
// ✅ Good: Descriptive test names
describe("Button Component", () => {
  it("renders primary variant with correct styles", () => {});
  it("handles click events when enabled", () => {});
  it("shows loading state during async operations", () => {});
});

// ❌ Bad: Vague test names
describe("Button", () => {
  it("works", () => {});
  it("handles clicks", () => {});
});
```

### 2. Test Data Management

```typescript
// Create reusable test data
const mockUser = {
  id: "1",
  name: "Test User",
  email: "test@example.com",
};

const mockFeatures = [
  { id: "1", title: "Feature 1", description: "Description 1" },
  { id: "2", title: "Feature 2", description: "Description 2" },
];
```

### 3. Async Testing

```typescript
// ✅ Proper async testing
test('loads user data on mount', async () => {
  render(<UserProfile userId="1" />);

  await waitFor(() => {
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });
});
```

## Testing Roadmap

### Phase 1: Foundation (Planned)

- [ ] Set up Vitest and React Testing Library
- [ ] Create testing utilities and setup files
- [ ] Add unit tests for all UI components
- [ ] Configure coverage reporting

### Phase 2: Integration (Planned)

- [ ] Add integration tests for page components
- [ ] Set up Storybook for visual testing
- [ ] Implement accessibility testing
- [ ] Add performance benchmarks

### Phase 3: Automation (Planned)

- [ ] Set up E2E testing with Playwright
- [ ] Configure CI/CD pipeline
- [ ] Add visual regression testing
- [ ] Implement test generation with AI

---

**Last Updated**: July 1, 2025
**Maintained by**: AI Development Team
**Next Review**: Quarterly

This testing guide ensures proper coverage while maintaining the AI-first development philosophy of the project.
