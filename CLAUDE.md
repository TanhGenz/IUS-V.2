# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check + production build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

## Architecture

This is a **tattoo studio portfolio website** for IUS studio, featuring 4 artists: BANH, NAM-N2N, TRINH-REKLEZZ, HIEU.

### Routing (not yet wired)
React Router DOM v7 is installed but routing is not configured in `App.tsx`. Pages are planned as:
- `/` — HomePage
- `/artists` — ArtistPage
- `/gallery` — GalleryPage
- `/flash` — FlashPage
- `/contact` — ContactPage

Each page lives in `src/sections/`. `App.tsx` and `src/Layouts/MainLayout.tsx` are currently empty shells — routing and layout wrapping need to be set up there.

### Styling conventions
Tailwind CSS with these custom tokens (defined in `tailwind.config.js`):
- `bg-Primary` / `text-Primary` → `#FF2020` (red accent)
- `text-secondary` → `#B2B2B2` (grey)
- `font-primary` → `"Helve"` (Helvetica Neue, loaded via `src/styles/global.css`)

All pages use a black background. Color scheme: black + red + grey + white.

### Static assets
- `public/icons/` — logo.png, logo-gray.png, favicon.png
- `public/images/` — tattoo portfolio photos (organized by artist subfolder)
- Images are referenced by path relative to `public/`, e.g. `src="images/icons/logo.png"`

### Data structures
Page-level data (artist lists, gallery filters, contact menu items) is defined as local `const` arrays at the top of each section file. These should eventually be extracted to a shared `src/data/` module when pages are implemented.

### Current state
Most section components (`HomePage`, `FlashPage`, `ArtistPage`, `GalleryPage`, `ContactPage`) are empty `<section>` shells with their data arrays defined but no rendering logic. `Header.tsx` is the most complete component.
