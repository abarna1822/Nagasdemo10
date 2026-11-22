import { DEFAULT_THEME_ID, STORE_THEMES, type StoreTheme } from '../data/themes';

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '').trim();
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((ch) => ch + ch)
          .join('')
      : clean;
  const num = parseInt(full, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

export function getRelativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getContrastRatio(hexA: string, hexB: string): number {
  const lumA = getRelativeLuminance(hexA);
  const lumB = getRelativeLuminance(hexB);
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}

export function resolveThemeById(id?: string | null): StoreTheme {
  if (id) {
    const found = STORE_THEMES.find((t) => t.id === id);
    if (found) return found;
  }
  return (
    STORE_THEMES.find((t) => t.id === DEFAULT_THEME_ID) ?? STORE_THEMES[0]
  );
}

export function buildThemeCssVars(theme: StoreTheme): Record<string, string> {
  const { colors } = theme;
  return {
    '--theme-canvas': colors.canvas,
    '--theme-paper': colors.paper,
    '--theme-primary': colors.primary,
    '--theme-deep': colors.deep,
    '--theme-mid': colors.mid,
    '--theme-obsidian': colors.obsidian,
    '--theme-script': colors.script,
    '--theme-highlight': colors.highlight,
    '--theme-ink': colors.ink,
    '--theme-stone': colors.stone,
    '--theme-tint': colors.tint,
    '--theme-mist': colors.mist,
    '--theme-hero-wash': colors.heroWash,
    '--theme-paper-grain': colors.paperGrain,
  };
}

export function applyThemeToDocument(
  theme: StoreTheme,
  root?: HTMLElement | null
): void {
  const target =
    root ?? (typeof document !== 'undefined' ? document.documentElement : null);
  if (!target) return;
  const vars = buildThemeCssVars(theme);
  for (const [prop, val] of Object.entries(vars)) {
    target.style.setProperty(prop, val);
  }
  target.dataset.themeId = theme.id;
}

export function readInitialThemeId(): string {
  if (typeof window === 'undefined') return DEFAULT_THEME_ID;
  try {
    const fromStorage = window.localStorage.getItem('nagas_theme_id');
    if (fromStorage && STORE_THEMES.some((t) => t.id === fromStorage)) {
      return fromStorage;
    }
  } catch {
    // Ignore storage errors
  }
  return DEFAULT_THEME_ID;
}
