import * as React from 'react';
import { App } from './App';

function Example() {
  return <App />;
}

// (window as any).loadModule('example', () => <Example />, {
(window as any).loadModule('example', Example, {
  grid: [2, 1],
});

// const root = document.getElementById('example');

// if (root) {
//   const data = root.dataset.data || '';
//   const props = JSON.parse(data);
//   render(<App {...props} />, root);
// }

// if (root) {
//   root.innerHTML = 'EXAMPLE';
// }
