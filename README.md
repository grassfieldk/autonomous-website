# Autonomous Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

[日本語](./README.ja.md) | [Documentation](./docs/)

A self-governing website where AI handles the development lifecycle from code generation to deployment and maintenance.

## Overview

**Autonomous Website** demonstrates AI-driven web development. This project shows how AI can handle:

- **Code Generation**: Feature development using GitHub Copilot
- **Documentation**: Automated documentation generation and maintenance
- **Version Control**: Intelligent commit messages and branching strategies
- **UI/UX Design**: Component-based design system implementation
- **Content Management**: AI-driven content creation and updates

## Key Features

### Modern Architecture

- **Next.js 15** with App Router and Turbopack for fast development
- **TypeScript** for type-safe, maintainable code
- **Tailwind CSS v4** with custom design system
- **Component-driven** architecture with reusable UI components

### User Experience

- **Dark/Light mode** with system preference detection and manual toggle
- **Responsive navigation** with glass effect and accent color styling
- **Cross-tab theme sync** for consistent experience across browser tabs
- **Smooth transitions** for all theme and UI state changes

### Developer Experience

- **Automated code quality** with ESLint and Prettier
- **Git hooks** for consistent code standards
- **Hot reloading** with Turbopack integration

### AI-First Development

- **GitHub Copilot Agent** mode for development assistance
- **Code reviews** and suggestions
- **Automated testing** and quality assurance
- **AI-generated** documentation and comments

## Technology Stack

| Category       | Technology   | Version | Purpose                     |
| -------------- | ------------ | ------- | --------------------------- |
| **Framework**  | Next.js      | 15.3.4  | Full-stack React framework  |
| **Language**   | TypeScript   | 5.8.3   | Type-safe JavaScript        |
| **Styling**    | Tailwind CSS | 4.1.11  | Utility-first CSS framework |
| **Runtime**    | React        | 19.0.0  | UI library                  |
| **Build Tool** | Turbopack    | -       | Next-gen bundler            |
| **Linting**    | ESLint       | 9.30.0  | Code quality enforcement    |
| **Formatting** | Prettier     | 3.6.2   | Code formatting             |
| **Git Hooks**  | Husky        | 9.1.7   | Git workflow automation     |

## Quick Start

### Prerequisites

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/grassfieldk/autonomous-website.git
   cd autonomous-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script           | Description                             |
| ---------------- | --------------------------------------- |
| `npm run dev`    | Start development server with Turbopack |
| `npm run build`  | Build for production                    |
| `npm run start`  | Start production server                 |
| `npm run lint`   | Run ESLint                              |
| `npm run format` | Format code with Prettier               |

## Project Structure

```
autonomous-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── style-guide/        # Component showcase
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Base UI components
│   │   │   ├── Button.tsx      # Button variants
│   │   │   ├── Card.tsx        # Card layouts
│   │   │   ├── Badge.tsx       # Status badges
│   │   │   └── Alert.tsx       # Alert messages
│   │   └── FeatureCard.tsx     # Feature showcases
├── docs/                       # Documentation
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

## Design System

The project uses a design system built on Tailwind CSS:

### Color Palette

- **Primary**: Blue (#0070f3) - Main actions and links
- **Secondary**: Gray (#6b7280) - Supporting elements
- **Success**: Green (#10b981) - Positive feedback
- **Warning**: Yellow (#f59e0b) - Caution states
- **Error**: Red (#ef4444) - Error states

### Typography

- **Headings**: Geist Sans font family
- **Body**: System font stack with fallbacks
- **Code**: Geist Mono for monospace elements

### Components

All components follow atomic design principles and are fully typed with TypeScript.

## Roadmap

### **Phase 1: Foundation** (Complete)

- [x] Modern technology stack setup
- [x] Component system implementation
- [x] Documentation framework

### **Phase 2: AI Integration** (In Progress)

- [ ] **AI Trend News System**
  - Automated news collection using Gemini CLI
  - Intelligent summarization and categorization
  - Dynamic content generation and publishing
- [ ] **Content Management System**
  - AI-driven article creation
  - Automatic SEO optimization
  - Smart content scheduling

### **Phase 3: Advanced Features** (Planned)

- [ ] **Multi-language support**
- [ ] **Performance optimization**
- [ ] **Deployment automation**
- [ ] **Analytics integration**

## Development Approach

This project demonstrates AI-first development workflows:

1. **Code Generation**: GitHub Copilot handles most development tasks
2. **Quality Control**: Automated validation with pre-commit hooks
3. **Documentation**: AI-generated and maintained documentation
4. **Standards**: Conventional commits and TypeScript enforcement

## Documentation

- **[Development Guide](./docs/development.md)** - Development instructions
- **[Component Guide](./docs/components.md)** - Component usage and API reference
- **[Deployment Guide](./docs/deployment.md)** - Production deployment instructions

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- **GitHub Copilot** - AI pair programming assistant
- **Next.js Team** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

---

**Built with AI assistance** | **Powered by GitHub Copilot**
