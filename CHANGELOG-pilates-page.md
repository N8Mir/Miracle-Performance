# Changelog: Room 216 (Pilates) page

## 2026-11-05 · MP logo for email (no page change)

**Site version:** unchanged (1.10.0)

| File | Status | Change |
|---|---|---|
| `public/email/mp-logo.png` | New | MP logo on black, 1000px wide, for the WellnessLiving member email header. |

---

## 2026-11-05 · Email images (no page change)

**Site version:** unchanged (1.10.0)

| File | Status | Change |
|---|---|---|
| `public/email/room216-logo.png` | New | Room 216 logo on cream, for the launch email. |
| `public/email/room216-studio.jpg` | New | Room photo cropped 1200×640 for the email header. |
| `public/email/room216-duet.jpg` | New | Duet session photo, 1200×720. |
| `public/email/room216-liz.jpg` | New | Liz portrait, 600×750. |

JPG/PNG because Outlook can't show WebP. These are only used by the WellnessLiving email template and aren't linked from any page.

---

## v1.10.0 · 2026-11-04 · Liz's contact info, Barrel certification

**Site version:** 1.10.0 (was 1.9.1)

| File | Status | Change |
|---|---|---|
| `src/data/pilates.js` | Edited | New `contact` block with Liz's studio contact: (917) 697-2674, room216pilates@gmail.com, @releasewithliz, and her "Can't find a time? No problem" line. "Text" buttons on the page now go to Liz's cell (were the gym's number). Peak Pilates certification now lists Barrel: Mat, Reformer, Cadillac, Chair, Barrel, Spine Corrector. |
| `src/pages/PilatesPage.jsx` | Edited | Liz's contact shows in three places: a one-line "Can't find a time?" under the hero buttons, a "Can't find a time?" card with Text or call / Email / Instagram tiles right after pricing and policies, and the same line in the closing section. Closing button renamed "Text Liz". |
| `src/components/MobileStickyCTA.jsx` | Edited | Phone sticky bar's "Text" button now reads "Text Liz" and texts her cell. |
| `package.json` | Edited | Version 1.9.1 → 1.10.0. |

---

## v1.9.1 · 2026-11-04 · 10-minute reset between clients

**Site version:** 1.9.1 (was 1.9.0)

| File | Status | Change |
|---|---|---|
| `src/pages/PilatesPage.jsx` | Edited | Formats section now says "a 10-minute reset between clients" (was 5), matching the 10-minute gap set on all three Pilates services in WellnessLiving. |
| `package.json` | Edited | Version 1.9.0 → 1.9.1. |

---

## v1.9.0 · 2026-11-04 · Launch: page goes public

**Site version:** 1.9.0 (was 1.8.0)

| File | Status | Change |
|---|---|---|
| `src/data/pilates.js` | Edited | Every "Book" button now goes straight to the Intro Reformer Session in WellnessLiving (its direct booking URL) instead of the general schedule. |
| `src/components/SiteHeader.jsx` | Edited | "PILATES" added to the main nav (desktop and phone menu), after Recovery. The header now switches to the phone menu below 1024px wide and nav labels no longer wrap. It was already overflowing on tablets before this change. |
| `src/components/SiteFooter.jsx` | Edited | "Room 216 Pilates" link added under Redwave Studio. |
| `public/sitemap.xml` | Edited | `/pilates` added so Google can find the page. |
| `package.json` | Edited | Version 1.8.0 → 1.9.0. |

### Still open
- Peak Pilates certification year (not shown on the page until Liz confirms it).

---

## v1.8.0 · 2026-11-04 · Professional photos, no placeholders left

**Site version:** 1.8.0 (was 1.7.2)

| File | Status | Change |
|---|---|---|
| `public/pilates/liz-portrait.webp` + `-800` | New | Liz's portrait from the pro shoot. Fills the instructor photo frame. |
| `public/pilates/room-studio.webp` + `-800` | New | Wide shot of the finished room. Large gallery frame. |
| `public/pilates/liz-laughing.webp`, `ring-box.webp`, `duet-rings.webp` + `-800` | New | Session shots for the two small frames and the wide "duet" frame (replaces the last placeholder). |
| `public/pilates/bridge-band.webp`, `tower-straps.webp`, `room-in-session.webp` + `-800` | New | Three more session shots for a new row under the gallery. |
| `public/pilates/room-wide.webp`, `towers-corner.webp`, `liz-cueing.webp` | Removed | Earlier phone photos, replaced by the pro shoot. Safe to delete from your folder too. |
| `src/data/pilates.js` | Edited | Instructor photo and all 7 gallery photos set, with alt text and focal points. Each photo has an 800px version for phones. |
| `src/pages/PilatesPage.jsx` | Edited | Photos load the smaller file on phones (`srcSet`). Gallery shows a second row when there are more than 4 photos. |
| `package.json` | Edited | Version 1.7.2 → 1.8.0. |

### Still to do before launch
- Swap `PILATES_BOOK_URL` for the Intro session's direct booking link.
- Confirm the Peak Pilates certification year.
- Add the page to the nav and sitemap.

---

## v1.7.2 · 2026-10-29 · Navy wallpaper hero is back

**Site version:** 1.7.2 (was 1.7.1)

| File | Status | Change |
|---|---|---|
| `src/pages/PilatesPage.jsx` | Edited | Hero returns to the original deep navy with the darkened wallpaper pattern behind it. The logo now sits on a framed cream panel (gold hairline border + offset outline, soft shadow) so its navy lettering stays readable. Headline, intro and chips switch to cream; "Book an intro" becomes a cream button. The rest of the page keeps the light theme. |
| `package.json` | Edited | Version 1.7.1 → 1.7.2. |

---

## v1.7.1 · 2026-10-29 · First studio photos

**Site version:** 1.7.1 (was 1.7.0)

| File | Status | Change |
|---|---|---|
| `public/pilates/room-wide.webp` | New | Wide shot of the room: wallpaper wall, arched mirror, both towers. Fills the large gallery frame. |
| `public/pilates/towers-corner.webp` | New | Corner shot of both towers, window and props. Fills the first small frame. |
| `public/pilates/liz-cueing.webp` | New | Liz cueing a client on the reformer. Fills the second small frame. |
| `src/data/pilates.js` | Edited | Gallery slots now point at the three photos, with descriptive alt text and a focal point per photo (`position`). "Duet in session" is still a placeholder. |
| `src/pages/PilatesPage.jsx` | Edited | Photo frames respect each photo's focal point when cropping, so faces aren't cut off. |
| `package.json` | Edited | Version 1.7.0 → 1.7.1. |

### Still placeholder
- Liz headshot and the "Duet in session" photo (coming this weekend).

---

## v1.7.0 · 2026-10-29 · Liz's content, logo, light theme

**Site version:** 1.7.0 (was 1.6.0)

| File | Status | Change |
|---|---|---|
| `src/data/pilates.js` | Edited | Liz's real content: name **Room 216 / A Pilates Practice**, welcome intro, Private and Duet descriptions, bio (certifications pulled out into their own list), equipment (Personal Hour Nano Elite Plus towers + features), "Who is Pilates for?" with the three pillars, and two client testimonials (JW, MB). Booking policy now says sessions open **1 week** out. |
| `src/pages/PilatesPage.jsx` | Rewritten | Light theme to match the logo. Hero shows the logo next to "Welcome to Room 216". Policies moved under pricing. New layouts for certifications, equipment features, the three pillars + closing quote, and two testimonials. Dark wallpaper band kept for the final booking section. |
| `public/pilates/room216-logo-900.webp`, `room216-logo-480.webp` | New | Web-sized copies of Liz's transparent PNG logo. |
| `tailwind.config.js` | Edited | Studio palette replaced with one taken from the logo: warm white `pilates-bg #FBF9F5`, navy `pilates-navy #2E3550`, gold `pilates-gold #A87850` (`pilates-gold-ink #8A5F3A` for small text), powder blue `pilates-sky #E6EFF4`, slate blue `pilates-blue #4D6C80`. All text colors pass WCAG AA contrast. |
| `src/components/MobileStickyCTA.jsx` | Edited | Phone booking bar on `/pilates` recolored to the new palette. |
| `package.json` | Edited | Version 1.6.0 → 1.7.0. |

### Still placeholder
- Photos: Liz headshot + 4 studio shots (frames on the page say which shot goes where).
- `PILATES_BOOK_URL`: still the general schedule; swap for the Intro's direct booking link.
- Peak Pilates certification year: Liz's doc had it as "[2024]" (bracketed), so it's left off until confirmed.

### Edits made to Liz's copy (for her review)
- Bio trimmed and split into two paragraphs; the certification sentences moved to the Certifications list. Fixed "even since" → "ever since".
- "Who is Pilates for?" lightly condensed; all three pillars and her closing line kept word for word.
- First testimonial: "keeps every session" → "keep every session" (grammar).

---

## v1.6.0 · 2026-10-13 · First draft (placeholders)

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
