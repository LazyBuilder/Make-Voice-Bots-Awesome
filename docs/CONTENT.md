# Content and navigation

The website has 13 pages: one overview and 12 segment pages. Stable behavior IDs remain strings, for example `1.1` and `1.10` are different behaviors.

The five-question questionnaire and its recommendation ranking have been removed. The home page now presents all 12 segments. Segment cards use one-sentence summaries and distinguish live-call experience from post-call processing risk. Individual problems, solutions, and approaches belong only on dedicated segment pages.

Filters never mix behaviors from other segments. A link ending in `#behavior=3.1` opens that behavior’s detail dialog. A behavior link used on the wrong page routes to the correct segment page.

All source examples, failures, notes, and numerical scores remain in `site/data.js`. The source fidelity check compares them with both CSVs. Editorial material lives in `segment-guide.js`, `solutions.js`, and `risk-tags.js`; those additions do not alter the original scores.

When changing a segment title or slug, update its page, home card, all segment-navigation links, and `segment-guide.js` together. Run the link and page-isolation checks afterward.

The site has no backend or persistent user storage. The eight risk categories and two handling stages remain available in the segment pages. Impact flags on overview cards describe consequences rather than claiming that post-call changes can undo a bad live experience.

## Application applicability

`site/applicability.js` provides Applies when and May be out of scope when notes for all 12 segments and 104 behaviors. These editorial conditions distinguish a missing capability from a mitigation that only reduces risk. Call direction alone does not remove transfer-leg risks, speaker detection does not establish authorization, and not requesting sensitive data does not prevent unsolicited disclosure.

## Visual explanations and layout

Each segment has a labeled stick-figure illustration with ordinary captions, descriptive alternative text, and a larger-image link. Illustrations also appear on home-page segment cards. Exact prompts are recorded in Labeled-segment-art-prompts.md.

The problems-and-solutions section uses the full page width, without a left segment menu. Visitors can use the home-page navigation to choose another segment. Risk charts count editorial classifications; they are not incident rates. Behavior score graphics preserve the original source scores.
