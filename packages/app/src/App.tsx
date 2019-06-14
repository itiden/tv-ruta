import * as React from 'react';
import { getModules } from './services/modules';
import { Grid } from './components/Grid/Grid';

interface AppProps {}

export function App(props: AppProps) {
  const modules = getModules();

  const alertMessage = (message: string) => {
    alert(message);
  };

  return (
    <Context.Provider value={{ alert: alertMessage }}>
      <Grid modules={modules} />
    </Context.Provider>
  );
}

interface ContextState {
  alert(message: string): void;
}

const Context = React.createContext<ContextState | undefined>(undefined);

export function useAppState(): ContextState {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('You must add an Context');
  }

  return context;
}
