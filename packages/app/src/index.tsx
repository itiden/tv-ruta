import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { theme } from './config/theme';

import './app.css';

const root = document.getElementById('root');

if (root) {
  window.setTimeout(() => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
      root
    );
  }, 10);
}

export { useAppState } from './App';
