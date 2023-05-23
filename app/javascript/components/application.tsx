import * as React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (<div>Hello, Rails 7!</div>);
};

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const root = createRoot(rootEl);
  root.render(<App />);
});