# Contributing to Autonomous Website

Thank you for your interest in contributing to the Autonomous Website project! This guide will help you get started with contributing to this AI-first development project.

## Project Philosophy

This project uses an AI-first approach to web development where AI (primarily GitHub Copilot) handles the majority of code generation, documentation, and maintenance tasks. Contributors should understand and work with this AI-first methodology.

### Core Principles

1. **AI-First Development**: Leverage AI tools for code generation and problem-solving
2. **Type Safety**: Maintain strict TypeScript usage throughout the codebase
3. **Component-Driven**: Build reusable, well-documented components
4. **Quality Automation**: Use automated tools for code quality and formatting
5. **Documentation**: Maintain clear, up-to-date documentation

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher
- **Git** with proper configuration
- **VS Code** with recommended extensions
- **GitHub Copilot** access (recommended but not required)

### Development Setup

1. **Fork and Clone**

   ```bash
   git clone https://github.com/your-username/autonomous-website.git
   cd autonomous-website
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment**

   ```bash
   cp .env.example .env.local  # If applicable
   ```

4. **Start Development Server**

   ```bash
   npm run dev
   ```

5. **Verify Setup**
   - Open [http://localhost:3000](http://localhost:3000)
   - Run `npm run lint` to check code quality
   - Run `npm run format` to test formatting

## Contribution Workflow

### 1. Issue Creation

Before starting work, create or find an existing issue:

- **Bug Reports**: Use the bug report template
- **Feature Requests**: Use the feature request template
- **Documentation**: Use the documentation template

### 2. Branch Strategy

Create a new branch for your work:

```bash
# Create and switch to new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description

# Or for documentation
git checkout -b docs/documentation-update
```

### Branch Naming Conventions

| Type          | Format                 | Example                              |
| ------------- | ---------------------- | ------------------------------------ |
| Feature       | `feature/description`  | `feature/add-user-authentication`    |
| Bug Fix       | `fix/description`      | `fix/button-alignment-issue`         |
| Documentation | `docs/description`     | `docs/update-api-reference`          |
| Performance   | `perf/description`     | `perf/optimize-image-loading`        |
| Refactor      | `refactor/description` | `refactor/simplify-state-management` |

### 3. Development Process

#### Code Standards

Follow these coding standards:

1. **TypeScript First**

   ```typescript
   // Good: Proper typing
   interface UserProps {
     id: string;
     name: string;
     email?: string;
   }

   function UserCard({ id, name, email }: UserProps) {
     // Implementation
   }

   // Avoid: Any types
   function UserCard(props: any) {
     // Implementation
   }
   ```

2. **Component Documentation**

   ```typescript
   /**
    * UserCard component for displaying user information
    *
    * @param id - Unique user identifier
    * @param name - User's display name
    * @param email - Optional user email
    */
   export function UserCard({ id, name, email }: UserProps) {
     // Implementation
   }
   ```

3. **Import Organization**

   ```typescript
   // 1. React and Next.js
   import React from "react";
   import Link from "next/link";

   // 2. Third-party libraries
   import clsx from "clsx";

   // 3. Internal components (absolute paths)
   import { Button } from "@/components/ui";

   // 4. Relative imports
   import "./UserCard.css";
   ```

#### Testing Requirements

All contributions should include appropriate tests:

```typescript
// Component tests
import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';

describe('UserCard', () => {
  const mockProps = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com'
  };

  it('renders user information correctly', () => {
    render(<UserCard {...mockProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('handles missing email gracefully', () => {
    render(<UserCard id="1" name="Jane Doe" />);

    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.queryByText('@')).not.toBeInTheDocument();
  });
});
```

### 4. Commit Standards

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Commit Types

| Type       | Usage            | Example                                     |
| ---------- | ---------------- | ------------------------------------------- |
| `feat`     | New feature      | `feat(ui): Add dark mode toggle`            |
| `fix`      | Bug fix          | `fix(auth): Resolve login validation issue` |
| `docs`     | Documentation    | `docs(readme): Update installation guide`   |
| `style`    | Code style       | `style(format): Apply Prettier formatting`  |
| `refactor` | Code refactoring | `refactor(api): Simplify data fetching`     |
| `test`     | Testing          | `test(ui): Add Button component tests`      |
| `chore`    | Maintenance      | `chore(deps): Update dependencies`          |

#### Examples

```bash
# Good commits
git commit -m "feat(ui): Add responsive navigation component"
git commit -m "fix(layout): Resolve mobile overflow issue"
git commit -m "docs(api): Add authentication endpoints documentation"

# Detailed commit with body
git commit -m "feat(auth): Implement user authentication

- Add login and registration forms
- Integrate with JWT token system
- Add protected route middleware
- Include proper error handling

Closes #123"
```

### 5. Pull Request Process

#### Before Submitting

Ensure your changes pass all checks:

```bash
# Run all checks
npm run lint        # ESLint checks
npm run format      # Prettier formatting
npm run build       # Production build
npm run test        # Unit tests
```

#### PR Template

Use this template for your pull request:

```markdown
## Description

Brief description of the changes and their purpose.

## Type of Change

- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that causes existing functionality to not work as expected)
- [ ] Documentation update

## Testing

- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] I have tested the changes in different browsers/devices

## Screenshots (if applicable)

Include screenshots or GIFs demonstrating the changes.

## Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
```

## Contribution Areas

### Priority Areas

1. **UI Components**
   - Enhance existing components
   - Add new reusable components
   - Improve accessibility features

2. **Documentation**
   - API documentation
   - Tutorial content
   - Code examples

3. **Testing**
   - Unit tests for components
   - Integration tests
   - Visual regression tests

4. **Performance**
   - Bundle size optimization
   - Runtime performance improvements
   - SEO enhancements

### Beginner-Friendly Issues

Look for issues labeled with:

- `good first issue`
- `help wanted`
- `documentation`
- `enhancement`

## Development Tools

### Required VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "github.copilot"
  ]
}
```

### Helpful Scripts

| Script               | Purpose                  |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Production build         |
| `npm run lint`       | Run ESLint               |
| `npm run lint:fix`   | Fix ESLint issues        |
| `npm run format`     | Format with Prettier     |
| `npm run test`       | Run tests                |
| `npm run test:watch` | Run tests in watch mode  |

## AI Development Guidelines

### Using GitHub Copilot

When using GitHub Copilot for contributions:

1. **Provide Context**
   - Keep related files open
   - Write descriptive comments
   - Use meaningful variable names

2. **Review AI Suggestions**
   - Always review generated code
   - Ensure type safety
   - Verify accessibility compliance

3. **Iterative Development**
   - Break complex features into smaller functions
   - Use clear, specific prompts
   - Test thoroughly

### Example AI-Assisted Development

```typescript
// Provide clear context for AI
/**
 * Creates a responsive card component for displaying user profiles
 * Should include avatar, name, role, and contact information
 * Must be accessible and mobile-friendly
 */
function UserProfileCard(props: UserProfileProps) {
  // AI will provide implementation based on context
}
```

## Documentation Guidelines

### Component Documentation

Document all components thoroughly:

````typescript
/**
 * Button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">
 *   Click me
 * </Button>
 * ```
 *
 * @param variant - Visual style variant
 * @param size - Button size
 * @param children - Button content
 * @param onClick - Click handler
 */
export function Button({ variant, size, children, onClick }: ButtonProps) {
  // Implementation
}
````

### README Updates

When adding new features, update relevant documentation:

- Component usage examples
- API references
- Installation instructions
- Configuration guides

## Bug Reports

### Bug Report Template

When reporting bugs, include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Numbered steps to reproduce
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, Node.js version
6. **Screenshots**: Visual evidence if applicable

### Example Bug Report

```markdown
## Bug Description

Button component doesn't respond to clicks on mobile devices.

## Steps to Reproduce

1. Open the application on a mobile device
2. Navigate to the homepage
3. Tap the "Get Started" button
4. Observe that nothing happens

## Expected Behavior

Button should respond to tap and navigate to the next page.

## Actual Behavior

Button appears unresponsive to touch events.

## Environment

- Device: iPhone 12
- Browser: Safari 15.6
- OS: iOS 15.6
```

## Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Contributor wall
- Special mentions in documentation

## Getting Help

If you need help with contributing:

1. **Check Documentation**: Review existing docs first
2. **Search Issues**: Look for similar questions
3. **Create Discussion**: Use GitHub Discussions for questions
4. **Contact Maintainers**: Reach out to project maintainers

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). By participating, you agree to uphold this code.

Thank you for contributing to the Autonomous Website project! Your contributions help advance the future of AI-driven web development.
