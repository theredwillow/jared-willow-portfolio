# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio built with Vite (React 19, TypeScript 7, Sass) as an npm workspaces monorepo, deployed to Firebase Hosting: [packages/resume](packages/resume) (`@portfolio/resume`, the data, types and formatting helpers) and one folder per theme under [themes](themes). The only theme so far is [themes/retrofuturistic](themes/retrofuturistic) (sun, mountains, cars). Themes import the data as `@portfolio/resume/resume.json` and helpers from `@portfolio/resume`.

## Commands

Run from the repo root; each script fans out across the workspaces (target one with `-w <package>`).

- `npm start` — retrofuturistic dev server
- `npm run build` — production build of each theme into its own `dist/` (gitignored, but it is what Firebase serves)
- `npm test` — Vitest, single run (`npm test -w @portfolio/resume -- -t "name"` to filter). Tests live beside the code in [packages/resume/src](packages/resume/src); config is [packages/resume/vitest.config.mts](packages/resume/vitest.config.mts).
- `npm run typecheck` — `tsc` with no emit in every workspace; must be clean before committing.
- Deploy: see the Deploy section of [README.md](README.md).

## Architecture

[themes/retrofuturistic/src/App.jsx](themes/retrofuturistic/src/App.jsx) renders the page as a fixed vertical stack of section components: `Header`, `AboutMe`, `Projects`, `Experience`, `Footer`. Each lives in its own folder under the theme's `src/` with an `index.tsx` (and optional `style.scss`).

- **Content lives in [packages/resume/src/resume.json](packages/resume/src/resume.json)**, shaped like the [JSON Resume](https://jsonresume.org/) schema (types in [packages/resume/src/types.ts](packages/resume/src/types.ts)). `AboutMe`, `Projects` and `Experience` read from it. To add or change a project, job or profile, edit the JSON, not the component. Dates are `YYYY-MM`; free text may contain `[text](url)` links, rendered by [themes/retrofuturistic/src/RichText.tsx](themes/retrofuturistic/src/RichText.tsx) (React, so it lives in the theme, not the data package).
- **Static assets are referenced by absolute URL** (e.g. `/images/name.svg` in [themes/retrofuturistic/src/Header/index.tsx](themes/retrofuturistic/src/Header/index.tsx)) and served from the theme's [public/](themes/retrofuturistic/public/), not imported through the bundler. Note the Header references `/images/sun.svg`, which is not in `public/images`.
- **[themes/retrofuturistic/public/scroll.js](themes/retrofuturistic/public/scroll.js)** is a plain script outside the React bundle. It adds a `fixed` class to `#name` once the user scrolls past 40% of the viewport height, so the Header's `#name` id and that class are coupled to it.
- Mixed `.jsx`/`.tsx` is intentional-by-history; follow the extension of the file you're editing.

## Notes

- [TODO.md](TODO.md) holds the roadmap. When you complete a task, mark it as done while committing.
- `dist/` is build output; edit each package's `src/` and a theme's `public/`, never `dist/`.

## SVG workflow

SVG art is made with Claude driving Inkscape inside `%USERPROFILE%\inkscape-workspace` (a folder in the home directory, not part of this repo). Follow that repo's own `AGENTS.md` and `.claude` rules:

- Edit art there, because the Inkscape MCP can only touch files inside that folder.
- Work on the `jared-willow-portfolio` branch there, not `main`.
- Before switching branches, note the branch that is checked out (`git branch --show-current`). If it is another project that looks in progress (such as a `HANDOFF.md`, uncommitted art, a recent commit), always check in with the user before moving forward.
- When clearly done editing SVGs for this project, offer to check the originally opened branch back out.
- Never commit SVG changes without the user's explicit consent; leave them uncommitted for review in the VS Code preview first.
- Copy the finished (minified) SVG into `themes/retrofuturistic/public/images/` as a normal commit here.
