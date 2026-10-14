import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/anton/400.css';
import '@fontsource/fredoka/600.css';
import '@fontsource/fredoka/700.css';
import '@fontsource/caveat/600.css';
import '@fontsource/caveat/700.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
