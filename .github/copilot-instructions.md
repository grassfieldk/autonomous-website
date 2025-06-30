# Copilot Coding and Commit Rules

## General Rules

1. **Language Usage**
   - Non-UI elements (e.g., documentation, comments, log outputs, commit messages) should be written in **English** unless otherwise specified.
   - UI elements (e.g., screen display text) must be written in **Japanese**.

2. **Comments**
   - Keep comments minimal and focused on explaining the functionality or logic of the code.
   - Use JSDoc or similar documentation formats actively to describe functions, parameters, and return values.
   - Avoid comments that describe tasks or actions (e.g., "Prepare X for the upper function").

3. **Commit Messages**
   - Write clear and concise commit messages in English.
   - Follow the format: `type(scope): Description` (e.g., `feat(auth): Add login functionality`).
   - Use the imperative mood in the description (e.g., "Fix" instead of "Fixed" or "Fixes").
   - Ensure the description starts with a capital letter.

4. **Pre-commit Checks**
   - All commits must pass ESLint checks and Prettier formatting.
   - Use the pre-commit hook to ensure compliance before committing.

5. **Development Environment**
   - Use Visual Studio Code with the recommended extensions (`dbaeumer.vscode-eslint`, `esbenp.prettier-vscode`).
   - Enable `formatOnSave` in VS Code settings.

6. **Major Changes**
   - Before making significant changes, summarize the intended modifications and seek approval.

7. **Autonomous Workflow**
   - All tasks, including coding, documentation, and commits, must be performed by Copilot.
   - Manual edits by the user are not allowed and should be avoided.

---

These rules ensure consistency and clarity in the development process. Please adhere to them strictly.
