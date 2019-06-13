import * as React from 'react';
import { useAppState } from '@tvruta/app';

interface AppProps {}

export function App(props: AppProps) {
  const state = useAppState();

  return <div onClick={() => state.alert('Tjeeenare!')}>Example</div>;
}
