<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>

## 2026-05-07 (latest)
- Removed all heart-logo-gradient.png IMG elements from: CouponCard.tsx (logoSrc span), Hero/index.tsx (3 coupon cards + Book Service card), ServicesSection/index.tsx (Book Service card)
- CouponCard.tsx: removed the entire logoSrc <span><img> block from the component template
- Hero/index.tsx: removed 3 inline logo spans from coupon cards and 1 from the services "Book Service" tile
- ServicesSection/index.tsx: cleared imageSrc prop to empty string on Book Service ServiceCard
- Previously: replaced all servicebyheart.com and animaapp asset background/photo images in Hero/index.tsx with Unsplash service photos

## 2026-05-06 (latest)
- Removed FooterLogo from FooterMain.tsx; updated copyright in FooterBottom.tsx to "© 2026 E&J Mechanical"
- Added 4 new service pages: HeatingPage.tsx, PlumbingPage.tsx, DrainsPage.tsx, AirConditioningPage.tsx with full content
- Registered all 4 routes in App.tsx (/hvac/heating-services, /plumbing-services, /drains, /hvac/air-conditioning)
- DesktopNavbar.tsx nav links confirmed updated to internal React Router paths for all 4 service pages
- Previous: Rewrote AboutPage.tsx with full real content (was previously placeholder "..."); all sections complete
- All nav/footer "About Us" links already pointed to /about-us (internal React Router); App.tsx routes confirmed correct
- Sections: Hero banner, award banner, Who We Are + video, Full-Service grid, Heart Difference values, Community/Lennox, Careers, Rating badge, Contact CTA
- External links (careers, feel-the-love, service pages) open in new tab with target="_blank"
- Previous: Removed all "Colorado Springs" entries from 7 files

## 2026-05-06
- Replaced restricted `Graphik` font (3 @FONTWARNING blocks) with `Inter` from Google Fonts (400/500/600 weights)
- Removed all `@FONTWARNING` comments from `tailwind.css`
- Added `@import` for Inter Google Fonts in `tailwind.css`; updated `graphik` key in `tailwind.config.js` to use `Inter`
- Added Google Fonts preconnect links to `index.html`

</changelog>
