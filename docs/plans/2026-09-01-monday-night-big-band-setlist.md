# Monday Night September 2026 Setlist Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the supplied `Somewhere Over the Rainbow` lyrics and tonight's two-set Monday Night Big Band setlist.

**Architecture:** Store the lyrics in the existing Astro `songs` content collection and append the show to the existing typed `shows` array. Reuse all five matching catalog entries rather than duplicating songs.

**Tech Stack:** Astro 4, Astro content collections, Markdown, TypeScript

---

### Task 1: Add Somewhere Over the Rainbow

**Files:**
- Create: `src/content/songs/somewhere-over-the-rainbow.md`

**Step 1: Confirm the song is absent**

Run: `test ! -e src/content/songs/somewhere-over-the-rainbow.md`
Expected: exit code 0.

**Step 2: Add the supplied lyrics**

Create a Markdown content entry with `title: Somewhere Over the Rainbow` frontmatter. Put the supplied lyrics in the same fenced-code-block format used by the other song entries, retaining section labels, performance notes, and stanza breaks.

**Step 3: Verify the content entry**

Run: `grep -q '^title: Somewhere Over the Rainbow$' src/content/songs/somewhere-over-the-rainbow.md && grep -q 'If happy little bluebirds fly beyond the rainbow' src/content/songs/somewhere-over-the-rainbow.md`
Expected: exit code 0.

### Task 2: Add the September setlist

**Files:**
- Modify: `src/pages/catalogue/shows/shows.ts`

**Step 1: Confirm the setlist is absent**

Run: `! grep -q 'mnbb-09-2026' src/pages/catalogue/shows/shows.ts`
Expected: exit code 0.

**Step 2: Append the show**

Add `Monday Night September 2026` with slug `mnbb-09-2026`. Use two sets in this order:

1. `will-you-still-love-me-tomorrow`
2. `do-nothing-til-you-hear-from-me`
3. `love-is-here-to-stay`

Second set:

1. `i-just-found-out-about-love`
2. `caught-a-touch-of-your-love`
3. `somewhere-over-the-rainbow`

**Step 3: Build the site**

Run: `npm run build`
Expected: Astro exits successfully and generates the song and show routes without content-reference errors.

**Step 4: Review the diff**

Run: `git diff --check && git diff -- src/content/songs/somewhere-over-the-rainbow.md src/pages/catalogue/shows/shows.ts`
Expected: no whitespace errors; the diff contains only the new song and setlist content.
