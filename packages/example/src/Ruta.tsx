import * as React from 'react';
import { useAppState } from '@tvruta/app';

interface RutaProps {}

export function Ruta(props: RutaProps) {
  const state = useAppState();

  return <div onClick={() => state.alert('example')}>example Ruta</div>;
}
