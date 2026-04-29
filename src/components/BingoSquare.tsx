import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded-md transition-all duration-200 select-none min-h-[60px] text-xs leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-bingo/30 border-bingo text-bingo shadow-[0_0_18px_rgb(214_182_105_/_33%)]'
      : 'bg-marked border-marked-border text-accent-light'
    : 'bg-surface text-text border-border hover:border-accent active:bg-soft';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm tracking-[0.08em]' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} focus-visible:border-accent-light disabled:cursor-default`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-marked-border text-xs">✓</span>
      )}
    </button>
  );
}
