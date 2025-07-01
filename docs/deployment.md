# Deployment Guide

Guide for deploying the Autonomous Website to various platforms.

## Overview

This guide covers deployment strategies for the Autonomous Website, including local production builds, cloud deployments, and continuous integration/continuous deployment (CI/CD) setups.

## Prerequisites

Before deploying, ensure you have:

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher
- **Git** repository access
- **Platform account** (Vercel, Netlify, etc.)

## Build Process

### Local Production Build

Test your production build locally before deployment:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm run start
```

### Build Optimization

The project includes several optimizations:

1. **Next.js Optimizations**
   - Automatic code splitting
   - Image optimization
   - Font optimization
   - Bundle analysis

2. **Tailwind CSS Optimization**
   - PurgeCSS for unused styles
   - Minification in production
   - Critical CSS extraction

3. **TypeScript Compilation**
   - Type checking during build
   - Tree shaking for smaller bundles
   - Source map generation

## Cloud Deployment Options

### 🔷 Vercel (Recommended)

Vercel provides the best experience for Next.js applications with zero configuration.

#### Automatic Deployment

1. **Connect Repository**

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Login to Vercel
   vercel login

   # Deploy
   vercel
   ```

2. **Configuration** (`vercel.json`)

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/next"
       }
     ],
     "env": {
       "NODE_ENV": "production"
     },
     "functions": {
       "src/app/**/*.{js,ts,jsx,tsx}": {
         "maxDuration": 30
       }
     }
   }
   ```

3. **Custom Domain Setup**

   ```bash
   # Add custom domain
   vercel domains add yourdomain.com

   # Assign to project
   vercel domains assign yourdomain.com your-project
   ```

#### Environment Variables

Set environment variables in Vercel dashboard or CLI:

```bash
# Set environment variable
vercel env add VARIABLE_NAME

# Pull environment variables
vercel env pull
```

### 🟢 Netlify

Alternative deployment platform with excellent features.

#### Setup Process

1. **netlify.toml Configuration**

   ```toml
   [build]
     publish = ".next"
     command = "npm run build"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   [dev]
     command = "npm run dev"
     port = 3000
   ```

2. **Deploy via CLI**

   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod
   ```

### 🔵 Digital Ocean App Platform

For more control over the deployment environment.

#### App Spec Configuration

```yaml
# .do/app.yaml
name: autonomous-website
services:
  - name: web
    source_dir: /
    github:
      repo: your-username/autonomous-website
      branch: main
    run_command: npm start
    environment_slug: node-js
    instance_count: 1
    instance_size_slug: basic-xxs
    build_command: npm run build
    envs:
      - key: NODE_ENV
        value: production
```

### 🟠 AWS Amplify

For AWS-integrated deployments.

#### Setup Steps

1. **Install Amplify CLI**

   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Project**

   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

3. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - "**/*"
   ```

## CI/CD Pipeline

### GitHub Actions

Automated deployment with GitHub Actions.

#### Workflow Configuration

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm run test

      - name: Build application
        run: npm run build

      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: "--prod"
```

### Environment Secrets

Configure these secrets in your repository:

| Secret         | Description             |
| -------------- | ----------------------- |
| `VERCEL_TOKEN` | Vercel deployment token |
| `ORG_ID`       | Vercel organization ID  |
| `PROJECT_ID`   | Vercel project ID       |

## Environment Configuration

### Environment Variables

Create environment files for different stages:

#### Development (`.env.local`)

```env
# Development environment
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Production (`.env.production`)

```env
# Production environment
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://yoursite.com/api
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### Next.js Configuration

#### Production Optimizations (`next.config.ts`)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    turbo: {
      // Turbopack configuration
    },
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },

  // Compress output
  compress: true,

  // Generate static exports if needed
  output: "standalone", // for Docker deployments

  // Bundle analyzer (development only)
  ...(process.env.ANALYZE === "true" && {
    webpack: (config) => {
      config.plugins.push(
        new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)()
      );
      return config;
    },
  }),
};

export default nextConfig;
```

## 🐳 Docker Deployment

For containerized deployments.

### Dockerfile

```dockerfile
# Multi-stage build for production
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

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: "3.8"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - web
    restart: unless-stopped
```

## 🔍 Monitoring and Analytics

### Performance Monitoring

1. **Web Vitals Tracking**

   ```typescript
   // pages/_app.tsx
   export function reportWebVitals(metric: NextWebVitalsMetric) {
     // Send to analytics service
     console.log(metric);
   }
   ```

2. **Error Tracking** (Sentry)

   ```bash
   npm install @sentry/nextjs
   ```

3. **Analytics Integration**

   ```typescript
   // Google Analytics 4
   import { GoogleAnalytics } from '@next/third-parties/google'

   export default function RootLayout() {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
         </body>
       </html>
     )
   }
   ```

### Health Checks

Create health check endpoints:

```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
  });
}
```

## Security Considerations

### HTTPS Configuration

Ensure HTTPS is enabled:

1. **SSL Certificate**
   - Use Let's Encrypt for free certificates
   - Configure automatic renewal

2. **Security Headers**
   ```typescript
   // next.config.ts
   async headers() {
     return [
       {
         source: '/(.*)',
         headers: [
           {
             key: 'Strict-Transport-Security',
             value: 'max-age=31536000; includeSubDomains'
           },
           {
             key: 'Content-Security-Policy',
             value: "default-src 'self'; script-src 'self' 'unsafe-eval'"
           }
         ]
       }
     ];
   }
   ```

### Environment Security

- Never commit sensitive data
- Use secure environment variable storage
- Implement proper access controls
- Regular security audits

## 📊 Performance Optimization

### Build Optimization

1. **Bundle Analysis**

   ```bash
   npm run build:analyze
   ```

2. **Image Optimization**
   - Use Next.js Image component
   - Implement proper image formats
   - Configure responsive images

3. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-level splitting
   - Vendor bundle optimization

### Runtime Optimization

1. **Caching Strategy**
   - Static asset caching
   - API response caching
   - Service worker implementation

2. **CDN Configuration**
   - Global content distribution
   - Edge caching
   - Image optimization at edge

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**

   ```bash
   # Clear Next.js cache
   rm -rf .next

   # Clear npm cache
   npm cache clean --force

   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Memory Issues**

   ```bash
   # Increase Node.js memory limit
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

3. **Type Check Failures**
   ```bash
   # Run type check separately
   npx tsc --noEmit
   ```

### Deployment Logs

Monitor deployment logs for issues:

- Vercel: Dashboard → Functions → View logs
- Netlify: Dashboard → Site → Deploys → View logs
- Docker: `docker logs container-name`

## 📈 Scaling Considerations

### Horizontal Scaling

- Load balancer configuration
- Database connection pooling
- Session management
- Asset distribution

### Vertical Scaling

- Memory optimization
- CPU usage monitoring
- Database query optimization
- Caching implementation

This deployment guide provides coverage for deploying the Autonomous Website across various platforms while maintaining performance, security, and scalability.
