# Photo slots

Exported from the Figma file (`Ben`), sized to their slots. Paths are set in
`src/lib/content.ts` (home) and `src/lib/pages.ts` / each page (inner pages).

| File | Used in |
| --- | --- |
| hero.jpg | Home hero |
| about-player.png | Home — About portrait |
| process-assess.png, process-progress.png | Home — Process cards |
| event-camp.png, event-showcase.png, event-sessions.png | Home — Camps & Events |
| post-scouts.png, post-analysis.png, post-pathway.png | Home + Insights — articles |
| hero-page.jpg | Inner-page hero (Packages, Example, Approach, Enquiry, Camps, Events, Story, Philosophy, Team, Insights, Get Your Blueprint) |
| hero-how-it-works.png | How It Works hero (55% opacity, as in Figma) |
| hero-players.png | Our Players hero |
| roster-jordan-ellis.png, roster-alex-carter.png, roster-ethan-brown.png, roster-liam-johnson.png | Our Players roster |
| camp-intro.png | Camps — "What is a Blueprint Camp?" |
| team-member.png | Our Team portraits (all four use one placeholder in the Figma) |
| insights-grid.png | Insights — all six article cards (one shared placeholder in the Figma) |
| featured-article.png | Insights — featured article (optional; falls back to team-member.png) |

Missing files fall back to a dark placeholder (or a stand-in image where noted in code).
Ryan Mitchell and Sam Thompson currently reuse crops of the Ethan / Alex exports — replace
with dedicated exports (`roster-ryan-mitchell.png`, `roster-sam-thompson.png`) and update `src/lib/pages.ts`.
