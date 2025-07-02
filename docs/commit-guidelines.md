# Commit Guidelines

Guide for maintaining clean, meaningful commit history in the Autonomous Website project.

## Overview

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification to maintain a clean, automated, and meaningful commit history. Well-structured commits enable automated changelog generation, version bumping, and clear project history.

## Commit Message Format

Each commit message consists of a **header**, **body**, and **footer**:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Header Structure

The header is **mandatory** and follows this format:

```
<type>(<scope>): <description>
```

#### Examples

```
feat(ui): Add responsive navigation component
fix(auth): Resolve token validation issue
docs(readme): Update installation instructions
style(format): Apply Prettier formatting to components
refactor(api): Simplify data fetching logic
test(ui): Add Button component tests
chore(deps): Update Next.js to version 15.3.4
```

## Commit Types

| Type         | Usage            | Description                                               |
| ------------ | ---------------- | --------------------------------------------------------- |
| **feat**     | New Feature      | Introduces a new feature to the codebase                  |
| **fix**      | Bug Fix          | Fixes a bug or issue                                      |
| **docs**     | Documentation    | Documentation only changes                                |
| **style**    | Code Style       | Changes that don't affect code meaning (formatting, etc.) |
| **refactor** | Code Refactoring | Code changes that neither fix bugs nor add features       |
| **perf**     | Performance      | Code changes that improve performance                     |
| **test**     | Testing          | Adding missing tests or correcting existing tests         |
| **build**    | Build System     | Changes affecting build system or dependencies            |
| **ci**       | CI/CD            | Changes to CI configuration files and scripts             |
| **chore**    | Maintenance      | Other changes that don't modify src or test files         |
| **revert**   | Revert           | Reverts a previous commit                                 |

## Scope Guidelines

The scope specifies the area of the codebase affected by the change:

### Common Scopes

| Scope      | Usage                            | Examples                                  |
| ---------- | -------------------------------- | ----------------------------------------- |
| **ui**     | UI components and design system  | `feat(ui): Add Button component variants` |
| **auth**   | Authentication and authorization | `fix(auth): Resolve login validation`     |
| **api**    | API routes and data fetching     | `refactor(api): Simplify user endpoints`  |
| **layout** | Page layouts and structure       | `fix(layout): Resolve mobile overflow`    |
| **style**  | Styling and CSS changes          | `style(style): Update color variables`    |
| **docs**   | Documentation changes            | `docs(docs): Add component usage guide`   |
| **config** | Configuration files              | `chore(config): Update ESLint rules`      |
| **deps**   | Dependencies                     | `chore(deps): Update React to v19`        |
| **ci**     | CI/CD configuration              | `ci(ci): Add automated testing workflow`  |

### Scope Rules

- Use **lowercase** for scopes
- Keep scopes **short and descriptive**
- Use **existing scopes** when possible
- Omit scope if change affects multiple areas

## Description Guidelines

The description provides a concise summary of the change:

### Rules

1. **Use imperative mood**: "Add feature" not "Added feature"
2. **No capitalization**: Start with lowercase letter
3. **No period**: Don't end with a period
4. **Maximum 72 characters**: Keep it concise
5. **Be specific**: Clearly describe what changed

### Good Examples

```
add user authentication middleware
fix responsive layout on mobile devices
update component prop types for better type safety
remove deprecated API endpoints
```

### Bad Examples

```
Added new stuff
Fix bugs
Updated things.
WIP: working on authentication feature
```

## Body Guidelines

The body provides additional context and motivation for the change:

### When to Include Body

- **Complex changes** requiring explanation
- **Breaking changes** with migration instructions
- **Performance improvements** with metrics
- **Bug fixes** with reproduction steps

### Body Format

- Separate from header with **blank line**
- Use **imperative mood**
- Explain **what and why**, not how
- Keep lines **under 72 characters**

### Example with Body

```
feat(ui): Add Button component system

Implement a flexible Button component with multiple variants,
sizes, and states to replace inconsistent button usage across
the application.

Features:
- Primary, secondary, destructive, outline, and ghost variants
- Small, default, and large sizes
- Disabled and loading states
- Full TypeScript support with proper prop interfaces
- Accessibility compliance with ARIA attributes

This change improves UI consistency and reduces code duplication
while providing a better developer experience.
```

## Footer Guidelines

The footer contains metadata about the commit:

### Common Footer Types

#### Breaking Changes

```
feat(api): Update user authentication endpoints

BREAKING CHANGE: Authentication endpoints now require API key
in header. Update your API calls to include 'X-API-Key' header.

Migration guide: https://docs.example.com/migration
```

#### Issue References

```
fix(ui): Resolve button alignment issue

Fixes #123
Closes #456
Resolves #789
```

#### Co-authored Commits

```
feat(ui): Add dark mode support

Co-authored-by: AI Assistant <ai@example.com>
Co-authored-by: Developer <dev@example.com>
```

## Practical Examples

### Feature Addition

```
feat(ui): Add responsive navigation component

Implement a mobile-first navigation component with hamburger
menu, smooth animations, and accessibility support.

Features:
- Responsive design for mobile, tablet, and desktop
- Smooth slide animations using CSS transitions
- Keyboard navigation support
- Screen reader compatibility
- Dark mode support

Closes #45
```

### Bug Fix

```
fix(layout): Resolve mobile overflow issue

Fix horizontal scrolling on mobile devices caused by
fixed-width elements in the hero section.

The issue occurred when content exceeded viewport width
on screens smaller than 640px, causing horizontal scrollbar
and poor user experience.

Fixes #78
```

### Documentation Update

```
docs(readme): Add installation guide

- Add prerequisite requirements (Node.js, npm versions)
- Include step-by-step installation instructions
- Add troubleshooting section for common issues
- Update screenshots with current UI
```

### Refactoring

```
refactor(ui): Simplify Button component implementation

Reduce component complexity by consolidating variant logic
and removing duplicate code. This change improves
maintainability without affecting public API.

- Combine size and variant class generation
- Extract common styles to shared utility
- Simplify TypeScript interfaces
- Maintain full backward compatibility
```

### Performance Improvement

```
perf(ui): Optimize image loading performance

Implement lazy loading and WebP format support for images,
reducing initial page load time by 40%.

- Add intersection observer for lazy loading
- Convert images to WebP format with PNG fallback
- Implement responsive image sizing
- Add proper alt text for accessibility

Benchmark results:
- First Contentful Paint: 2.1s → 1.3s
- Largest Contentful Paint: 3.2s → 1.9s
```

## Tools and Automation

### Git Hooks

The project uses Husky for automated commit validation:

```bash
# Pre-commit hook runs:
npm run lint          # ESLint checks
npm run format        # Prettier formatting
npm run test          # Unit tests
```

### Commit Linting

Commitlint ensures commit messages follow conventions:

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert"
      ]
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-max-length": [2, "always", 72]
  }
}
```

### IDE Integration

Configure your IDE for better commit experience:

#### VS Code Settings

```json
{
  "git.inputValidationLength": 72,
  "git.inputValidationSubjectLength": 72,
  "git.verboseCommit": true
}
```

#### Git Aliases

```bash
# Add helpful git aliases
git config --global alias.c "commit"
git config --global alias.cm "commit -m"
git config --global alias.ca "commit --amend"
```

## Changelog Generation

Well-structured commits enable automated changelog generation:

### Example Changelog

```markdown
# Changelog

## [1.2.0] - 2025-07-01

### Features

- **ui**: Add responsive navigation component (#45)
- **auth**: Implement user authentication system (#52)

### Bug Fixes

- **layout**: Resolve mobile overflow issue (#78)
- **ui**: Fix button alignment on small screens (#83)

### Documentation

- **readme**: Add installation guide
- **components**: Update component usage examples

### Performance

- **ui**: Optimize image loading performance
```

## Best Practices Summary

### Do

- Use conventional commit format
- Write clear, descriptive commit messages
- Include context in commit body when needed
- Reference issues and pull requests
- Keep commits focused and atomic
- Use imperative mood in descriptions

### Don't

- Mix multiple unrelated changes in one commit
- Use vague descriptions like "fix bugs" or "update code"
- Include breaking changes without proper documentation
- Commit commented-out or debugging code
- Use past tense in commit messages
- Exceed character limits

## Commit Review Checklist

Before committing, ensure:

- [ ] Commit message follows conventional format
- [ ] Description is clear and under 72 characters
- [ ] Scope is appropriate and consistent
- [ ] Body explains complex changes
- [ ] Breaking changes are documented
- [ ] Issues are referenced when applicable
- [ ] Code is properly tested and linted
- [ ] No sensitive information is included

## Getting Help

If you need help with commit guidelines:

1. **Review examples** in this document
2. **Check existing commits** for patterns
3. **Use git log** to see commit history
4. **Ask questions** in GitHub Discussions

Remember: Good commits make the codebase history a valuable resource for understanding project evolution and debugging issues.
