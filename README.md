# Hannah Elise – Portfolio & Media Kit (v2)

Rebuilt version of the original AI Studio project. Same design, same two views
(Pitch Deck board + Website), same animations, cleaner code.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + production build to dist/
```

## Edit content
- `src/data/content.ts` – every text block, stat, package, experience entry, contact detail
- `src/data/images.ts` – every image URL (swap in your own photos / thumbnails)
- `src/index.css` – colour tokens (`--color-navy`, `--color-paper`) and fonts

## Contact form
Without configuration the form opens a pre-filled email to `PROFILE.email`.
To POST to a service instead (e.g. Formspree), create `.env.local`:
```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx
```

## Structure
```
src/
  data/            content + images
  context/         UIProvider (all modal state)
  components/
    cover/         CoverArt (scrapbook cover from creative_portfolio_hero.html)
    deck/          SlideFrame, SlideGrid, slides/Slide1..10
    site/          website sections
    modals/        project, reel, booking, rate card, case study, presentation
    layout/        Navbar, DeckToolbar, Footer
    ui/            Modal, Img, CircularText, InquiryForm, PackageCard
  lib/ hooks/      audio synth, useVinyl, useCopy
```
