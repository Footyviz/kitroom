---
"@footyviz/kitroom": minor
"@footyviz/styles": minor
---

Revise `<fv-crest>` size scale: sm=20, md=28 (new default), lg=36 (was 32). Breaking change to default and lg sizes.

Adds an explicit `data-size="md"` token (28px) which is now also the new default — so `<fv-crest data-code="HAR"></fv-crest>` and `<fv-crest data-code="HAR" data-size="md"></fv-crest>` resolve to the same 28px box. The `lg` size grows from 32px to 36px to match the match-card spec. The `sm` size (20px) is unchanged. Font sizes for the monogram fallback scale proportionally.

No consumer migration is needed inside this repo since `<fv-crest>` is currently used only in stories.
