# Contributing

## Issues

Keep issues minimal and outcome-focused. Include context, constraints, or decisions
that cannot reasonably be inferred from the repository. For keyboard chatter bugs,
include the browser, keyboard, chatter threshold, and steps to reproduce.

For larger work, use a parent issue with independently executable sub-issues.
Prefer coherent deliverables over implementation steps; each sub-issue should
normally be suitable for one pull request.

## Naming

Use semantic issue and pull request titles, and commit messages:

`<type>(<scope>): <subject>`

For example: `fix(keyboard): debounce rapid retries`.

Name branches `<type>/<issue>-<slug>` when associated with an issue, or
`<type>/<slug>` otherwise.

Types:

- `feat`: new functionality
- `fix`: bug fixes
- `docs`: documentation
- `refactor`: internal code changes without intended behavior changes
- `test`: tests and coverage
- `chore`: build, dependencies, and repository maintenance

## Pull requests

Keep changes focused. Include a succinct summary, a linked issue when applicable,
and a note on validation. Include screenshots or GIFs for visual changes.

Follow the setup instructions in [README.md](README.md). Before requesting review,
run:

```bash
npm run lint
npm run build
```

There is no automated test runner configured. Document relevant manual checks,
including key presses, chatter detection, audio, and persistence after a reload.

Address findings from Dependabot, Snyk, and SonarQube Cloud with fixes or tracking
issues before merging.
