# Changelog: Pilates studio page

**Site version:** 1.6.0 (was 1.5.0)
**Date:** 2026-10-13
**Branch:** `pilates-page`

## What changed

| File | Status | Change |
|---|---|---|
| `src/pages/PilatesPage.jsx` | New | The page at `/pilates`: hero, how it works, private vs duet, pricing, instructor, studio gallery, who it's for, policies, testimonials, final booking band. |
| `src/data/pilates.js` | New | All page copy, prices, photo slots and the booking link. **This is the only file you edit to swap in real content.** |
| `public/pilates/wallpaper-1600.webp`, `wallpaper-800.webp` | New | Web-sized crops of the room's wallpaper photo, used darkened behind the hero and final booking band. |
| `tailwind.config.js` | Edited | Added the studio palette (`pilates-ink`, `pilates-gold`, `pilates-teal`, `pilates-mist`, `pilates-cream`, etc.) and a `display` serif font (Cormorant Garamond). |
| `src/App.jsx` | Edited | Added the `/pilates` route. |
| `src/components/MobileStickyCTA.jsx` | Edited | On `/pilates`, the phone's bottom bar shows "Book Intro · $50" + "Text" in the studio colors. Every other page is unchanged. |
| `package.json` | Edited | Version 1.5.0 → 1.6.0. |

## Palette (sampled from the wallpaper)

| Token | Hex | Used for |
|---|---|---|
| `pilates-ink` | `#12142A` | Page background (the wallpaper's navy) |
| `pilates-ink-2` | `#191C36` | Alternating section background, cards |
| `pilates-gold` | `#D6A24E` | Buttons, prices, accents (the leopards) |
| `pilates-teal` / `-light` | `#4F8496` / `#86AEBB` | Secondary accents (the teal leaves) |
| `pilates-mist` | `#C5D3D6` | Body text (the pale blue leaves) |
| `pilates-cream` | `#F3EAD9` | Headings (the cream lotus) |

## Still placeholder (all in `src/data/pilates.js`)

- `PILATES_BOOK_URL`: currently the general schedule. Replace with the Intro session's "Direct booking URL" from WellnessLiving.
- Studio name/tagline ("The Room" / "A Contrology Practice") pending Liz's final pick.
- Hero intro line, Private/Duet descriptions, Liz's bio + credentials, reformer make & model and description, "who it's for" list, 3 testimonials.
- 5 photos: Liz headshot (4:5), room wide (3:2), reformer detail (square), Liz cueing (square), duet in session (3:2). Each placeholder frame says which shot goes there. Drop the file in `public/pilates/` and set `src` on that slot.

## Not changed

- The page is **not** in the header nav, footer, or `sitemap.xml` yet, so it's reachable only by typing `/pilates`. Add the nav link at launch.
