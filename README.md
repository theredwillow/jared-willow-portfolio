# jared-willow-portfolio

My personal portfolio: a Vite site (React 19, TypeScript, Sass) in an npm workspaces monorepo: a shared resume data package plus one folder per theme. The retrofuturistic theme is hosted on Firebase Hosting at <https://jared-willow-portfolio.web.app>.

## Set up

Prerequisites: [Node.js](https://nodejs.org/) (developed on v22) and, for deploying only, the [Firebase CLI](https://firebase.google.com/docs/cli).

```sh
git clone https://github.com/theredwillow/jared-willow-portfolio.git
cd jared-willow-portfolio
npm install
npm start
```

The dev server runs at <http://localhost:5173>.

## Commands

| Command | What it does |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run build` | Production build of every theme into its own `dist/` (gitignored) |
| `npm run preview -w @portfolio/retrofuturistic` | Serve that theme's production build locally |
| `npm test` | Single test run with Vitest across the workspaces |
| `npm run typecheck` | Type-check every workspace with `tsc` (no emit) |

## Layout

| Folder | Package | What it is |
| --- | --- | --- |
| [packages/resume](packages/resume) | `@portfolio/resume` | The resume data (JSON Resume shape), its types, formatting helpers and tests |
| [themes/retrofuturistic](themes/retrofuturistic) | `@portfolio/retrofuturistic` | The original theme, which reads the resume data at build time |

## Deploy

Deploys are manual. One-time setup:

```sh
npm install -g firebase-tools
firebase login
```

Then, from the repo root:

```sh
npm run build
firebase deploy
```

This publishes two Firebase Hosting sites in the `jared-weide-portfolio` project (the project ID predates the rename and is invisible to visitors):

- `jared-willow-portfolio`: the site itself, serving `themes/retrofuturistic/dist/` with every route rewritten to `index.html`.
- `jared-weide-portfolio`: the old URL, serving [legacy-redirect](legacy-redirect) and 301-redirecting everything to the new site.

To publish only the retrofuturistic theme: `firebase deploy --only hosting:retrofuturistic`.

Each theme gets its own hosting target, named after its folder in [themes](themes). To add one: create a hosting site in the Firebase console, run `firebase target:apply hosting <theme> <site-id>`, and add a matching entry in [firebase.json](firebase.json) with `public` set to `themes/<theme>/dist`.

Config lives in [firebase.json](firebase.json) and [.firebaserc](.firebaserc).

## Editing content

Projects, jobs and profiles live in [packages/resume/src/resume.json](packages/resume/src/resume.json). Edit the data, not the components. Theme images live in [themes/retrofuturistic/public/images](themes/retrofuturistic/public/images).

See [AGENTS.md](AGENTS.md) for architecture notes and [TODO.md](TODO.md) for the roadmap.
