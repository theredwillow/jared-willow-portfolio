# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio built with Vite (React 16, TypeScript 3.7, Bootstrap 4 / react-bootstrap, Sass), deployed to Firebase Hosting. The visual theme is "retrofuturistic" (sun, mountains, cars).

## Commands

- `npm start` — dev server
- `npm run build` — production build into `dist/` (gitignored, but it is what Firebase serves)
- `npm test` — Vitest, single run (`npx vitest` for watch mode, `npm test -- -t "name"` to filter). Tests live beside the code in [src/resume](src/resume). Config is in [vite.config.mts](vite.config.mts).
- `npm run typecheck` — `tsc` with no emit; must be clean before committing.
- Deploy: see the Deploy section of [README.md](README.md).

## Architecture

[src/App.jsx](src/App.jsx) renders the page as a fixed vertical stack of section components: `Header`, `AboutMe`, `Projects`, `Experience`, `Footer`. Each lives in its own folder under `src/` with an `index.tsx` (and optional `style.scss`).

- **Content lives in [src/resume/resume.json](src/resume/resume.json)**, shaped like the [JSON Resume](https://jsonresume.org/) schema (types in [src/resume/types.ts](src/resume/types.ts)). `AboutMe`, `Projects` and `Experience` read from it. To add or change a project, job or profile, edit the JSON, not the component. Dates are `YYYY-MM`; free text may contain `[text](url)` links, rendered by [src/resume/RichText.tsx](src/resume/RichText.tsx).
- **Static assets are referenced by absolute URL** (e.g. `/images/name.svg` in [src/Header/index.tsx](src/Header/index.tsx)) and served from [public/](public/), not imported through the bundler. Note the Header references `/images/sun.svg`, which is not in `public/images`.
- **[public/scroll.js](public/scroll.js)** is a plain script outside the React bundle. It adds a `fixed` class to `#name` once the user scrolls past 40% of the viewport height, so the Header's `#name` id and that class are coupled to it.
- Mixed `.jsx`/`.tsx` is intentional-by-history; follow the extension of the file you're editing.

## Notes

- [TODO.md](TODO.md) holds the roadmap. When you complete a task, mark it as done while committing.
- `dist/` is build output; edit `public/` and `src/`, never `dist/`.

## SVG workflow

SVG art is made with Claude driving Inkscape inside `%USERPROFILE%\inkscape-workspace` (a folder in the home directory, not part of this repo). Follow that repo's own `AGENTS.md` and `.claude` rules:

- Edit art there, because the Inkscape MCP can only touch files inside that folder.
- Work on the `jared-willow-portfolio` branch there, not `main`.
- Before switching branches, note the branch that is checked out (`git branch --show-current`). If it is another project that looks in progress (such as a `HANDOFF.md`, uncommitted art, a recent commit), always check in with the user before moving forward.
- When clearly done editing SVGs for this project, offer to check the originally opened branch back out.
- Never commit SVG changes without the user's explicit consent; leave them uncommitted for review in the VS Code preview first.
- Copy the finished (minified) SVG into this repo's `public/images/` as a normal commit here.
