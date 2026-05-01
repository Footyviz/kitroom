---
"@footyviz/kitroom": patch
---

Replace hardcoded pixel and rgba values in fv-button.css with --space-*, --radius-*, and --shadow-* tokens. Drop the fv-button.ts grandfather exception in the architecture-check CI (the shadow-DOM port has already happened — fv-button is light DOM today).
