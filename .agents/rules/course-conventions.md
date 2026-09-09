---
trigger: always_on
---
# SWP Course Rules

- **Stack**: Deno with TypeScript. Native Deno APIs and JSR imports (`jsr:@std/assert@1`).
- **Formatting**: `deno fmt` (2 spaces, double quotes `"`, no tabs).
- **Style & Language**: Code comments in German. Meaningful naming matching domain models.
- **Testing & Benchmarks**: Test-driven with `Deno.test` and `@std/assert`. Benchmarking with `Deno.bench`.
- **OOP Architecture**: Pure OOP for domain logic. Use interfaces, abstract classes, encapsulation (`private`, `readonly`), and typed custom exceptions (`extends Error`).
- **SQL**: UPPERCASE SQL keywords (`SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`).
- **Persistence**: Decouple domain from DB. Repository pattern with Single-Table Inheritance (TPH) mapping when interfacing with Prisma/SQLite.

