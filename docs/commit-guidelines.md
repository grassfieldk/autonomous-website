# Commit Guidelines

To maintain a clean and understandable commit history, please follow these guidelines when making commits to this repository.

## Commit Message Format

Each commit message should follow the format:

```
type(scope): Description
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope should be the name of the module or feature being worked on (e.g., `auth`, `ui`, `api`).

### Description

The description should be a short, imperative summary of the change (e.g., "Add login functionality").

## Examples

- `feat(auth): Add login functionality`
- `fix(ui): Resolve button alignment issue`
- `docs(readme): Update project overview`
- `style(css): Format global styles`
- `refactor(api): Simplify data fetching logic`
- `test(auth): Add unit tests for login`
- `chore(deps): Update dependencies`

## Additional Notes

- Use the imperative mood in the description (e.g., "Fix" instead of "Fixed" or "Fixes").
- Keep the description concise and to the point.
- If a commit addresses an issue, include the issue number in the description (e.g., `fix(ui): Resolve #123`).
