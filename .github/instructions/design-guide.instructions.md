---
description: Use when designing, redesigning, or polishing Bingo Mixer UI. Enforces the project's Dark Mode Noir design direction with Tailwind v4 patterns and clear quality gates.
applyTo: "src/**/*.{tsx,css}"
---

# Design Guide: Dark Mode Noir

Preferred visual direction for this project is Dark Mode Noir. Treat it as the default starting point, but allow other aesthetics when the user asks for them.

## Core Direction
- Prioritize atmosphere and contrast: deep dark surfaces, restrained highlights, and crisp text hierarchy.
- Keep copy and gameplay behavior unchanged unless explicitly requested.
- Avoid generic UI output: no default-feeling layouts, timid palettes, or interchangeable component styling.

## Typography
- Use expressive pairings for display vs body text.
- Do not default to Arial, Inter, Roboto, or plain system-only stacks.
- Make headings cinematic and intentional; keep body text highly readable.

## Color System
- Use CSS variables with Tailwind v4 token mapping.
- Prefer a dominant dark base with 1-2 accent channels for states (for example, cool accent for interaction and warm accent for wins).
- Keep state colors distinct for: idle, hover, active, marked, winning, disabled, and focus-visible.

## Motion and Atmosphere
- Use a small number of high-impact animations.
- Favor entrance choreography and state-transition clarity over constant micro-animations.
- Build depth with layered gradients, subtle textures, and selective glow.

## Tailwind v4 Rules
- Use CSS-first setup and token mapping with @theme and @theme inline.
- Keep runtime values in :root and theme classes (for example .dark).
- Keep tokens flat and reusable; avoid ad hoc one-off color literals when a token is appropriate.

## Component-Level Expectations
- Start and game shells should feel cohesive and intentional, not utility-first rough drafts.
- Interactive controls must have obvious hover, active, and focus-visible feedback.
- Board states must remain instantly scannable on mobile and desktop.
- Celebration moments (like bingo) should be visually dramatic but still readable and performant.

## Accessibility and QA Gates
- Maintain strong contrast in both dark and light themes when a toggle exists.
- Preserve keyboard navigation and visible focus treatment.
- Verify responsiveness for mobile and desktop layouts.
- Run project checks after UI edits:
  - npm run lint
  - npm run build
  - npm run test

## Definition of Done
A design task is complete only when:
- Visual direction clearly matches the requested aesthetic (Dark Mode Noir by default).
- UI feels custom to Bingo Mixer, not template-like.
- Interactions are clear and accessible.
- Required lint, build, and test checks pass.
