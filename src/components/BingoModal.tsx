interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-card border border-border rounded-xl p-6 max-w-xs w-full text-center shadow-[0_24px_70px_rgb(0_0_0_/_52%)] animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-4xl font-bold text-bingo mb-2 tracking-[0.08em] drop-shadow-[0_0_18px_rgb(214_182_105_/_34%)]">BINGO!</h2>
        <p className="text-muted mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent text-app-bg font-semibold py-3 px-6 rounded-lg active:bg-accent-light hover:bg-accent-light transition-colors tracking-[0.07em] uppercase"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
