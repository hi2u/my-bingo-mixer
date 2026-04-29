import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
  theme,
  onToggleTheme,
}: GameScreenProps) {
  return (
    <div className="relative flex flex-col min-h-full bg-app-bg text-text overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgb(214_182_105/20%),transparent_45%)]" />
      </div>

      {/* Header */}
      <header className="relative flex items-center justify-between p-3 bg-surface/90 border-b border-border backdrop-blur-sm">
        <button
          onClick={onReset}
          className="text-muted text-sm px-3 py-1.5 rounded-lg border border-transparent hover:border-border hover:text-text active:bg-soft transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-bold text-text text-xl tracking-[0.08em]">Bingo Mixer</h1>
        <button
          onClick={onToggleTheme}
          className="text-xs uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-lg bg-card border border-border text-muted hover:text-text hover:border-accent-light transition-colors"
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      {/* Instructions */}
      <p className="text-center text-muted text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo/22 border-y border-bingo/45 text-bingo text-center py-2 font-semibold text-sm tracking-[0.09em] animate-[pulse_1.6s_ease-in-out_infinite]">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="relative flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
