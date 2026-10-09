---
name: 珠海慢遊
description: A quiet coastal gallery with a practical Traditional Chinese travel guide.
colors:
  paper: "#f7f8fb"
  ink: "#302e48"
  muted: "#626578"
  accent: "#55518c"
  soft: "#eaf0f5"
  line: "#d6dce7"
  white: "#fff"
typography:
  display:
    fontFamily: '"Trip Serif", "Noto Serif TC", "PMingLiU", serif'
    fontSize: "clamp(31px, 2.8vw, 43px)"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0.15em"
  headline:
    fontFamily: '"Trip Serif", "Noto Serif TC", "PMingLiU", serif'
    fontSize: "clamp(28px, 3vw, 38px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
  latin-accent:
    fontFamily: '"Trip Latin", Georgia, serif'
    fontSize: "25px"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0.01em"
  body:
    fontFamily: '"Microsoft JhengHei", "PingFang TC", sans-serif'
    fontSize: "14px"
    lineHeight: 1.85
  label:
    fontFamily: '"Microsoft JhengHei", "PingFang TC", sans-serif'
    fontSize: "13px"
    lineHeight: 1.85
rounded:
  square: "0"
spacing:
  compact: "12px"
  inset: "22px"
  group: "24px"
  panel: "30px"
components:
  button-hero:
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "11px 22px"
  button-quiet:
    textColor: "{colors.accent}"
    rounded: "{rounded.square}"
    padding: "8px 14px"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "11px 12px"
  budget-result:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "30px"
---

# Design System: 珠海慢遊

## Overview

**Creative North Star: "A Quiet Coastal Gallery"**

The user-selected VIAJO reference establishes cold blue photographic atmosphere, silver-white reading surfaces, violet navigation, fine serif headings and staggered tall images. The built page translates that composition into an intimate, spacious travel guide; the photographic first view gives way to plain, usable timelines, costs and preparation tools.

This system is extracted from `styles.css`, `index.html` and `app.js`. `PRODUCT.md` supplies the pinned reference; `docs/ASSETS.md` records image and font provenance. The images are AI thematic imagery, explicitly labelled as neither documentary photographs nor geographic guidance. Do not imply an actual venue appearance from these images. The reference informed composition and rhythm; its brand, photographs and source code are not assets of this project.

**Key Characteristics:**
- Cold blue imagery against silver-white reading surfaces.
- Violet controls, thin rules and square content panels.
- Fine Traditional Chinese serif headlines with an italic Latin accent.
- Staggered tall gallery panels and generous reading space.
- Accessible functional states, reduced motion and a print-specific layout.

## Colors

The palette balances cool paper and subdued violet; photographic blue belongs to imagery rather than to a competing interface accent. Frontmatter values are the reused CSS custom properties and remain normative.

### Primary
- **Night Violet** (`accent`): navigation, links, selected dates, checkbox accents, the hotel block and the budget total.

### Neutral
- **Silver Paper** (`paper`): page and expanded mobile navigation background.
- **Violet Ink** (`ink`): principal reading text.
- **Cool Slate** (`muted`): secondary explanations and practical details.
- **Ice Wash** (`soft`): table headings.
- **Mist Rule** (`line`): separators and structural borders.
- **White** (`white`): image-overlay lettering, fields and violet-panel text.

**The Violet Anchor Rule.** Reuse violet for interaction and emphasis; retain the photographic blue as atmosphere.

## Typography

**Display Font:** locally hosted Noto Serif TC Regular 400, aliased as `Trip Serif`; the shipped font is a heading-character subset, with Noto Serif TC and PMingLiU fallbacks. Extend the subset or verify fallback glyphs when adding new headings.

**Latin Accent Font:** locally hosted Cormorant Garamond Italic 400, aliased as `Trip Latin`, with Georgia fallback. The font-face is italic; the introductory English phrase explicitly requests italic.

**Body Font:** Microsoft JhengHei, PingFang TC, sans-serif. The root is 16px; most reading paragraphs explicitly use the frontmatter body role. Both local font files have accompanying OFL licenses in `assets/`.

### Hierarchy
- **Display:** airy Chinese hero heading; desktop metrics are in frontmatter. At 1200px it is 36px; at 767px it is 29px with 1.8 line-height and 0.13em tracking.
- **Headline:** regular serif section headings; mobile size is 27px and tracking tightens to 0.04em.
- **Latin accent:** italic opening phrase, reduced to 22px on mobile.
- **Title:** timeline titles use sans-serif (18px, weight 500); day banners use the local serif (28px), reducing to 23px on mobile.
- **Body:** calm sans-serif reading, typically 14px with inherited 1.85 line-height; timeline reading becomes 13px on mobile.
- **Label:** functional controls commonly use 13px. Tiny decorative annotations are not reusable reading-text roles.

**The Reading Voice Rule.** Use the local serif for major Chinese headings and sans-serif for instructions and practical details.

## Layout

The desktop has a fixed left rail (180px), a content container capped at 1200px and side insets of 66px. The hero is a 43%/57% split. Its gallery uses 57%/43% columns with a 27px gap; the first image is 535px tall and its companion 448px with an 88px downward offset. At 1700px, images grow to 610px/510px and the gap to 40px. These are the signature composition, not a generic card grid.

Reading sections use 82px block spacing, thin separators and small, explicit grids: three food columns; paired budget, crossing and checklist layouts; a 90px time column with a 26px gap. Reused compact and panel spacing is recorded in frontmatter; avoid inventing an unrelated spacing system.

At 1200px and below, the rail becomes a fixed 76px top bar with a 44px menu trigger and an expandable three-column navigation; container insets become 48px. At 767px and below, the bar is 68px, navigation is two columns, container insets are 24px, reading sections use 52px spacing and most practical grids stack. The hero retains one 330px tall gallery panel, offset 60px from its left edge, with vertical circular controls. Wide data tables scroll horizontally rather than shrinking columns. Print replaces the interactive day panel with all days and removes the photographic hero and controls.

**The Staggered Gallery Rule.** Preserve the tall unequal image pair on desktop and its single-panel mobile counterpart.

## Elevation & Depth

There are no box shadows. Depth comes from image cropping, a dark directional hero overlay, caption gradients, the fade from imagery into paper and restrained tonal panels. Fine borders organize reading surfaces. The fixed navigation uses a nearly opaque paper background on smaller screens; it does not introduce a glass or shadow system.

## Shapes

Content panels, images, buttons and fields have square corners. Circular gallery controls are the deliberate exception (52px desktop; 42px mobile). Thin 1px rules and restrained outlined controls establish the form language. Directional icons are inline SVG strokes using current text color, rounded caps and joins; they are not text glyph icons.

## Components

### Buttons

The hero action is transparent, white, square and outlined with a pale border; its padding is in frontmatter. Hover adds a translucent white wash. Quiet utility buttons use violet text and a muted border with a cool pale hover fill. Buttons move down 1px when pressed. All focusable controls inherit a visible violet outline (3px, offset 5px).

### Navigation

The desktop rail stacks five centered Chinese links with secondary English translations and generous vertical gaps (27px). Link hover deepens the text. The compact layout uses the two-stroke menu icon, `aria-expanded` and `aria-controls`; selecting a link collapses it. Small English translations support the visual reference but do not define a future minimum text size.

### Date Selector and Timeline

Four flat date buttons share a bottom rule; the selected button receives a violet 2px underline and text. Hover adds a pale wash. `aria-pressed` expresses selection and the timeline is a polite live region. A square tonal day banner precedes ruled time rows; the practical details use a thin left border. The date change uses a 350ms ease-out arrival from 7px below and opacity 0.6. Rain mode uses a native checkbox with violet accent and replaces the relevant content.

### Fields and Budget Result

Number inputs and selects are square, white and outlined, with minimum height 48px and inherited focus treatment. Labels sit above them. Invalid budget input displays a text alert and replaces the output with an explicit check-input state. The budget result is a flat violet panel with white text and a large regular serif numeric total. The form remains two columns on mobile while the result stacks below it.

### Gallery

Tall links crop images with `object-fit: cover` and place restrained captions over a lower dark gradient. Hover scales an image to 1.035 over 700ms with `cubic-bezier(.2,.65,.3,1)`. Circular previous/next buttons exchange the two images and update the caption, day link and polite counter; there is no autoplay. Gallery imagery retains AI disclosure and meaningful alternative text.

### Checklist, Disclosure and Feedback

Native checkbox rows are divided by fine rules; completed items take the muted text color. Details/summary sections use violet summaries and ruled boundaries. The toast is a flat violet message centered near the lower edge, fades over 200ms and clears after 2600ms. Under reduced-motion preference, smooth scrolling, transitions and animations are disabled.

## Do's and Don'ts

### Do:
- **Do** reuse the cool paper, violet interface accent and fine rules.
- **Do** keep the local font files and their OFL license notices together.
- **Do** maintain visible focus states, native controls and reduced-motion behavior.
- **Do** keep AI image disclosure, alt text and the provenance record with generated imagery.
- **Do** preserve the tall staggered gallery and responsive stacking behavior.

### Don't:
- **Don't** add a competing decorative accent or a generic shadowed card system.
- **Don't** round reading panels or turn every utility action into a filled pill.
- **Don't** describe AI thematic imagery as an actual photograph, venue view or navigation reference.
- **Don't** treat tiny annotations or the one-off logo lettering as reusable readable typography.

Not canonized: the build's 8–11px decorative annotations and image disclaimer are carried as a legibility concern, not a reusable type scale; the Georgia-based ZH logo is not a reusable display-font rule.

