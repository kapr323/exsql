import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('✅ main.tsx byl načten');
const container = document.getElementById('root');
if (container) {
  console.log('✅ renderuji React komponentu');
  createRoot(container).render(<App />);
}
