---
"exclude-dv": patch
---

Simplify regex by removing unnecessary escape characters

The regex pattern for DV_TRAIT was updated to remove escape characters before dots and hyphens within character classes. In regex character classes, dots and hyphens do not need to be escaped, making the pattern cleaner and more readable while maintaining the same functionality.
