# Security Guide

Security implementation and best practices for the Autonomous Website project.

## Security Philosophy

Our security approach is built on **Zero-Trust Architecture** with AI-assisted security monitoring:

```
    Application Security (Input Validation, CSRF, XSS)
   Infrastructure Security (HTTPS, Headers, CSP)
  Data Security (Encryption, Access Control)
 Development Security (Dependencies, Code Analysis)
```

### Security Principles

1. **Defense in Depth**: Multiple layers of security controls
2. **Least Privilege**: Minimal access rights for all components
3. **Security by Design**: Security considerations in every development phase
4. **Continuous Monitoring**: Automated security scanning and alerts
5. **Privacy by Default**: Data protection and user privacy first

## Framework Security

### Next.js Security Configuration

```typescript
// next.config.ts - Security-focused configuration
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://vitals.vercel-insights.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
          // Security headers
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
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // HSTS (HTTP Strict Transport Security)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // Disable powered-by header
  poweredByHeader: false,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Experimental security features
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
};

export default nextConfig;
```

### Environment Variables Security

```bash
# .env.local - Secure environment configuration
# Never commit this file to version control

# Database (use secure connection strings)
DATABASE_URL="postgresql://user:pass@host:5432/db?sslmode=require"

# API Keys (rotate regularly)
OPENAI_API_KEY="sk-..."
GOOGLE_ANALYTICS_ID="G-..."

# Authentication secrets (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET="your-super-secure-secret-here"
NEXTAUTH_URL="https://your-domain.com"

# Webhook secrets
GITHUB_WEBHOOK_SECRET="your-webhook-secret"

# Feature flags (for security testing)
ENABLE_DEBUG_MODE="false"
ENABLE_ADMIN_PANEL="false"
```

```typescript
// lib/env.ts - Environment validation
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  OPENAI_API_KEY: z.string().startsWith("sk-").optional(),
  GOOGLE_ANALYTICS_ID: z.string().startsWith("G-").optional(),
});

// Validate environment variables at startup
const env = envSchema.parse(process.env);

export default env;
```

## 🔐 Authentication & Authorization

### Next.js Authentication Setup

```typescript
// lib/auth.ts - Secure authentication configuration
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import { verifyPassword } from "./password";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !(await verifyPassword(credentials.password, user.password))) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub!;
      session.user.role = token.role as string;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
};

export default NextAuth(authOptions);
```

### Password Security

```typescript
// lib/password.ts - Secure password handling
import { hash, verify } from "@node-rs/argon2";
import { randomBytes } from "crypto";

// Argon2 configuration (OWASP recommended)
const ARGON2_OPTIONS = {
  memoryCost: 19456, // 19 MB
  timeCost: 2, // 2 iterations
  outputLen: 32, // 32 bytes
  parallelism: 1, // 1 thread
};

export async function hashPassword(password: string): Promise<string> {
  // Validate password strength
  if (!isPasswordStrong(password)) {
    throw new Error("Password does not meet security requirements");
  }

  return await hash(password, ARGON2_OPTIONS);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    return await verify(hashedPassword, password, ARGON2_OPTIONS);
  } catch {
    return false;
  }
}

export function generateSecureToken(length: number = 32): string {
  return randomBytes(length).toString("hex");
}

function isPasswordStrong(password: string): boolean {
  // Password requirements:
  // - At least 12 characters
  // - Contains uppercase letter
  // - Contains lowercase letter
  // - Contains number
  // - Contains special character
  const minLength = 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar
  );
}
```

### Role-Based Access Control (RBAC)

```typescript
// lib/rbac.ts - Role-based access control
export type Role = "user" | "admin" | "moderator";
export type Permission =
  | "read:posts"
  | "write:posts"
  | "delete:posts"
  | "manage:users"
  | "access:admin";

const rolePermissions: Record<Role, Permission[]> = {
  user: ["read:posts"],
  moderator: ["read:posts", "write:posts", "delete:posts"],
  admin: ["read:posts", "write:posts", "delete:posts", "manage:users", "access:admin"],
};

export function hasPermission(userRole: Role, permission: Permission): boolean {
  return rolePermissions[userRole]?.includes(permission) ?? false;
}

export function requirePermission(permission: Permission) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const user = this.getCurrentUser(); // Implement based on your auth system

      if (!user || !hasPermission(user.role, permission)) {
        throw new Error("Insufficient permissions");
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

// Usage with decorators
class PostService {
  @requirePermission("write:posts")
  async createPost(data: PostData) {
    // Implementation
  }

  @requirePermission("delete:posts")
  async deletePost(id: string) {
    // Implementation
  }
}
```

## Input Validation & Sanitization

### Form Validation with Zod

```typescript
// lib/validation.ts - Input validation
import { z } from "zod";

// User registration schema
export const registerSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email too long")
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(12, "Password must be at least 12 characters")
    .max(128, "Password too long")
    .regex(/[A-Z]/, "Password must contain uppercase letter")
    .regex(/[a-z]/, "Password must contain lowercase letter")
    .regex(/[0-9]/, "Password must contain number")
    .regex(/[^A-Za-z0-9]/, "Password must contain special character"),

  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name too long")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .trim(),

  age: z
    .number()
    .int("Age must be an integer")
    .min(13, "Must be at least 13 years old")
    .max(120, "Invalid age"),
});

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long").trim(),

  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email too long")
    .toLowerCase()
    .trim(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message too long")
    .trim(),

  // Honeypot field for bot detection
  website: z.string().max(0, "Bot detected").optional(),
});

// File upload schema
export const fileUploadSchema = z.object({
  file: z
    .any()
    .refine((file) => file instanceof File, "Invalid file")
    .refine((file) => file.size <= 5 * 1024 * 1024, "File too large (max 5MB)")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Invalid file type"
    ),
});
```

### API Route Protection

```typescript
// app/api/protected/route.ts - Secure API route
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { rateLimiter } from "@/lib/rate-limiter";
import { validateInput } from "@/lib/validation";
import { sanitize } from "@/lib/sanitization";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = request.ip ?? "anonymous";
    const rateLimitResult = await rateLimiter.limit(identifier);

    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // Authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Input validation
    const body = await request.json();
    const validatedData = validateInput(body, contactSchema);

    // Input sanitization
    const sanitizedData = sanitize(validatedData);

    // CSRF protection (handled by Next.js middleware)
    const csrfToken = request.headers.get("x-csrf-token");
    if (!csrfToken || !validateCSRFToken(csrfToken, session)) {
      return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 });
    }

    // Process request
    const result = await processSecureRequest(sanitizedData);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    // Log error for monitoring (without sensitive data)
    console.error("API Error:", {
      path: request.url,
      method: request.method,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

### Input Sanitization

```typescript
// lib/sanitization.ts - Input sanitization utilities
import DOMPurify from "isomorphic-dompurify";
import validator from "validator";

export function sanitizeString(input: string): string {
  return validator.escape(input.trim());
}

export function sanitizeHTML(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ["p", "br", "strong", "em", "u"],
    ALLOWED_ATTR: [],
  });
}

export function sanitizeEmail(input: string): string {
  return validator.normalizeEmail(input.toLowerCase().trim()) || "";
}

export function sanitizeURL(input: string): string {
  try {
    const url = new URL(input);
    // Only allow HTTP and HTTPS protocols
    if (!["http:", "https:"].includes(url.protocol)) {
      throw new Error("Invalid protocol");
    }
    return url.toString();
  } catch {
    return "";
  }
}

export function sanitize<T extends Record<string, any>>(data: T): T {
  const sanitized = {} as T;

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      sanitized[key as keyof T] = sanitizeString(value) as T[keyof T];
    } else if (Array.isArray(value)) {
      sanitized[key as keyof T] = value.map((item) =>
        typeof item === "string" ? sanitizeString(item) : item
      ) as T[keyof T];
    } else {
      sanitized[key as keyof T] = value;
    }
  }

  return sanitized;
}
```

## CSRF Protection

```typescript
// middleware.ts - CSRF protection middleware
import { NextRequest, NextResponse } from "next/server";
import { generateToken, verifyToken } from "@/lib/csrf";

export function middleware(request: NextRequest) {
  // Skip CSRF for GET requests and API routes that don't modify state
  if (request.method === "GET" || isPublicAPIRoute(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Generate CSRF token for forms
  if (request.nextUrl.pathname.includes("/form")) {
    const token = generateToken();
    response.cookies.set("csrf-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
    });

    response.headers.set("X-CSRF-Token", token);
  }

  // Verify CSRF token for state-changing requests
  if (["POST", "PUT", "DELETE", "PATCH"].includes(request.method)) {
    const token = request.headers.get("x-csrf-token");
    const cookieToken = request.cookies.get("csrf-token")?.value;

    if (!token || !cookieToken || !verifyToken(token, cookieToken)) {
      return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 });
    }
  }

  return response;
}

function isPublicAPIRoute(pathname: string): boolean {
  const publicRoutes = ["/api/health", "/api/public"];
  return publicRoutes.some((route) => pathname.startsWith(route));
}
```

## 🚨 Rate Limiting

```typescript
// lib/rate-limiter.ts - Advanced rate limiting
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

interface RateLimitConfig {
  requests: number;
  window: number; // seconds
  skipOnError?: boolean;
}

export class RateLimiter {
  constructor(private config: RateLimitConfig) {}

  async limit(identifier: string) {
    try {
      const key = `rate_limit:${identifier}`;
      const current = await redis.incr(key);

      if (current === 1) {
        await redis.expire(key, this.config.window);
      }

      const remaining = Math.max(0, this.config.requests - current);
      const resetTime = Date.now() + this.config.window * 1000;

      return {
        success: current <= this.config.requests,
        remaining,
        resetTime,
      };
    } catch (error) {
      if (this.config.skipOnError) {
        return { success: true, remaining: this.config.requests, resetTime: 0 };
      }
      throw error;
    }
  }
}

// Different rate limiters for different endpoints
export const authLimiter = new RateLimiter({
  requests: 5,
  window: 900, // 15 minutes
});

export const apiLimiter = new RateLimiter({
  requests: 100,
  window: 60, // 1 minute
});

export const uploadLimiter = new RateLimiter({
  requests: 10,
  window: 3600, // 1 hour
});
```

## 🔍 Security Monitoring

### Security Logging

```typescript
// lib/security-logger.ts - Security event logging
interface SecurityEvent {
  type: "auth_failure" | "rate_limit" | "suspicious_activity" | "csrf_violation";
  severity: "low" | "medium" | "high" | "critical";
  userId?: string;
  ip: string;
  userAgent: string;
  details: Record<string, any>;
  timestamp: Date;
}

export class SecurityLogger {
  private static async log(event: SecurityEvent) {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.warn("Security Event:", event);
    }

    // Send to logging service in production
    if (process.env.NODE_ENV === "production") {
      try {
        await fetch(process.env.SECURITY_WEBHOOK_URL!, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(event),
        });
      } catch (error) {
        console.error("Failed to log security event:", error);
      }
    }

    // Store in database for analysis
    try {
      await prisma.securityEvent.create({
        data: {
          type: event.type,
          severity: event.severity,
          userId: event.userId,
          ip: event.ip,
          userAgent: event.userAgent,
          details: event.details,
          timestamp: event.timestamp,
        },
      });
    } catch (error) {
      console.error("Failed to store security event:", error);
    }
  }

  static async logAuthFailure(ip: string, userAgent: string, email?: string) {
    await this.log({
      type: "auth_failure",
      severity: "medium",
      ip,
      userAgent,
      details: { email },
      timestamp: new Date(),
    });
  }

  static async logRateLimit(ip: string, userAgent: string, endpoint: string) {
    await this.log({
      type: "rate_limit",
      severity: "low",
      ip,
      userAgent,
      details: { endpoint },
      timestamp: new Date(),
    });
  }

  static async logSuspiciousActivity(
    ip: string,
    userAgent: string,
    activity: string,
    userId?: string
  ) {
    await this.log({
      type: "suspicious_activity",
      severity: "high",
      userId,
      ip,
      userAgent,
      details: { activity },
      timestamp: new Date(),
    });
  }
}
```

### Vulnerability Scanner Integration

```yaml
# .github/workflows/security.yml
name: Security Scan

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    # Run security scan daily
    - cron: "0 2 * * *"

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run npm audit
        run: npm audit --audit-level high

      - name: Run CodeQL Analysis
        uses: github/codeql-action/init@v2
        with:
          languages: javascript,typescript

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v2

      - name: Run Semgrep
        uses: returntocorp/semgrep-action@v1
        with:
          config: >-
            p/security-audit
            p/secrets
            p/owasp-top-ten

      - name: OWASP ZAP Baseline Scan
        uses: zaproxy/action-baseline@v0.7.0
        with:
          target: "https://your-staging-url.com"
```

## Security Checklist

### Pre-Production Security Audit

- [ ] **Authentication & Authorization**
  - [ ] Strong password requirements enforced
  - [ ] Multi-factor authentication available
  - [ ] Session management secure
  - [ ] Role-based access control implemented
  - [ ] JWT tokens properly configured

- [ ] **Input Validation**
  - [ ] All inputs validated on client and server
  - [ ] SQL injection prevention
  - [ ] XSS protection implemented
  - [ ] CSRF tokens in all forms
  - [ ] File upload restrictions

- [ ] **Data Protection**
  - [ ] Sensitive data encrypted at rest
  - [ ] Data encrypted in transit (HTTPS)
  - [ ] Database access restricted
  - [ ] Personal data handling compliant (GDPR)
  - [ ] Backup encryption enabled

- [ ] **Infrastructure Security**
  - [ ] Security headers configured
  - [ ] Rate limiting implemented
  - [ ] Error handling doesn't expose sensitive info
  - [ ] Dependencies regularly updated
  - [ ] Environment variables secured

- [ ] **Monitoring & Logging**
  - [ ] Security events logged
  - [ ] Failed login attempts monitored
  - [ ] Suspicious activity detection
  - [ ] Security incident response plan
  - [ ] Regular security audits scheduled

### OWASP Top 10 Compliance

1. **A01: Broken Access Control** ✅
   - Role-based access control
   - Authentication on all protected routes
   - Authorization checks in API

2. **A02: Cryptographic Failures** ✅
   - HTTPS everywhere
   - Strong password hashing (Argon2)
   - Secure session management

3. **A03: Injection** ✅
   - Input validation with Zod
   - Parameterized queries
   - Output sanitization

4. **A04: Insecure Design** ✅
   - Threat modeling conducted
   - Security requirements defined
   - Secure coding patterns

5. **A05: Security Misconfiguration** ✅
   - Security headers configured
   - Default credentials changed
   - Error handling secure

6. **A06: Vulnerable Components** ✅
   - Dependencies regularly updated
   - Vulnerability scanning automated
   - SCA tools integrated

7. **A07: Authentication Failures** ✅
   - Strong authentication implementation
   - Session management secure
   - Rate limiting on auth endpoints

8. **A08: Software Integrity Failures** ✅
   - Dependencies verified
   - CI/CD pipeline secured
   - Code signing implemented

9. **A09: Logging Failures** ✅
   - Security events logged
   - Log integrity maintained
   - Monitoring alerts configured

10. **A10: Server-Side Request Forgery** ✅
    - URL validation implemented
    - Network segmentation
    - Allow-list approach

## Development Security Tools

### VS Code Security Extensions

```json
// .vscode/extensions.json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "github.copilot",
    "tabnine.tabnine-vscode",
    "snyk-security.snyk-vulnerability-scanner",
    "42crunch.vscode-openapi"
  ]
}
```

### Security-focused ESLint Rules

```javascript
// eslint.config.mjs - Security rules
export default [
  {
    rules: {
      // Security-specific rules
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "prefer-rest-params": "error",

      // React security rules
      "react/no-danger": "error",
      "react/no-danger-with-children": "error",
      "react/jsx-no-script-url": "error",
      "react/jsx-no-target-blank": "error",

      // TypeScript security rules
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
    },
  },
];
```

---

**Last Updated**: July 1, 2025
**Security Version**: 1.0.0
**Maintained by**: AI Development Team
**Next Security Review**: Quarterly

This security guide ensures proper protection while maintaining development efficiency in our AI-first environment.
