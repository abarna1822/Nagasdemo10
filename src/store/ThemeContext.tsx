import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { STORE_THEMES, type StoreTheme } from '../data/themes';
import {
  applyThemeToDocument,
  readInitialThemeId,
  resolveThemeById,
} from '../utils/theme';

interface ThemeContextValue {
  themes: StoreTheme[];
  activeTheme: StoreTheme;
  selectTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeThemeId, setActiveThemeId] = useState<string>(() =>
    readInitialThemeId()
  );

  const activeTheme = resolveThemeById(activeThemeId);

  useEffect(() => {
    applyThemeToDocument(activeTheme);
    try {
      window.localStorage.setItem('nagas_theme_id', activeTheme.id);
    } catch {
      // Ignore storage failures in restricted frames
    }
  }, [activeTheme]);

  const selectTheme = (id: string) => {
    const resolved = resolveThemeById(id);
    setActiveThemeId(resolved.id);
    applyThemeToDocument(resolved);
  };

  return (
    <ThemeContext.Provider
      value={{
        themes: STORE_THEMES,
        activeTheme,
        selectTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeStudio(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeStudio must be used inside ThemeProvider');
  }
  return ctx;
}
