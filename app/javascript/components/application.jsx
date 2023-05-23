import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const root = createRoot(rootEl);
  root.render(<App />);
});