import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const root = document.getElementById('root');

if (root) {
  window.setTimeout(() => {
    render(<App />, root);
  }, 10);
}

export { useAppState } from './App';
