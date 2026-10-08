# Keyboard Chatter Test

A simple website to test your keyboard for chatter.

Built with:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

Use pnpm 12.10.1, pinned in `package.json`. Install it with
`npm install --global pnpm@12.10.1`, or use Corepack to select the pinned version.

1. To run locally, install all dependencies first:

```bash
pnpm install
```

2. Run the development server with the following command:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The production version from the latest commit is built and deployed automatically [here](https://keyboard.dmitrijs.lv).

Commit `pnpm-lock.yaml`; deployments use `pnpm install --frozen-lockfile`.
On Vercel, enable Corepack with the project environment variable
`ENABLE_EXPERIMENTAL_COREPACK=1` to use the version pinned in `package.json`.
Leave the install command override disabled so Vercel detects pnpm automatically.

## Code Analysis

The following tools are used for code and security analysis:

- [Dependabot](/.github/dependabot.yml)
- [Snyk](https://app.snyk.io/)
- [SonarQube Cloud](https://sonarcloud.io/project/overview?id=dhmitry_keyboard-chatter-test)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for issues, naming, and pull request
guidelines. Agent instructions live in [AGENTS.md](AGENTS.md).

## License

See [LICENSE](LICENSE) for more information.
