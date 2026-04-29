---
name: dogfooder
description: "Critical play-test a running web app as a real user. Use when asked to dogfood, QA, test, review, or give feedback on the app experience. Navigates the live app in a browser, exercises all flows, reads source code for context, then delivers structured honest feedback on fun, UX friction, visual feedback, pacing, and what is missing."
argument-hint: "Optional area to focus on (e.g. 'win flow', 'onboarding', 'mobile')"
---

# Dogfooder — Critical App Play-Tester

## What This Skill Produces

A structured, honest review of the running app from the perspective of a first-time real user. Covers every state in the user journey, rates the fun/UX factor, and gives specific, actionable criticism.

## When to Use

- "Test the app like a real user"
- "Dogfood the app and give me feedback"
- "Play through the game and tell me what's wrong"
- "Give me a UX review"
- "What would a player at a conference think?"

## Procedure

### 1. Connect to the Running App

Check if a browser page is already open. If not, open the app:

```
open http://localhost:5173/   (or the relevant dev server URL)
```

Use `run_playwright_code` with the active `pageId` for all interactions.

### 2. Read the Start Screen

Take a screenshot. Read the page snapshot. Evaluate:
- Is the purpose immediately clear?
- Are instructions visible without scrolling?
- Is the call-to-action obvious?

### 3. Walk Through the Full User Journey

Exercise **every state** in sequence:

| Step | Action | Check |
|------|--------|-------|
| Onboarding | Read start screen | Clarity, hook, first impression |
| Start | Click "Start Game" (or equivalent) | Transition, loading feel |
| Gameplay | Click 3–5 interactive elements | Feedback, animation, delight |
| Mid-game | Attempt something that might fail | Error handling, edge states |
| Win condition | Trigger the win state | Celebration quality, what happens next |
| Post-win | Click continue / dismiss | Dead-ends, next-action clarity |
| Restart | Return to start, play again | Board freshness, reset correctness |
| Destructive path | Click Back/Cancel mid-game | Data loss warnings, UX safety |

Use `run_playwright_code` to click by text or selector:
```js
await page.click('button:has-text("Start Game")');
await page.waitForTimeout(300);
return await page.$$eval('button', els => els.map(el => el.innerText.trim()));
```

### 4. Read the Source Code

Alongside browser testing, read relevant source files to understand *why* things work the way they do:

- **Data/questions**: `src/data/` — volume, variety, staleness
- **Components**: `src/components/` — animation, feedback hooks, disabled states
- **Game hook**: `src/hooks/` — win detection, state machine completeness
- **CSS/theme**: `src/index.css` — visual hierarchy, motion tokens

### 5. Take Screenshots at Key Moments

Capture screenshots at:
- Start screen (first impression)
- Active gameplay (board state)
- Win/celebration modal
- Any unexpected or broken state

### 6. Deliver Structured Feedback

Organize findings under these headings:

#### Major Fun-Killers
Things that actively reduce engagement or delight. Be blunt.

#### UX Friction Points  
Confusion, dead-ends, accidental destructive actions, missing affordances.

#### Visual Feedback Gaps
Missing animation, weak celebrations, unclear state changes.

#### Content Quality
Are the questions/prompts interesting? Too generic? Too niche? Volume sufficient?

#### What Would Make It Actually Fun
Concrete, prioritized list of improvements — not vague suggestions.

## Quality Bar

Good dogfooder feedback is:
- **Specific**: names exact text, UI elements, and flows observed
- **Honest**: no diplomatic softening of real problems
- **Actionable**: each criticism comes with a direction for fixing it
- **Grounded**: references both what was *seen* in the browser and what was *found* in code

## Example Output Structure

```
### The Core Experience is [adjective]
[2-sentence overall verdict]

### Major Fun-Killers
1. [Problem] — [Why it kills fun] — [Fix direction]
...

### UX Friction Points
...

### What Would Make It Actually Fun
1. [Concrete change] — [Expected impact]
...
```
