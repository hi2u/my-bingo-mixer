# AGENTS

## Mandatory Development Checklist
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run test

If a change touches only documentation or workshop markdown, mention validation was skipped and why.

## Purpose
React + TypeScript + Vite social bingo game plus workshop content for agent-driven workflows.

## Quick Start
1. npm install
2. npm run dev
3. Open http://localhost:5173/

## Project Map
- App shell and routing by game state: [src/App.tsx](src/App.tsx)
- Game state orchestration and persistence: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)
- Pure game logic and win detection: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Logic tests: [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)
- UI building blocks: [src/components](src/components)
- Domain types: [src/types/index.ts](src/types/index.ts)
- Tailwind v4 theme tokens: [src/index.css](src/index.css)
- Build and test config: [vite.config.ts](vite.config.ts), [package.json](package.json)

## Code Conventions
- Keep bingo rules and board calculations in pure functions under [src/utils](src/utils).
- Keep side effects, localStorage, and UI transitions in [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts).
- Preserve immutability in board updates and state transitions.
- Reuse/extend domain types from [src/types/index.ts](src/types/index.ts).
- Keep component props explicit and typed.

## Tailwind + Frontend
- Tailwind is v4 and CSS-first via `@theme` in [src/index.css](src/index.css).
- Do not add `tailwind.config.js` unless explicitly requested.
- Reuse existing color tokens before introducing new ones.
- Follow [.github/instructions/frontend-design.instructions.md](.github/instructions/frontend-design.instructions.md) and [.github/instructions/tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md) for design work.

## Testing
- For logic changes in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts), update/add tests in [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts).
- Prefer deterministic tests covering row, column, diagonal, and free-space behavior.
- Use run mode: `npm run test`.

## Deployment Notes
- Vite base path is environment-sensitive in [vite.config.ts](vite.config.ts).
- If `VITE_REPO_NAME` is set, production base is `/<repo>/game/` for GitHub Pages.
- Keep `VITE_REPO_NAME` unset in local dev unless testing Pages path behavior.

## Specialized Agents
- UI review and Playwright-driven UX auditing: [.github/agents/ui-review.agent.md](.github/agents/ui-review.agent.md)
- TDD orchestration flow: [.github/agents/tdd.agent.md](.github/agents/tdd.agent.md)
- Question set generation: [.github/agents/quiz-master.agent.md](.github/agents/quiz-master.agent.md)

## Reference Docs
- Setup and run instructions: [README.md](README.md)
- Workshop flow: [workshop/GUIDE.md](workshop/GUIDE.md)
- Setup lab details: [workshop/01-setup.md](workshop/01-setup.md)
- Contribution policy: [CONTRIBUTING.md](CONTRIBUTING.md)
