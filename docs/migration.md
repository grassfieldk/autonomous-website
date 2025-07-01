# Migration Guide

Comprehensive guide for upgrading dependencies, migrating to new versions, and maintaining the Autonomous Website project.

## 🔄 Migration Philosophy

Our migration strategy is built on **AI-Assisted Incremental Updates** with automated compatibility checks:

```
    🚀 Major Version Updates (Breaking Changes)
   🚀🚀 Minor Version Updates (New Features)
  🚀🚀🚀 Patch Updates (Bug Fixes)
 🚀🚀🚀🚀 Security Updates (Immediate)
```

### Migration Principles

1. **Backward Compatibility**: Maintain compatibility during transitions
2. **Gradual Migration**: Implement changes incrementally
3. **Automated Testing**: Validate changes at each step
4. **Rollback Strategy**: Always have a rollback plan
5. **Documentation**: Record all migration decisions and processes

## 📋 Migration Checklist

### Pre-Migration Assessment

- [ ] **Current Version Analysis**
  - [ ] Document current dependency versions
  - [ ] Identify deprecated features in use
  - [ ] Review breaking changes in target versions
  - [ ] Assess custom code compatibility

- [ ] **Risk Assessment**
  - [ ] Categorize changes by risk level
  - [ ] Identify critical components
  - [ ] Plan testing strategies
  - [ ] Prepare rollback procedures

- [ ] **Environment Preparation**
  - [ ] Create migration branch
  - [ ] Set up staging environment
  - [ ] Backup current state
  - [ ] Configure automated testing

## 🔧 Framework Migrations

### Next.js Migration

#### Next.js 14 to 15 Migration

```bash
# 1. Update Next.js and React
npm install next@15 react@19 react-dom@19

# 2. Update related dependencies
npm install @types/react@19 @types/react-dom@19

# 3. Update dev dependencies
npm install -D eslint-config-next@15
```

**Breaking Changes in Next.js 15:**

1. **App Router Improvements**

   ```typescript
   // Before (Next.js 14)
   export default function Layout({ children }: { children: React.ReactNode }) {
     return (
       <html>
         <body>{children}</body>
       </html>
     );
   }

   // After (Next.js 15) - Enhanced metadata support
   import type { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'My App',
     description: 'App description',
   };

   export default function Layout({ children }: { children: React.ReactNode }) {
     return (
       <html>
         <body>{children}</body>
       </html>
     );
   }
   ```

2. **Turbopack Stabilization**

   ```typescript
   // next.config.ts - Updated configuration
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     // Turbopack is now stable
     experimental: {
       turbo: {
         // New turbo configuration options
         loaders: {
           ".svg": ["@svgr/webpack"],
         },
       },
     },
   };

   export default nextConfig;
   ```

#### Migration Script

```typescript
// scripts/migrate-nextjs.ts
import fs from "fs/promises";
import path from "path";

async function migrateNextJS() {
  console.log("🚀 Starting Next.js 15 migration...");

  // 1. Update package.json
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));

  packageJson.dependencies["next"] = "^15.0.0";
  packageJson.dependencies["react"] = "^19.0.0";
  packageJson.dependencies["react-dom"] = "^19.0.0";

  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // 2. Update next.config.ts if needed
  const configPath = path.join(process.cwd(), "next.config.ts");
  let config = await fs.readFile(configPath, "utf-8");

  // Add new configuration options
  config = config.replace(
    "experimental: {",
    `experimental: {
      turbo: {
        loaders: {
          '.svg': ['@svgr/webpack'],
        },
      },`
  );

  await fs.writeFile(configPath, config);

  console.log("✅ Next.js migration completed");
}

migrateNextJS().catch(console.error);
```

### React Migration

#### React 18 to 19 Migration

**Key Changes:**

1. **New React Compiler**
2. **Enhanced Concurrent Features**
3. **Improved TypeScript Support**

```typescript
// app/layout.tsx - React 19 optimizations
'use client';

import { use, Suspense } from 'react';

// New 'use' hook for data fetching
function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise); // New in React 19

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// Enhanced error boundaries
export function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

### TypeScript Migration

#### TypeScript 5.7 to 5.8 Migration

```json
// tsconfig.json - Updated configuration
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    },
    // New in TypeScript 5.8
    "exactOptionalPropertyTypes": true,
    "noUncheckedIndexedAccess": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🎨 Styling Migration

### Tailwind CSS v3 to v4 Migration

**Major Changes:**

1. **New CSS-first configuration**
2. **Improved performance**
3. **Enhanced CSS custom properties**

```css
/* Before (Tailwind v3) - tailwind.config.js */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
      },
    },
  },
  plugins: [],
};
```

```css
/* After (Tailwind v4) - tailwind.config.ts */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0 112 243)',
      },
    },
  },
  plugins: [],
};

export default config;
```

#### Migration Script for Tailwind

```typescript
// scripts/migrate-tailwind.ts
import fs from "fs/promises";
import path from "path";

async function migrateTailwind() {
  console.log("🎨 Starting Tailwind CSS v4 migration...");

  // 1. Update dependencies
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));

  packageJson.devDependencies["tailwindcss"] = "^4.0.0";
  packageJson.devDependencies["@tailwindcss/postcss"] = "^4.0.0";

  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // 2. Convert config file
  const oldConfigPath = path.join(process.cwd(), "tailwind.config.js");
  const newConfigPath = path.join(process.cwd(), "tailwind.config.ts");

  if (
    await fs
      .access(oldConfigPath)
      .then(() => true)
      .catch(() => false)
  ) {
    // Convert JS config to TS
    const oldConfig = await fs.readFile(oldConfigPath, "utf-8");
    const newConfig = convertTailwindConfig(oldConfig);

    await fs.writeFile(newConfigPath, newConfig);
    await fs.unlink(oldConfigPath);
  }

  console.log("✅ Tailwind CSS migration completed");
}

function convertTailwindConfig(jsConfig: string): string {
  return `import type { Config } from 'tailwindcss';

const config: Config = ${jsConfig.replace("module.exports = ", "").replace(/;$/, "")};

export default config;`;
}

migrateTailwind().catch(console.error);
```

## 🔧 Dependency Migration

### Package Updates

#### Automated Dependency Updates

```json
// .github/dependabot.yml
version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "04:00"
    open-pull-requests-limit: 10
    reviewers:
      - "ai-maintainer"
    assignees:
      - "ai-maintainer"
    commit-message:
      prefix: "deps"
      include: "scope"
    # Group updates by type
    groups:
      react-ecosystem:
        patterns:
          - "react*"
          - "@types/react*"
      next-ecosystem:
        patterns:
          - "next*"
          - "@next/*"
      dev-dependencies:
        dependency-type: "development"
        patterns:
          - "*"
```

#### Manual Dependency Audit

```bash
#!/bin/bash
# scripts/audit-dependencies.sh

echo "🔍 Auditing dependencies..."

# Check for outdated packages
npm outdated

# Security audit
npm audit --audit-level high

# Check for duplicate dependencies
npx npm-check-duplicates

# Analyze bundle size
npx webpack-bundle-analyzer build/static/js/*.js

echo "✅ Dependency audit completed"
```

### Breaking Changes Handler

```typescript
// scripts/handle-breaking-changes.ts
interface BreakingChange {
  package: string;
  version: string;
  description: string;
  migration: () => Promise<void>;
}

const breakingChanges: BreakingChange[] = [
  {
    package: "next",
    version: "15.0.0",
    description: "App Router stabilization and Turbopack improvements",
    migration: async () => {
      console.log("Migrating Next.js 15 breaking changes...");
      await updateNextConfig();
      await updateAppRouterFiles();
    },
  },
  {
    package: "react",
    version: "19.0.0",
    description: "New compiler and concurrent features",
    migration: async () => {
      console.log("Migrating React 19 breaking changes...");
      await updateReactComponents();
    },
  },
];

async function handleBreakingChanges() {
  const packageJson = JSON.parse(await fs.readFile("package.json", "utf-8"));

  for (const change of breakingChanges) {
    const currentVersion =
      packageJson.dependencies[change.package] ||
      packageJson.devDependencies[change.package];

    if (currentVersion && shouldMigrate(currentVersion, change.version)) {
      console.log(`⚠️  Breaking change detected: ${change.description}`);
      await change.migration();
    }
  }
}

function shouldMigrate(current: string, target: string): boolean {
  // Implement version comparison logic
  return true; // Simplified for example
}
```

## 🗄️ Database Migration

### Prisma Schema Evolution

```prisma
// prisma/schema.prisma - Evolution example
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  // New fields in migration
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  posts Post[]

  @@map("users")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)

  // Migration: Change from Int to String
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}

enum Role {
  USER
  ADMIN
  MODERATOR
}
```

#### Database Migration Script

```sql
-- migrations/001_add_user_roles.sql
-- Add role column to users table
ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'USER';

-- Create enum type
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- Convert text column to enum
ALTER TABLE users ALTER COLUMN role TYPE "Role" USING role::"Role";

-- Add timestamps
ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT NOW();
ALTER TABLE users ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## 🔄 Environment Migration

### Development Environment Updates

```bash
# scripts/migrate-dev-env.sh
#!/bin/bash

echo "🔧 Migrating development environment..."

# Update Node.js version
nvm install 18.17.0
nvm use 18.17.0

# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Update VS Code settings
cat > .vscode/settings.json << EOF
{
  "typescript.preferences.includePackageJsonAutoImports": "off",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.configFile": "./tailwind.config.ts"
}
EOF

echo "✅ Development environment migration completed"
```

### Production Environment Migration

```yaml
# docker/Dockerfile - Updated for new versions
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build with new Next.js 15 optimizations
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

## 🧪 Testing Migration

### Test Suite Updates

```typescript
// tests/migration.test.ts - Migration validation tests
import { test, expect } from "@playwright/test";

test.describe("Migration Validation", () => {
  test("homepage loads correctly after migration", async ({ page }) => {
    await page.goto("/");

    // Check core functionality
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText("Autonomous Website")).toBeVisible();

    // Check new features
    await expect(page.locator('[data-testid="feature-grid"]')).toBeVisible();
  });

  test("style guide displays all components", async ({ page }) => {
    await page.goto("/style-guide");

    // Verify component sections
    const sections = ["Typography", "Buttons", "Cards", "Alerts"];
    for (const section of sections) {
      await expect(page.getByText(section)).toBeVisible();
    }
  });

  test("api routes function correctly", async ({ request }) => {
    const response = await request.get("/api/health");
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data.status).toBe("ok");
  });
});
```

## 📚 Migration Documentation

### Change Log Template

```markdown
# Migration Change Log

## [2.0.0] - 2025-07-01

### Major Updates

- **Next.js**: 14.2.3 → 15.3.4
- **React**: 18.3.1 → 19.0.0
- **TypeScript**: 5.7.2 → 5.8.3
- **Tailwind CSS**: 3.4.1 → 4.1.11

### Breaking Changes

- React 19 requires Node.js 18.17.0 or higher
- Tailwind CSS v4 configuration format changed
- Next.js App Router improvements require code updates

### Migration Steps

1. Update Node.js to 18.17.0+
2. Run migration script: `npm run migrate`
3. Update component imports
4. Test all functionality

### Rollback Plan

If issues occur:

1. Checkout previous commit: `git checkout v1.9.0`
2. Reinstall dependencies: `npm install`
3. Rebuild: `npm run build`

### Post-Migration Checklist

- [ ] All tests pass
- [ ] Performance metrics maintained
- [ ] Security audit clean
- [ ] Documentation updated
```

## 🔄 Automated Migration Pipeline

### GitHub Actions Migration Workflow

```yaml
# .github/workflows/migration.yml
name: Automated Migration

on:
  schedule:
    # Run weekly migration check
    - cron: "0 2 * * 1"
  workflow_dispatch:
    inputs:
      target_version:
        description: "Target version to migrate to"
        required: true
        type: string

jobs:
  migration:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run migration script
        run: npm run migrate
        env:
          TARGET_VERSION: ${{ github.event.inputs.target_version }}

      - name: Run tests
        run: npm run test

      - name: Build application
        run: npm run build

      - name: Create migration PR
        if: success()
        uses: peter-evans/create-pull-request@v5
        with:
          title: "chore: Automated migration to ${{ github.event.inputs.target_version }}"
          body: |
            ## Automated Migration

            This PR contains automated migration changes.

            ### Changes
            - Updated dependencies to target versions
            - Applied breaking change migrations
            - Updated configuration files

            ### Testing
            - ✅ All tests pass
            - ✅ Build successful
            - ✅ Migration validation complete
          branch: migration/automated-${{ github.run_number }}
```

---

**Last Updated**: July 1, 2025  
**Migration Version**: 1.0.0  
**Maintained by**: AI Development Team

This migration guide ensures smooth transitions while maintaining system stability and functionality.
