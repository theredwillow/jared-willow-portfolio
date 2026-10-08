# jared-willow-portfolio

My personal portfolio: a single-page Create React App site (React 16, TypeScript, Bootstrap, Sass) with a retrofuturistic theme, hosted on Firebase Hosting at <https://jared-willow-portfolio.web.app>.

## Set up

Prerequisites: [Node.js](https://nodejs.org/) (developed on v22) and, for deploying only, the [Firebase CLI](https://firebase.google.com/docs/cli).

```sh
git clone https://github.com/theredwillow/jared-willow-portfolio.git
cd jared-willow-portfolio
npm install
npm start
```

The dev server opens at <http://localhost:3000>.

The scripts set `NODE_OPTIONS=--openssl-legacy-provider` (via `cross-env`) because `react-scripts` 3.4 predates OpenSSL 3. Always use `npm run ...` rather than calling `react-scripts` directly.

## Commands

| Command | What it does |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run build` | Production build into `build/` (gitignored) |
| `CI=true npm test` | Single test run (plain `npm test` is watch mode) |

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

- `jared-willow-portfolio`: the site itself, serving `build/` with every route rewritten to `index.html`.
- `jared-weide-portfolio`: the old URL, serving [legacy-redirect](legacy-redirect) and 301-redirecting everything to the new site.

To publish only the portfolio: `firebase deploy --only hosting:portfolio`.

Config lives in [firebase.json](firebase.json) and [.firebaserc](.firebaserc).

## Editing content

Projects and jobs are plain arrays in [src/Projects/data.tsx](src/Projects/data.tsx) and [src/Experience/data.tsx](src/Experience/data.tsx). Edit the data, not the components. Images live in [public/images](public/images).

See [AGENTS.md](AGENTS.md) for architecture notes and [TODO.md](TODO.md) for the roadmap.
