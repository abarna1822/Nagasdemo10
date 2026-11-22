import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_THEME_ID, STORE_THEMES } from '../data/themes';
import {
  buildThemeCssVars,
  getContrastRatio,
  resolveThemeById,
} from './theme';

test('resolveThemeById resolves valid IDs and falls back to default', () => {
  const bronze = resolveThemeById('tanjore-bronze');
  assert.equal(bronze.id, 'tanjore-bronze');

  const fallback = resolveThemeById('does-not-exist');
  assert.equal(fallback.id, DEFAULT_THEME_ID);

  const emptyFallback = resolveThemeById(null);
  assert.equal(emptyFallback.id, DEFAULT_THEME_ID);
});

test('all brand-new storefront themes pass WCAG contrast thresholds', () => {
  assert.ok(STORE_THEMES.length >= 6, 'Expected at least 6 brand-new palettes');

  for (const theme of STORE_THEMES) {
    const c = theme.colors;
    const inkOnCanvas = getContrastRatio(c.ink, c.canvas);
    const inkOnPaper = getContrastRatio(c.ink, c.paper);
    const primaryOnPaper = getContrastRatio(c.primary, c.paper);
    const paperOnPrimary = getContrastRatio(c.paper, c.primary);
    const canvasOnDeep = getContrastRatio(c.canvas, c.deep);
    const inkOnHighlight = getContrastRatio(c.ink, c.highlight);
    const highlightOnDeep = getContrastRatio(c.highlight, c.deep);
    const scriptOnCanvas = getContrastRatio(c.script, c.canvas);

    assert.ok(
      inkOnCanvas >= 10,
      `${theme.id}: ink/canvas contrast ${inkOnCanvas.toFixed(2)} < 10`
    );
    assert.ok(
      inkOnPaper >= 10,
      `${theme.id}: ink/paper contrast ${inkOnPaper.toFixed(2)} < 10`
    );
    assert.ok(
      primaryOnPaper >= 4.5,
      `${theme.id}: primary/paper contrast ${primaryOnPaper.toFixed(2)} < 4.5`
    );
    assert.ok(
      paperOnPrimary >= 4.5,
      `${theme.id}: paper/primary contrast ${paperOnPrimary.toFixed(2)} < 4.5`
    );
    assert.ok(
      canvasOnDeep >= 8,
      `${theme.id}: canvas/deep contrast ${canvasOnDeep.toFixed(2)} < 8`
    );
    assert.ok(
      inkOnHighlight >= 4.5,
      `${theme.id}: ink/highlight contrast ${inkOnHighlight.toFixed(2)} < 4.5`
    );
    assert.ok(
      highlightOnDeep >= 4.5,
      `${theme.id}: highlight/deep contrast ${highlightOnDeep.toFixed(2)} < 4.5`
    );
    assert.ok(
      scriptOnCanvas >= 3.0,
      `${theme.id}: script/canvas contrast ${scriptOnCanvas.toFixed(2)} < 3.0`
    );
  }
});

test('buildThemeCssVars outputs complete CSS variable dictionary', () => {
  const vars = buildThemeCssVars(resolveThemeById('coastal-slate'));
  assert.equal(vars['--theme-primary'], '#284B63');
  assert.equal(vars['--theme-deep'], '#132634');
  assert.equal(vars['--theme-highlight'], '#E9B349');
  assert.ok('--theme-hero-wash' in vars);
  assert.ok('--theme-paper-grain' in vars);
});
