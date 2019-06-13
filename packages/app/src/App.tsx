import * as React from 'react';
import { Grid } from '@tvruta/components';

interface AppProps {}

interface Module {
  name: string;
  loader(): React.ReactElement;
  options: {
    grid: [number, number];
  };
}

export function App(props: AppProps) {
  const modules = (window as any).modules as Module[];

  const alertMessage = (message: string) => {
    alert(message);
  };

  return (
    <Context.Provider value={{ alert: alertMessage }}>
      <div>
        {modules.map(({ name, loader: Component, options }) => (
          <Grid key={name} grid={options.grid}>
            <Component />
          </Grid>
        ))}
      </div>
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
