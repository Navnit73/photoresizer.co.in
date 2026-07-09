---
name: PhotoResizer.co.in
description: Fast, simple, browser-based image editing utilities
colors:
  bg-root: "#f8fafc"
  bg-card: "rgba(255, 255, 255, 0.7)"
  bg-input: "rgba(241, 245, 249, 0.8)"
  text-main: "#0f172a"
  text-muted: "#64748b"
  border-subtle: "rgba(226, 232, 240, 0.8)"
  accent-main: "#2563eb"
  accent-hover: "#1d4ed8"
  accent-muted: "rgba(37, 99, 235, 0.1)"
typography:
  body:
    fontFamily: "var(--font-geist-sans)"
  label:
    fontFamily: "var(--font-geist-mono)"
rounded:
  xl: "0.75rem"
spacing:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-main}"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.accent-main}"
    rounded: "{rounded.xl}"
    padding: "8px 16px"
---

# Design System: PhotoResizer.co.in

## 1. Overview

**Creative North Star: "The Invisible Editor"**

The design functions as a clean digital workspace that operates quietly in the background. It is built for speed and effortless completion of image editing tasks, treating utility and reliability as paramount. The interface stays out of the way so the user can focus entirely on the image and the final result.

This system rejects heavy drop shadows, excessive glassmorphism, or futuristic "AI" styling. It is a trusted, professional document-handling tool, not a playful or overly decorated app. 

**Key Characteristics:**
- **Fast:** Users finish their task quickly without friction.
- **Clear:** Anyone can understand the interface instantly.
- **Trustworthy:** Professional styling suited for official document processing.

## 2. Colors

The palette is clean and professional, anchored by a reliable blue accent against a neutral, high-contrast canvas.

### Primary
- **Trust Blue** (#2563eb): Used for primary actions (buttons) and selected states. It represents security, accuracy, and professional document handling.

### Neutral
- **Background Root** (#f8fafc): The light, clean canvas that supports the editor.
- **Text Main** (#0f172a): High-contrast ink for all primary readability.
- **Text Muted** (#64748b): Secondary information and helper text.
- **Subtle Border** (rgba(226, 232, 240, 0.8)): Gentle structural separation.

**The Utility Palette Rule.** Colors must never distract from the image being edited. Trust Blue highlights the next action; everything else should remain strictly neutral.

## 3. Typography

**Body Font:** var(--font-geist-sans) (Geist Sans)
**Label/Mono Font:** var(--font-geist-mono) (Geist Mono)

**Character:** A crisp, modern, and highly legible system optimized for clear instruction and functional interfaces.

### Hierarchy
- **Body** (normal): All general instructions, descriptions, and structural copy.
- **Label** (medium/semibold): Button labels, form field titles, and technical data.

**The Instant Comprehension Rule.** Keep typography sizes generous for mobile legibility, maintaining a clear contrast between headings and instructional copy.

## 4. Elevation

The foundation stays clean and flat, relying on light shadows and soft borders only to lift interactive elements above the canvas.

### Shadow Vocabulary
- **Subtle Lift** (`box-shadow: 0 4px 12px rgba(0,0,0,0.05)`): Applied to cards and preview panels to gently separate them from the background.
- **Glow** (e.g., upload zones): Soft glowing animations specifically to draw attention to the primary drop zone without relying on heavy structural shadows.

**The Flat-By-Default Rule.** Use elevation sparingly. Keep the workspace flat, applying depth only to actionable areas like upload zones, pricing cards, and result states.

## 5. Components

Components are soft and approachable, with rounded corners that remain professional without feeling playful.

### Buttons
- **Shape:** Rounded xl (0.75rem). Instantly recognizable and touch-friendly for mobile.
- **Primary:** Trust Blue background with white text, generously padded (`12px 24px`).
- **Hover / Focus:** Deepens to a darker blue (`#1d4ed8`), transitioning smoothly.
- **Secondary:** Muted blue background (`rgba(37, 99, 235, 0.1)`) with Trust Blue text for alternative actions.

### Cards / Containers
- **Corner Style:** Rounded (0.75rem) to match buttons.
- **Background:** Solid white or slightly translucent (glassmorphism) over the neutral background.
- **Shadow Strategy:** Subtle lift; flat by default unless elevated for focus.
- **Border:** Soft subtle border (`rgba(226, 232, 240, 0.8)`).

### Upload Zones
- **Style:** Clear bordered areas that may utilize soft, glowing animations (`upload-glow`) to invite interaction.

## 6. Do's and Don'ts

### Do:
- **Do** maintain extreme simplicity so users understand what to do in 5 seconds.
- **Do** make primary action buttons large, touch-friendly, and clearly visible.
- **Do** use simple language aimed at non-technical users.
- **Do** ensure strong color contrast (WCAG 2.1 AA) for all text against backgrounds.

### Don't:
- **Don't** use overly complex professional editor interfaces with too many panels, sliders, and controls.
- **Don't** use dark/heavy AI-looking designs or neon accents.
- **Don't** clutter the UI with many competing buttons.
- **Don't** use fake glossy gradients everywhere or heavy drop shadows.
- **Don't** make the interface look like an old, cheap online converter website.
