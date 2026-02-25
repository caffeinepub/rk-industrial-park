# Specification

## Summary
**Goal:** Improve the navbar brand lockup so "RK INDUSTRIAL PARK" displays on a single line with stronger typographic hierarchy and visual polish.

**Planned changes:**
- Fix the brand name in `Navbar.tsx` to render on a single line (no wrapping from "RK INDUSTRIAL" / "PARK")
- Increase font size and weight of the wordmark, using bold tracked uppercase Inter
- Apply a colour/weight contrast between "RK" and "INDUSTRIAL PARK" (e.g. "RK" in accent blue `#1D4ED8` and "INDUSTRIAL PARK" in white, or a unified strong treatment)
- Ensure the logo icon to the left is properly sized and vertically centred with the wordmark
- Verify the brand lockup does not overflow or clip on desktop, and remains legible on mobile within the collapsed navbar header

**User-visible outcome:** The navbar displays a confident, single-line "RK INDUSTRIAL PARK" brand lockup with clear visual hierarchy and no awkward text wrapping.
