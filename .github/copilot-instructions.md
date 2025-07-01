# Copilot Coding and Commit Rules

## General Rules

1. **Language Usage**
   - Non-UI elements (e.g., documentation, comments, log outputs, commit messages) should be written in **English** unless otherwise specified.
   - UI elements (e.g., screen display text) must be written in **Japanese**.
   - When communicating in Japanese, use word spacing for English words within Japanese text for better readability.

2. **Comments**
   - Keep comments minimal and focused on explaining the functionality or logic of the code.
   - Use JSDoc or similar documentation formats actively to describe functions, parameters, and return values.
   - Avoid comments that describe tasks or actions (e.g., "Prepare X for the upper function").

3. **Commit Messages**
   - Write clear and concise commit messages in English.
   - Follow the format: `type(scope): Description` (e.g., `feat(auth): Add login functionality`).
   - Use the imperative mood in the description (e.g., "Fix" instead of "Fixed" or "Fixes").
   - Ensure the description starts with a capital letter.
   - Reference detailed commit guidelines in `docs/commit-guidelines.md`.

4. **Pre-commit Checks**
   - All commits must pass ESLint checks and Prettier formatting.
   - Use the pre-commit hook to ensure compliance before committing.
   - Run security scans and dependency audits automatically.

5. **Development Environment**
   - Use Visual Studio Code with the recommended extensions (`dbaeumer.vscode-eslint`, `esbenp.prettier-vscode`, `github.copilot`).
   - Enable `formatOnSave` in VS Code settings.
   - Follow the comprehensive setup guide in `docs/development.md`.

6. **Code Quality & Testing**
   - Write tests for all new components and functions following `docs/testing.md`.
   - Ensure all code follows TypeScript best practices with strict type checking.
   - Use component-driven development with proper API design (see `docs/api-reference.md`).
   - Follow performance optimization guidelines in `docs/performance.md`.

7. **Security & Compliance**
   - Implement security best practices as outlined in `docs/security.md`.
   - Validate all inputs and sanitize outputs properly.
   - Follow OWASP Top 10 security guidelines.
   - Never commit sensitive information (API keys, passwords, etc.).

8. **Documentation Standards**
   - Update relevant documentation when making changes.
   - Use clear, concise English in all documentation.
   - Include code examples and usage patterns.
   - Maintain up-to-date API references and component guides.

9. **Major Changes**
   - Before making significant changes, summarize the intended modifications and seek approval.
   - Follow migration procedures outlined in `docs/migration.md` for framework updates.
   - Create comprehensive test coverage for major features.

10. **Autonomous Workflow**
    - All tasks, including coding, documentation, and commits, must be performed by Copilot.
    - Manual edits by the user are not allowed and should be avoided.
    - Use AI-assisted development patterns and best practices.
    - Leverage automated testing and deployment workflows.

## Project Structure Guidelines

- **Components**: Place reusable UI components in `src/components/ui/`
- **Pages**: Use Next.js App Router structure in `src/app/`
- **Documentation**: Maintain comprehensive docs in `docs/` directory
- **Testing**: Follow testing patterns in `src/__tests__/` and `tests/`
- **Configuration**: Keep all config files in project root with TypeScript when possible

## AI-First Development Principles

1. **Automated Quality Assurance**: Use AI for code review, testing, and optimization
2. **Intelligent Documentation**: Generate and maintain documentation automatically
3. **Proactive Security**: Implement AI-driven security monitoring and compliance
4. **Performance Optimization**: Use AI insights for continuous performance improvement
5. **Maintainable Architecture**: Design for long-term AI-assisted maintenance

---

These rules ensure consistency, quality, and maintainability in our AI-first development process. Please adhere to them strictly and reference the comprehensive documentation in the `docs/` directory for detailed guidance.
