# TODO

## Decisions
- Data format: [JSON Resume](https://jsonresume.org/) schema. Brag about it a little.
- Stay on Create React App for now.
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
   - [ ] Document a plan
   - [ ] Commit
   - [ ] Reassess the dependabot situation (including closed MR's from the master -> main branch rename)
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
