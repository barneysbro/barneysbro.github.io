---
name: Barneysbro City Route Atlas
description: A civic-wayfinding design system for seven focused everyday apps.
colors:
  signal-yellow: "#ffd21c"
  municipal-blue: "#1436b8"
  route-mint: "#8fe3bd"
  route-orange: "#ff9869"
  route-red: "#ef4661"
  route-blue: "#4566dd"
  route-forest: "#2f7d64"
  route-periwinkle: "#86a9e8"
  transit-ink: "#101722"
  cool-paper: "#f3f6f4"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Anybody, Noto Sans TC, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Noto Sans TC, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.75
  label:
    fontFamily: "Anybody, Noto Sans TC, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  square: "0"
  icon-sm: "11px"
  icon-lg: "17px"
spacing:
  xs: "8px"
  sm: "18px"
  md: "34px"
  lg: "7vw"
components:
  action:
    backgroundColor: "transparent"
    textColor: "{colors.transit-ink}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
    height: "50px"
  action-dark:
    backgroundColor: "{colors.transit-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
    height: "50px"
---

# Design System: Barneysbro City Route Atlas

## Overview

**Creative North Star: "The City Route Atlas"**

Barneysbro behaves like a piece of civic wayfinding rather than a generic software landing page. Saturated route fields divide the portfolio into real destinations, hard rules establish direction, and product screenshots are treated as the evidence at each stop. The system is direct, public-facing, and energetic without becoming decorative chrome.

The interface alternates high-density product proof with decisive quiet fields. Its memorable device is the route: persistent on wide screens, translated into horizontal station and screenshot rails on narrow screens. Motion draws attention along that route and never withholds content.

**Key Characteristics:**
- Full-width municipal color fields, not cards on a neutral canvas.
- Oversized compressed wayfinding headlines.
- Real App screenshots at product scale.
- Square actions, hard rules, circular route stations.
- Flat by default; depth belongs to physical product plates only.

## Colors

The full palette assigns a distinct, saturated field to each urban destination while Signal Yellow and Municipal Blue carry the studio identity.

### Primary
- **Signal Yellow:** Studio and HKBUS field; high-energy first viewport and brand continuity.
- **Municipal Blue:** Hero emphasis and primary civic-information accent.

### Secondary
- **Route Mint:** Waste-collection information field.
- **Route Orange:** Taipei transport field.
- **Route Red:** Singapore transport field.
- **Route Blue:** London transport and contact fields.
- **Route Forest:** RainCam traffic-camera field.
- **Route Periwinkle:** Quick Copy utility field.

### Neutral
- **Transit Ink:** Primary text, hard rules, actions, and dark studio surface.
- **Cool Paper:** Navigation, footer, and legal-page ground.
- **White:** Text and controls on dark or Route Blue fields.

**The Whole Field Rule.** Route colors own entire sections. Do not reduce them to tiny accent chips on white cards.

**The Contrast Pair Rule.** Transit Ink sits on yellow, mint, orange, and red; white sits on deep blue and ink.

## Typography

**Display Font:** Anybody with Noto Sans TC fallback  
**Body Font:** Noto Sans TC  

**Character:** Display type is wide, blunt, and sign-like. Tight line height and restrained negative tracking create route-poster density; body text stays calm and highly readable.

### Hierarchy
- **Display** (760, up to 6rem, 0.94–0.96): first-viewport and section statements.
- **Title** (700+, 1.15–1.8rem): principles, brand, and mobile navigation.
- **Body** (500, 1rem, 1.75): product explanation with roughly 65–75 characters per line.
- **Label** (780, 0.78rem, 0.08em): locations and route abbreviations; uppercase only for short Latin labels.

**The Sign Before Caption Rule.** Headings carry the message directly. Do not add decorative eyebrow copy above them.

## Layout

Wide product sections use a two-part atlas spread: a sticky explanatory column and a larger three-plate proof field. The hero uses the same split, then places a seven-stop lineup across its lower edge. Section boundaries are full-width one-pixel rules.

At 800px and below, every split becomes a single reading column. Persistent route navigation becomes a two-column App lineup so every name remains visible; screenshot proof becomes a horizontal snap rail. At 320px the document remains contained while the screenshot rail scrolls locally.

Spacing alternates compact internal groups with large section separation. Product sections use viewport-relative padding on wide screens and 22px page gutters on phones.

## Elevation & Depth

The system is flat by default. Hard rules and adjacent color fields establish structure; soft, downward ambient shadows are reserved for App icons and screenshot plates so the real products appear physically placed on the atlas.

**The Proof Casts the Shadow Rule.** Navigation, text containers, and content fields stay flat. Only product evidence receives elevation.

## Shapes

Actions and information fields are square. Route stops are circles because they carry a real map function, while App icons retain their native rounded silhouettes. Screenshot plates use their rectangular source edges with a one-pixel keyline.

## Components

### Actions
- **Shape:** square with a two-pixel border and a minimum 50px height.
- **Primary:** Transit Ink fill on light fields; transparent outlined actions inside product sections.
- **Hover / Focus:** invert to Transit Ink and white, move upward by 2px, and retain the global three-pixel blue focus ring.

### Navigation
- **Wide:** fixed Cool Paper/Signal Yellow bar, restrained text links, outlined language control.
- **Mobile:** full-height Signal Yellow menu with large ruled links and an explicit two-line menu button.
- **Route progress:** circular station codes connected by a three-pixel line; current location receives the section color and `aria-current`.

### App Lineup
A seven-stop, ruled strip with native App icons, product name, and region. It becomes a two-column ruled grid on mobile rather than shrinking or truncating labels.

### Product Gallery
- Three portrait screenshot plates form the proof field. On wide screens the outside plates shift vertically to create route rhythm; on mobile they become a local horizontal snap rail.

## Do's and Don'ts

### Do:
- **Do** give each App an entire route-color field and real screenshot proof.
- **Do** preserve the one-pixel civic rule language and square controls.
- **Do** translate persistent desktop structures into local horizontal rails on mobile.
- **Do** keep content visible when JavaScript or motion is unavailable.

### Don't:
- **Don't** wrap the portfolio in same-size white feature cards.
- **Don't** use gradients, glass panels, emoji controls, or generic icon tiles as substitutes for product evidence.
- **Don't** add unverified ratings, download totals, versions, or feature claims.
- **Don't** animate every section identically; motion should explain progress through the route.
