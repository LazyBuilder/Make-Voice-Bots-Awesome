# Content model and recommendation rules

## Original documents

The two CSVs in `source-documents/` are the reference inputs. The master sheet defines 12 segments. The details sheet contains repeated section headers, notes, and 104 numbered behavior rows. The displayed source content lives in `site/data.js`.

Behavior IDs such as `1.1` are stable strings, not decimal numbers. `1.10` and `1.1` identify different behaviors. Each behavior has a name, segment, example, failure, three scores, and their total. The numerical scores are copied from the source, not recalculated from risk tags.

## Added editorial guidance

`site/solutions.js` holds a specific action for each behavior and shared segment guidance, expected test results, and regression checks. `site/risk-tags.js` holds the risk definitions and per-behavior assignments. Primary handling is `live` or `after`, and every detail view explains both stages.

The eight risk keys are `experience`, `trust`, `data`, `operational`, `financial`, `privacy`, `consent`, and `accessibility`. A behavior can have several tags. These express potential impacts when a behavior is mishandled, rather than measured incident likelihood or a replacement for the source scores.

The handling filter identifies the primary stage. After-call investigation and improvement cannot replace confirmation or permission needed during the live interaction.

## Five-question recommendation logic

The questions and symptom-to-segment mappings are in `site/app.js`. Visitors may select multiple symptoms per question.

1. Every question with one or more selected symptoms contributes equal weight.
2. That question’s weight is divided equally among its selected symptoms. Each symptom contributes its share to every mapped segment.
3. A question with no selected symptom, including a cleared “Not applicable / skip” question, contributes nothing.
4. Segment scores are summed across all five questions together.
5. Ties favor matches across more distinct questions, then original segment order. Selection order does not affect the result.
6. The top three segments, or fewer if fewer match, become focus areas and filter the behavior library.
7. When more than three match, the interface states how many other segments match without displaying more focus cards.
8. With no selected symptoms there are no focus recommendations; all 104 behaviors remain available.

Scores are internal navigation weights, not confidence estimates. No symptom choices persist after the page is closed or refreshed.

## Editing a behavior

Keep the same stable ID across `data.js`, `solutions.js`, and `risk-tags.js`. Preserve original wording and scores unless the source documents themselves are intentionally revised. Review suggested guidance separately from source facts. Rebuild the standalone copy after changing any website file.

The checks currently enforce 104 behaviors and 12 segments. If intentionally expanding the reference collection, update the content and the related counts in checks and interface text together.

## Privacy and external links

The site has no backend, analytics, accounts, saved notes, cookies, or browser storage. It uses system fonts and a local artwork asset. Filter and symptom selections exist in page memory. Hosting providers operate their own infrastructure; the site’s no-storage design is not a claim about the host’s access logs. Sources & glossary includes external documentation links that visitors can choose to open.
