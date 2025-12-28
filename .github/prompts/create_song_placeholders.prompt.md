---
agent: agent
---

# Create Song Placeholder Files

This prompt helps create placeholder song files for missing songs referenced in
the shows.ts file.

## Context

This repository contains a collection of song chord charts. Songs are stored in
`src/content/songs/` as markdown files with the following structure:

```markdown
---
title: Song Title
---

[UG Chords Link](https://tabs.ultimate-guitar.com/tab/print?app_utm_campaign=Export2pdfDownload&flats=0&font_size=0&id=XXXXXXX&is_ukulele=0&simplified=0&transpose=0)

\`\`\`

\`\`\`
```

The `shows.ts` file references songs by their slug (filename without .md).
TypeScript will error if a slug references a non-existent song file.

## Task

Given a list of song titles/names, create placeholder markdown files for each
song:

1. **Identify missing songs**: Check TypeScript errors in
   `src/pages/catalogue/shows/shows.ts` to find which slugs don't have
   corresponding song files, OR use the provided list of song names.

2. **Search Ultimate Guitar**: For each song:

   - Search [UG Chords Link](https://www.ultimate-guitar.com for the song)
   - Find the **highest rated non-pro version** (look for chords or tabs with
     4-5 star ratings)
   - Extract the tab ID from the URL (the `id=` parameter)
   - **Verify the ID is correct** by checking the song title and artist match

3. **Create placeholder files**: For each song, create a file in
   `src/content/songs/` with:
   - **Filename**: Lowercase, hyphenated slug (e.g., `my-song-name.md`)
   - **Title**: Proper capitalization in frontmatter
   - **Ultimate Guitar URL**: Use the format:
     ```
     [UG Chords Link](https://tabs.ultimate-guitar.com/tab/print?app_utm_campaign=Export2pdfDownload&flats=0&font_size=0&id=XXXXXXX&is_ukulele=0&simplified=0&transpose=0)
     ```
   - **Empty code blocks**: Two empty code blocks where chords will be pasted

## Example

For the song "Lover" by Taylor Swift:

1. Search Ultimate Guitar → Find tab ID `2796355`
2. Create `src/content/songs/lover.md`:

```markdown
---
title: Lover
---

[UG Chords Link](https://tabs.ultimate-guitar.com/tab/print?app_utm_campaign=Export2pdfDownload&flats=0&font_size=0&id=2796355&is_ukulele=0&simplified=0&transpose=0)

\`\`\`

\`\`\`
```

## Important Notes

- Always verify the Ultimate Guitar tab ID matches the correct song and artist
- Use the highest rated non-pro version (avoid official/pro tabs)
- File slugs should match the slug used in shows.ts
- Keep the file format consistent with existing song files
