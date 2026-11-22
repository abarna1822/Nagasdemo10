import { useEffect, useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useThemeStudio } from '../store/ThemeContext';

export function ThemeSwitcher() {
  const { themes, activeTheme, selectTheme } = useThemeStudio();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-5 sm:left-5 z-[115]">
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Choose color theme"
          className="mb-3 w-[min(calc(100vw-2rem),360px)] max-h-[min(76vh,520px)] flex flex-col rounded-2xl bg-paper border border-ink/15 shadow-[0_24px_60px_rgba(20,16,12,0.28)] overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-brand-deep text-cream flex items-center justify-between gap-3">
            <h2 className="font-display text-base font-bold text-paper leading-tight">
              Color Themes
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close color themes"
              className="p-1.5 rounded-full text-cream/80 hover:text-paper hover:bg-paper/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Palette List */}
          <div
            role="radiogroup"
            aria-label="Storefront color options"
            className="flex-1 overflow-y-auto p-3 space-y-2 bg-cream/65"
          >
            {themes.map((theme) => {
              const isSelected = theme.id === activeTheme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => selectTheme(theme.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-paper border-brand-primary ring-2 ring-brand-primary/25 shadow-sm'
                      : 'bg-paper/85 border-ink/10 hover:border-ink/25 hover:bg-paper'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display text-sm font-bold text-ink leading-snug">
                        {theme.name}
                      </span>
                      {isSelected && (
                        <span className="px-1.5 py-0.5 rounded bg-brand-primary text-paper text-[10px] font-semibold uppercase tracking-wider">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-[11.5px] text-ink/65 truncate mt-0.5">
                      {theme.tagline}
                    </p>
                  </div>

                  {/* 4-dot swatch preview */}
                  <div
                    className="flex items-center -space-x-1 shrink-0"
                    aria-hidden="true"
                  >
                    {[
                      theme.colors.deep,
                      theme.colors.primary,
                      theme.colors.highlight,
                      theme.colors.canvas,
                    ].map((hex, idx) => (
                      <span
                        key={`${theme.id}-${idx}`}
                        className="w-5 h-5 rounded-full border border-ink/20 shadow-xs"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Compact Trigger Pill */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`Change color theme (current: ${activeTheme.name})`}
        className="inline-flex items-center gap-2.5 pl-3 pr-3.5 py-2.5 rounded-full bg-paper text-ink border border-ink/15 shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
      >
        <Palette className="w-4 h-4 text-brand-primary shrink-0" />
        <span
          className="hidden sm:flex items-center -space-x-1 shrink-0"
          aria-hidden="true"
        >
          <span
            className="w-3.5 h-3.5 rounded-full border border-paper"
            style={{ backgroundColor: activeTheme.colors.deep }}
          />
          <span
            className="w-3.5 h-3.5 rounded-full border border-paper"
            style={{ backgroundColor: activeTheme.colors.primary }}
          />
          <span
            className="w-3.5 h-3.5 rounded-full border border-paper"
            style={{ backgroundColor: activeTheme.colors.highlight }}
          />
        </span>
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          <span className="sm:hidden">Colors</span>
          <span className="hidden sm:inline">{activeTheme.shortLabel}</span>
        </span>
      </button>
    </div>
  );
}
