interface StartScreenProps {
  onStart: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function StartScreen({ onStart, theme, onToggleTheme }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-app-bg text-text overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgb(255_255_255/5%)_96%)] bg-size-[100%_8px]" />
      </div>

      <div className="text-center max-w-sm w-full animate-[fade-in_420ms_ease-out]">
        <div className="flex justify-end mb-4">
          <button
            onClick={onToggleTheme}
            className="text-xs uppercase tracking-[0.22em] px-3 py-2 border border-border rounded bg-card/70 text-muted hover:text-text hover:border-accent-light transition-colors"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <h1 className="text-5xl font-bold text-text mb-3 drop-shadow-[0_0_18px_rgb(214_182_105/28%)]">Bingo Mixer</h1>
        <p className="text-lg text-muted mb-8 tracking-wide">Find your people!</p>
        
        <div className="bg-card/90 rounded-xl p-6 shadow-[0_16px_50px_rgb(0_0_0/25%)] border border-border mb-8 backdrop-blur-sm">
          <h2 className="font-semibold text-text mb-3 text-xl">How to play</h2>
          <ul className="text-left text-muted text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-app-bg font-semibold py-4 px-8 rounded-xl text-lg tracking-[0.08em] uppercase hover:bg-accent-light active:bg-accent-light transition-colors shadow-[0_10px_30px_rgb(0_0_0/30%)]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
