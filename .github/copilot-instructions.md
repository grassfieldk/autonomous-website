# Copilot Coding and Commit Rules

## General Rules

1. **Language Usage**
   - Non-UI elements (e.g., documentation, comments, log outputs, commit messages) should be written in **English** unless otherwise specified.
   - UI elements (e.g., screen display text) must be written in **Japanese**.
   - When communicating in Japanese, use word spacing for English words within Japanese text for better readability.
   - When using punctuation marks (colon ":", semicolon ";", etc.) in Japanese text, add a single half-width space after the mark.
   - **Japanese Text Guidelines**:
     - **No word spacing (分かち書き)**: Do not use spaces within Japanese sentences or between katakana words
     - **English-Japanese spacing**: Always use spaces between English (alphabet) and full-width Japanese characters
     - **Compound katakana terms**: Write as single words without spaces (e.g., "ユーティリティファースト" not "ユーティリティ ファースト", "ビルドツール" not "ビルド ツール", "フォーマット" not "フォーマッティング")
     - **Technical terms**: Keep development-specific terms in English when they are well-established (e.g., "Git Hooks", "API", "CLI")
     - **Common katakana**: Use katakana for widely adopted terms (e.g., "コンポーネント", "フレームワーク", "ライブラリ", "サーバー", "データベース", "コードレビュー", "テスト")
     - **Brand names**: Keep original form (e.g., "GitHub", "TypeScript", "Next.js")
     - **Avoid excessive katakana conversion**: Don't convert terms that are better left in English

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
   - Follow the setup guide in `docs/development.md`.

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
   - Create proper test coverage for major features.

10. **Autonomous Workflow**
    - All tasks, including coding, documentation, and commits, must be performed by Copilot.
    - Manual edits by the user are not allowed and should be avoided.
    - Use AI-assisted development patterns and best practices.
    - Leverage automated testing and deployment workflows.

## Project Structure Guidelines

- **Components**: Place reusable UI components in `src/components/ui/`
- **Pages**: Use Next.js App Router structure in `src/app/`
- **Documentation**: Maintain docs in `docs/` directory
- **Testing**: Follow testing patterns in `src/__tests__/` and `tests/`
- **Configuration**: Keep all config files in project root with TypeScript when possible

## AI-First Development Principles

1. **Automated Quality Assurance**: Use AI for code review, testing, and optimization
2. **Intelligent Documentation**: Generate and maintain documentation automatically
3. **Proactive Security**: Implement AI-driven security monitoring and compliance
4. **Performance Optimization**: Use AI insights for continuous performance improvement
5. **Maintainable Architecture**: Design for long-term AI-assisted maintenance

## Writing Style Guidelines

### Writing Principles

- **Clarity over Complexity**: Use clear, direct language instead of elaborate expressions
- **Conciseness over Verbosity**: Eliminate redundant phrases and unnecessary words
- **Specificity over Abstraction**: Provide concrete information rather than vague descriptions
- **Active Voice Preference**: Use active voice to make statements more direct and engaging
- **Consistency**: Maintain consistent terminology and expressions throughout documentation

### Avoid AI-Generated Hype Expressions

#### 1. Excessive Absoluteness/Completeness Claims

**Avoid:**

- "Revolutionary technology that changes the industry"
- "Ultimate performance solution"
- "Complete problem resolution"
- "World's first/best/most advanced"
- "Game-changing innovation"
- "Guaranteed to solve all issues"

**Use instead:**

- "Effective technology that improves industry practices"
- "High-performance solution"
- "Addresses key problems"
- "New/innovative approach"
- "Significant improvement"
- "Helps resolve many issues"

#### 2. Abstract/Sensational Effect Language

**Avoid:**

- "Works like magic"
- "Miraculous results"
- "Unleash the potential"
- "Supercharge your workflow"
- "Democratize AI"
- "Transform your business overnight"

**Use instead:**

- "Works efficiently"
- "Delivers good results"
- "Maximize potential"
- "Improve your workflow"
- "Make AI more accessible"
- "Improve your business operations"

#### 3. Authority/Predictive Claims

**Avoid:**

- "Will redefine the industry"
- "The future of technology"
- "Inevitable paradigm shift"
- "Next-generation solution"
- "Industry standard of tomorrow"

**Use instead:**

- "May influence industry practices"
- "Modern technology approach"
- "Significant change in approach"
- "Current solution"
- "Emerging industry practice"

### Technical Writing Best Practices

#### 1. Eliminate Redundancy

**Avoid:**

- "First, let's start by..." → "First, let's..." or "Let's start by..."
- "In order to accomplish this task" → "To accomplish this task"
- "It is possible to configure" → "You can configure"
- "Has the ability to process" → "Can process"

#### 2. Use Active Voice

**Prefer:**

- "The system processes data" over "Data is processed by the system"
- "You can configure settings" over "Settings can be configured"
- "This guide explains" over "This guide is designed to explain"

#### 3. Be Specific and Concrete

**Avoid vague terms:**

- "High performance" → "Response time under 100ms"
- "Scalable solution" → "Handles up to 10,000 concurrent users"
- "Easy to use" → "Requires 3 steps to set up"
- "Fast processing" → "Processes 1,000 items per second"

#### 4. Consistent Terminology

- Use the same term for the same concept throughout documentation
- Create and maintain a glossary for project-specific terms
- Avoid synonyms when referring to technical concepts

### List Formatting Guidelines

#### Avoid Mechanical Emphasis Patterns

**Don't use:**

- **Bold:** for every list item start
- Emoji decoration for emphasis or status indication
- **Important:** or **Note:** labels repeatedly

**Use instead:**

- Clear, descriptive list items without artificial emphasis
- Consistent bullet point structure
- Context-appropriate formatting only when necessary

#### Example - Better List Formatting

**Instead of:**

```
- ✓ Complete: Full implementation
- → Fast: High-speed processing
- * Smart: AI-powered features
```

**Use:**

```
- Full implementation with proper features
- High-speed processing with optimized algorithms
- AI-powered features for intelligent automation
```

### Documentation Structure Guidelines

#### 1. Organize Information Logically

- Start with overview, then details
- Group related information together
- Use clear headings and subheadings
- Provide navigation aids for long documents

#### 2. Write Scannable Content

- Use bullet points for lists
- Keep paragraphs short (3-4 sentences max)
- Use code examples to illustrate concepts
- Include practical usage examples

#### 3. Maintain Professional Tone

- Be helpful but not overly enthusiastic
- Focus on facts rather than marketing language
- Acknowledge limitations when they exist
- Provide realistic expectations

#### 4. Use Neutral Technical Language

- **Avoid emotional expressions**: No exclamation marks, enthusiastic language, or subjective adjectives
- **No decorative emoji usage**: Do not use emojis for decoration, emphasis, or status indication in technical documentation. Emojis are acceptable only when they are part of proper nouns, essential identifiers, or established conventions (e.g., common phrases like "built with ❤️")
- **Objective tone**: Present information without personal opinions or marketing rhetoric
- **Factual statements**: Focus on what the system does, not how amazing it is
- **Minimal adjectives**: Use descriptive terms only when technically necessary

**Examples:**

**Instead of:**

```
- Exciting new features coming soon!
- Amazing performance improvements
- Perfect solution for your needs
```

**Use:**

```
- New features planned for next release
- Performance improvements implemented
- Solution addresses specific requirements
```

#### 5. Use Text-Based Status Indicators

Use text instead of emojis for status indicators in tables, lists, and status reports.

### Quality Checklist for Writing

Before finalizing any documentation:

- [ ] Remove redundant phrases and words
- [ ] Convert passive voice to active where appropriate
- [ ] Replace vague terms with specific, measurable descriptions
- [ ] Ensure consistent terminology throughout
- [ ] Eliminate excessive emphasis or promotional language
- [ ] Remove decorative emoji usage from technical documentation
- [ ] Use neutral, objective tone without emotional expressions
- [ ] Verify all claims are accurate and realistic
- [ ] Check that examples are practical and tested
- [ ] Confirm the structure supports easy scanning and navigation

---
