# Repository Guidelines

## Project Structure & Module Organization

- `pages/` contains the Next.js entry points (`index.tsx`) and global setup in `_app.tsx`.
- UI lives in `components/` (e.g., `components/keyboard/`, `Layout.tsx`, `Tooltip.tsx`); keep feature-specific assets alongside their components.
- Redux Toolkit code sits in `state/` (`store.ts`, `keyboardSlice.ts`, `settingsSlice.ts`) with selectors in `state/hooks.ts`. Shared hooks, constants, and styling layers sit in `hooks/`, `constants/`, and `styles/`. Static assets belong in `public/`. Use `layout.png` as a visual guide when tweaking layout.

## Build, Test, and Development Commands

- `npm install` installs dependencies; rerun after lockfile updates or Node changes.
- `npm run dev` launches the Turbopack dev server on `http://localhost:3000`.
- `npm run build` creates the production bundle; address warnings before merging.
- `npm start` serves the built bundle for a production sanity check.
- `npm run lint` runs ESLint via `eslint.config.mjs`.
- `npm run format` applies Prettier with the Tailwind class sorter; keep formatting commits focused.

## Coding Style & Naming Conventions

- TypeScript is required—prefer explicit interfaces over `any` and export reusable types from `state/` or `constants/`.
- Components use PascalCase (`Layout.tsx`, `Text.tsx`), hooks camelCase with a `use` prefix (see `hooks.ts`), and Redux files follow `<feature>Slice.ts`.
- Tailwind utilities should be concise; the Prettier plugin will sort them. Respect the 80-character print width and single-quote preference from `prettier.config.js`.

## Testing Guidelines

- No automated test runner is configured yet. When adding tests, create colocated files like `Text.test.tsx` and add an `npm test` script in `package.json`.
- Document manual verification (key press scenarios, audio checks, persistence) in each pull request until automation exists.
- Always run `npm run build` before requesting review to catch type or Next.js regressions.

## Commit & Pull Request Guidelines

- Follow semantic commits: `<type>(<scope>): <subject>` where `<type>` is `feat`, `fix`, `docs`, `refactor`, `test`, or `chore` (e.g., `fix(keyboard): debounce rapid retries`).
- Pull requests need a succinct summary, linked issue when applicable, UI screenshots or GIFs for visual changes, and a quick note on how it was tested.
- Keep PRs focused and ensure the automated checks (Dependabot, Snyk, SonarCloud) remain green before requesting review.

## Security & Quality Gates

- Dependabot opens security upgrades; prefer rebasing those branches so audit history stays intact.
- Snyk and SonarCloud surface issues asynchronously—acknowledge findings in the PR and ship fixes or tracking issues before merging.
