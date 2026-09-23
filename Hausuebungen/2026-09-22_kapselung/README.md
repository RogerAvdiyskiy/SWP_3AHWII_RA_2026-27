# 3AHWII – UE 2: Kapselung & Sichtbarkeit (22.09.2026)

## HÜ (bis nächste UE)

Starter war rot — jetzt grün:

1. `fahrzeug.ts`: Invarianten **fail-fast** gesichert:
   - `new Fahrzeug(…, kmStand < 0)` wirft eine Exception mit sinnvoller Meldung.
   - `setGeschwindigkeit(v)` wirft, wenn `v > maxGeschwindigkeit` oder `v < 0`.
   - `kmStand` ist `readonly`-artig geschützt: von außen gibt es keinen
     Schreibzugriff (nur `fahre()` erhöht ihn).
2. `fahre(stunden)` erhöht `kmStand` um `geschwindigkeit * stunden`.
3. Alle Tests in `fahrzeug_test.ts` grün: `deno test`.
4. **Git-Disziplin:** pro Regel ein eigener Commit.

## Setup

```sh
deno run main.ts    # Demo
deno test           # grün
```

## Material

- Lesson 2 aus `GRG-SWP/3ahwii/teach/lessons/0002-kapselung-invarianten.html`
- Invarianten-Checkliste aus
  `GRG-SWP/3ahwii/teach/reference/invarianten-checkliste.html`
- Syntax-Cheatsheet aus `GRG-SWP/3ahwii/teach/reference/ts-oop-cheatsheet.html`
