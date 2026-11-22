import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  applyThemeToDocument,
  readInitialThemeId,
  resolveThemeById,
} from './utils/theme';

applyThemeToDocument(resolveThemeById(readInitialThemeId()));

createRoot(document.getElementById('root')!).render(<App />);
