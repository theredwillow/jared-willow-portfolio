# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio built with Create React App (react-scripts 3.4, React 16, TypeScript 3.7, Bootstrap 4 / react-bootstrap, Sass), deployed to Firebase Hosting. The visual theme is "retrofuturistic" (sun, mountains, cars).

## Commands

- `npm start` — dev server
- `npm run build` — production build into `build/` (gitignored, but it is what Firebase serves)
- `npm test` — Jest via react-scripts (watch mode; use `CI=true npm test` for a single run, or `npm test -- -t "name"` to filter). [src/App.test.tsx](src/App.test.tsx) is currently fully commented out, so there are effectively no tests yet.
- Deploy: `npm run build` then `firebase deploy` (config in [firebase.json](firebase.json), project in [.firebaserc](.firebaserc); all routes rewrite to `/index.html`).

## Architecture

[src/App.jsx](src/App.jsx) renders the page as a fixed vertical stack of section components: `Header`, `AboutMe`, `Projects`, `Experience`, `Footer`. Each lives in its own folder under `src/` with an `index.tsx` (and optional `style.scss`).

- **Content lives in `data.tsx`**: [src/Projects/data.tsx](src/Projects/data.tsx) and [src/Experience/data.tsx](src/Experience/data.tsx) hold the arrays that `index.tsx` maps over. To add or change a project or job, edit the data file, not the component.
- **Static assets are referenced by absolute URL** (e.g. `/images/name.svg` in [src/Header/index.tsx](src/Header/index.tsx)) and served from [public/](public/), not imported through webpack. Note the Header references `/images/sun.svg`, which is not in `public/images`.
- **[public/scroll.js](public/scroll.js)** is a plain script outside the React bundle. It adds a `fixed` class to `#name` once the user scrolls past 40% of the viewport height, so the Header's `#name` id and that class are coupled to it.
- Mixed `.jsx`/`.tsx` is intentional-by-history; follow the extension of the file you're editing.

## Notes

- [TODO.md](TODO.md) holds the roadmap. When you complete a task, mark it as done while committing.
- `build/` is a stale duplicate of `public/` plus compiled output; edit `public/` and `src/`, never `build/`.

## SVG workflow

SVG art is made with Claude driving Inkscape inside `%USERPROFILE%\inkscape-workspace` (a folder in the home directory, not part of this repo). Follow that repo's own `AGENTS.md` and `.claude` rules:

- Edit art there, because the Inkscape MCP can only touch files inside that folder.
- Work on a project branch there, not `main`.
- Never commit SVG changes without the user's explicit consent; leave them uncommitted for review in the VS Code preview first.
- Copy the finished (minified) SVG into this repo's `public/images/` as a normal commit here.
