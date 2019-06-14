import * as React from 'react';
import styled from 'styled-components';

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export function Ruta() {
  return (<Frame src={`https://lunch.itiden.se`} />)
}
