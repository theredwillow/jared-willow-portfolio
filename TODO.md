# TODO

## Decisions
- Data format: [JSON Resume](https://jsonresume.org/) schema. Brag about it a little.
- `name.svg` is redrawn with Claude inside Inkscape; the workflow is in [AGENTS.md](AGENTS.md).

## Roadmap
1. [x] Rename Weide -> Willow everywhere (repo naming included)
   - [x] Display text (title, manifest, About Me, header alt)
   - [x] Redraw `name.svg` (Inkscape workflow in [AGENTS.md](AGENTS.md))
   - [x] LinkedIn URL slug (in [AboutMe/index.tsx](src/AboutMe/index.tsx))
   - NOTE: Leave wedding link in [Projects/data.tsx](src/Projects/data.tsx) as is, the project is being removed later
   - [x] Firebase URL: new hosting site `jared-willow-portfolio` in the existing project (project ID stays, it is invisible); old site 301s to it. Takes effect on next deploy
   - [x] `name` in [package.json](package.json) and [package-lock.json](package-lock.json)
   - [x] GitHub repo rename, then update the git remote (old URL redirects)
   - [x] Local folder name
2. [x] Change references of living in DFW to Vegas
3. [x] Rename master default branch to main.
4. [x] ~~Set up GitHub Actions for easy deployment~~ Skipped: manual `npm run build` + `firebase deploy` is fine for now (documented in [README.md](README.md)). Revisit before the stack migration.
5. [x] Write docs (probably [README.md](README.md)) about easy set-up
6. [ ] Job-coach personality in [AGENTS.md](AGENTS.md): motivational, pushes learning and creative expression, interesting to interviewers. Done first so every later step benefits, and refined as we go.
7. [x] Move the data into an independent structure the UI components consume
   - [x] Codify the JSON Resume schema (types + tests in [src/resume](src/resume))
8. [ ] **MAJOR OVERHAUL:** Migrate repo to a more modern stack
   - Target: Vite + React + TypeScript, in an npm workspaces monorepo (one package for the resume data/types, one folder per theme). Themes consume `resume.json` at build time. Each step below ends with a green build and its own commit.
   - [x] Baseline: record the `npm ls --all` package count and `npm audit` results, to compare against at the end
     - Recorded 2026-10-08 (Node 22.15.0, npm 10.5.2): 1952 installed packages (`npm ls --all --parseable`), 1956 entries in `package-lock.json` (lockfileVersion 2)
     - `npm audit`: 217 vulnerabilities (8 low, 134 moderate, 60 high, 15 critical)
   - [x] Replace Create React App with Vite, in atomic commits; each one ends by checking itself off here
     - [x] Swap CRA for Vite and Vitest: move the [src/resume](src/resume) tests from Jest to Vitest (drops the `cross-env` / openssl hack), move `index.html` to the project root and drop `%PUBLIC_URL%`, output folder `build/` -> `dist/` ([firebase.json](firebase.json), [.gitignore](.gitignore), delete the stale `build/`), check [public/scroll.js](public/scroll.js) and `/images/...` URLs still work
     - [x] Remove the service worker (it was already unregistered; revisit with `vite-plugin-pwa` if offline support is wanted) and the dead CRA files (`setupTests.ts`, `react-app-env.d.ts`); the empty `App.test.tsx` went in the Vite commit because Vitest fails on a test file with no tests
     - [x] Move Sass global built-ins (`nth`, `random`) in [src/App.scss](src/App.scss) to `sass:list` / `sass:math`
     - [x] Fix the `vector-effect` -> `vectorEffect` React warning in [src/Footer/Mountains.jsx](src/Footer/Mountains.jsx)
     - [x] Update [README.md](README.md) and [AGENTS.md](AGENTS.md) for Vite (dev port 5173, `dist/`, Vitest)
   - [x] Upgrade TypeScript (3.7 -> 7.0.2): no strictness errors; `moduleResolution` is now `bundler`, `vite/client` types replace the deleted `react-app-env.d.ts`, and `npm run typecheck` runs `tsc`
   - [x] Upgrade React (16 -> 19.3.0): `ReactDOM.render` -> `createRoot` in [src/index.tsx](src/index.tsx)
     - [x] Bootstrap: dropped `bootstrap`, `react-bootstrap` and `@types/react-bootstrap`; nothing in `src` imported them (`.card` is styled in [src/App.scss](src/App.scss))
   - [x] Convert to npm workspaces: [packages/resume](packages/resume) (`@portfolio/resume`: data, types, formatting, tests) and [themes/retrofuturistic](themes/retrofuturistic) (everything else); root scripts run across workspaces, `firebase.json` now serves `themes/retrofuturistic/dist`. `RichText` stayed in the theme because it is React
   - [ ] Deploy: one Firebase hosting target per theme (same pattern as `firebase.json` today)
   - [ ] Reassess the dependabot situation (including closed MR's from the master -> main branch rename) against the baseline
   - [ ] Final pass over [README.md](README.md) and [AGENTS.md](AGENTS.md). Docs for an important change (e.g. the workspaces layout) go in that change's commit, so this is only a check that nothing is stale
   - Later: a non-TypeScript (e.g. Python) theme could live in its own repo and build from a published `resume.json`.
9. [ ] Landing page chronicling the themes I've tried
   - [ ] Retrofuturistic (the original)
   - [ ] Bare-bones theme that presents the dataset as minimally as possible; homage to jsonresume.org
   - [ ] Retrofuturistic 2.0? (lambo.png -> svg, add game)
   - [ ] A new theme, be creative. Perhaps something Vegas? Slot machine layout? Vegas sign svg handled programmatically?
10. [ ] Projects
   - [ ] Get rid of the wedding project
   - [ ] Mention Family Feud: [Destiny-Family-Feud](https://github.com/theredwillow/Destiny-Family-Feud) and my [contributions to Friendly-Feud](https://github.com/joshzcold/Friendly-Feud/commits/master/?author=theredwillow)
   - [ ] Perhaps establish some kind of local scripts folder connection between Claude and my local repos that I work on so it can make suggestions on how to professionally present my work?
11. [ ] Tastefully add AI keywords
   - [ ] Read the zeitgeist first (there is an anti-AI movement too)
   - [ ] Add the keywords
