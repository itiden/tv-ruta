import * as React from 'react';
import styled from 'styled-components';

interface GridProps {
  grid: [number, number];
  children: React.ReactElement;
}

type GridItemProps = {
  width: number;
  height: number;
};

const GridItem = styled.div<GridItemProps>`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const width: number = window.innerWidth;
const height: number = window.innerHeight;

const itemsWidth: number = width / 3;
const itemsHeight: number = height / 5;

export const Grid: React.FC<GridProps> = ({ grid, ...rest }) => {
  const [gridWidth, gridHeight] = grid;

  const itemWidth = itemsWidth * gridWidth;
  const itemHeight = itemsHeight * gridHeight;

  return <GridItem width={itemWidth} height={itemHeight} {...rest} />;
}
