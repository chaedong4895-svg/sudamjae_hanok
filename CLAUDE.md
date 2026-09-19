# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A Next.js (App Router, TypeScript, Tailwind CSS) marketing + reservation website for **수담재 (Sudamjae)**, a private hanok stay in Yeoju, built from `수담재_웹사이트_PRD.md`. Bilingual (Korean at `/`, English at `/en`), with a hand-rolled availability calendar and a mailto-based direct-inquiry form. Real property photos live in `public/images/`, organized from the source files in `assets/` (see the mapping note in that folder's history — `assets/` itself is not read by the app, it's the original photo drop).

`sudamjae_hanok.md` is the original AI-generated design mockup (raw HTML, PRD's "기준 디자인") kept for historical reference only — it is not part of the running app.

## Commands

```bash
npm run dev      # dev server, http://localhost:3000
npm run build    # production build (also type-checks + lints)
npm run start    # serve the production build
npm run lint     # eslint only
```

There is no test suite yet.

## Architecture

**Locale routing without next-intl.** Korean and English are two parallel route trees that render the same shared components with a different content dictionary — there is no `[locale]` dynamic segment:
- `src/app/page.tsx`, `.../reservation`, `.../terms`, `.../privacy` → Korean (default, no prefix)
- `src/app/en/page.tsx`, `.../en/reservation`, etc. → English, mirroring the Korean tree 1:1

Each page is a thin wrapper that calls `getContent("ko" | "en")` from `src/content` and passes it into a shared page-shell component (`src/components/HomePage.tsx`, `ReservationPage.tsx`, `LegalPage.tsx`). **All copy lives in `src/content/ko.ts` / `src/content/en.ts`**, typed against the single `SiteContent` interface in `src/content/types.ts`. When adding a new section or field, update the interface first, then both dictionaries — TypeScript will flag whichever one you forget. `Header`'s `LanguageSwitch` derives the equivalent URL in the other language from the current pathname (strip/add the `/en` prefix), so switching languages preserves the current page.

**Why not functions in content:** `SiteContent` is passed from Server Components down into Client Components (the reservation UI, the inquiry form). Next.js can't serialize functions across that boundary — if a piece of copy needs interpolation (e.g. the inquiry confirmation message), it's stored as a template string with a placeholder token (`successBodyTemplate` uses `{ref}`) and interpolated client-side, not as a `(x) => string` closure. Keep this pattern for any new interpolated copy.

**Pricing and availability are config files, not a database** (PRD explicitly deferred the admin dashboard/DB to a later phase):
- `src/lib/pricing.ts` — the 10 PRD-specified rate/fee constants and `estimateStay()`, which sums a per-night rate (weekday/weekend × season) over the selected range with no auto multi-night discount, matching the PRD's explicit removal of the old design's discount and ₩50,000 extra-guest fee.
- `src/lib/highSeason.ts` — `HIGH_SEASON_RANGES: {startMonth, startDay, endMonth, endDay}[]` on a recurring month/day basis (operator-confirmed 2026-09-19: summer 7/15–8/24, winter 12/20–2/20, wrapping the year boundary). No year-specific dates to maintain.
- `src/lib/holidays.ts` — `KR_PUBLIC_HOLIDAYS: string[]`, a flat list of Korean statutory holiday dates (substitute holidays included) sourced from public holiday-calendar sites, currently covering 2026–2027. **This needs a yearly top-up** — Seollal, Chuseok and Buddha's Birthday are lunar and shift every year, so add next year's dates before the list runs out (the government usually gazettes them 1–2 years ahead).
- `isWeekendNight()` in `pricing.ts` combines both: Friday/Saturday nights, *or* any night whose next calendar day is in `KR_PUBLIC_HOLIDAYS` ("공휴일 전날 숙박"), get weekend pricing — verified against several real date ranges (holiday-eve Thursdays, the Dec-20 season boundary, etc.) during development; re-verify with the same kind of spot-check if you touch this function.
- `src/lib/availability.ts` — `MANUAL_STATUS_OVERRIDES: Record<ISODate, DateStatus>`, empty by default. The operator hand-edits this file to mark dates `"closed"` or `"inquiry"`; everything else renders as `"available"`. This is the file to change when a booking comes in through Airbnb/Naver and needs to be blocked here too.

**Reservation flow** (`src/components/reservation/`): `ReservationClient` (client component) owns all the state — selected month, check-in/out, guest count, purpose, add-ons — and composes `MonthGrid` (pure rendering of one month, given a `getDayInfo` callback) and `InquiryForm`. Two months render side by side always; the second is hidden below `lg:` via CSS (`hidden lg:block`), not conditional rendering, so there's no hydration mismatch. Airbnb/Naver buttons are permanently disabled with a "coming soon" label because those listing URLs don't exist yet (PRD open item #1/#2) — wire them up once the operator provides real URLs, and only then reconsider the direct-inquiry-only flow.

**Direct inquiry has no backend.** `InquiryForm` validates client-side and on submit builds a `mailto:` link (to `location.email`) prefilled with all the fields, so the visitor's own mail client sends it — this was a deliberate scope cut (see conversation/decision below) to avoid standing up email sending or a database before those are wanted. If that changes, replace the `window.location.href = mailto:...` call with a real API route.

**Images** use `next/image` with `fill` inside an `aspect-[…]` box (`src/components/ui.tsx`'s `AspectImage`) everywhere, never fixed `width`/`height` — this was chosen so layout doesn't shift while images lazy-load, without having to know each photo's exact pixel dimensions up front.

**Cancellation policy** (`src/components/reservation/CancellationPolicy.tsx`, content in `SiteContent.cancellation`) renders on the reservation page at `#cancellation`, with a jump-link from the Pricing section's footnotes. It implements the operator-confirmed KFTC 소비자분쟁해결기준 schedule (separate high/low-season refund tables) for direct bookings; external-channel bookings (Airbnb/Naver) are explicitly called out as following that channel's own policy instead.

## Known gaps vs. the PRD (by design, deferred to a later phase)

Confirmed with the user before building: admin login/dashboard, automated email sending, a real database, and Naver Maps JS API integration were all deferred — see the "일정 관리 방식" and "출시 전 확정 필요사항" sections of `수담재_웹사이트_PRD.md` for the full list. The location section embeds a Naver map (`src/components/NaverMap.tsx`, Maps JS SDK v3 loaded client-side, pin at the fixed `PROPERTY_LAT`/`PROPERTY_LNG` in `LocationSection.tsx` — no Geocoding API needed) when `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID` is set (NCP Application → Maps → Web Dynamic Map; register every domain the site is served from, incl. `http://localhost:3000`, under Web service URL). Without the key, or if SDK auth fails, it falls back to a keyless Google Maps iframe. `map.naver.com` search/directions buttons sit below the map either way. The var is inlined at build time, so redeploy after changing it on Vercel.

## Operating policy (confirmed 2026-09-19, superseding the PRD's placeholders)

The operator confirmed these directly (not from the PRD draft) — they're now baked into the content/lib files above, not just docs:
- High season, weekend definition (incl. holiday-eve rule), VAT-inclusive pricing, check-in/out wording, pet policy (not allowed), parking (on-site, ask ahead for multiple cars), room names (안채/사랑채/다실/다락/대청과 공용공간, English: Anchae/Sarangchae/Tea Room/Attic/Main Hall), and the full cancellation/refund schedule.
- **Still open:** a public phone number (currently blank everywhere — `location.phone` is `""` and every component conditionally hides phone UI when it's falsy; don't hardcode a placeholder number), and the Airbnb/Naver listing URLs (buttons stay disabled with a "coming soon" label until provided). Contact email is `sudamjae_67@naver.com`.
