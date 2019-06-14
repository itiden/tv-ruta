import React from 'react';
import styled from 'styled-components';
import Packery from 'packery';
import { Module } from '../../services/modules';

interface GridProps {
  modules: Module[];
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
  position: absolute;
  overflow: hidden;
`;

const GridContent = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Grid: React.FC<GridProps> = ({ modules }) => {
  const [[columns, rows], itemWidth, itemHeight] = useGridSize();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const pckry = React.useRef<Packery | null>(null);

  React.useEffect(() => {
    if (ref.current && !pckry.current) {
      pckry.current = new Packery(ref.current, {
        itemSelector: '.grid-item',
        gutter: 0,
      });
    }
    if (pckry.current) {
      pckry.current.layout();
    }
  }, [ref, itemWidth, itemHeight]);

  function getItemSize([c, r]: [number, number]) {
    const column = c > columns ? columns : c;
    const row = r > rows ? rows : r;
    return {
      width: Math.round(itemWidth * column),
      height: Math.round(itemHeight * row),
    };
  }

  return (
    <GridContent ref={ref}>
      {modules.map(({ name, component: Component, options }) => (
        <GridItem
          key={name}
          className="grid-item"
          {...getItemSize(options.grid)}
        >
          <Component />
        </GridItem>
      ))}
    </GridContent>
  );
};

type Columns = [number, number];
type GridSize = [Columns, number, number];

function useGridSize(): GridSize {
  const { width, height } = useWindowSize();
  const minItemSize = 350;

  const columns = width / minItemSize;
  const rows = height / minItemSize;
  const itemWidth = Math.round(width / Math.round(columns));
  const itemHeight = Math.round(height / Math.round(rows));

  return [[columns, rows], itemWidth, itemHeight];
}

function useWindowSize(): { width: number; height: number } {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  React.useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  return windowSize;
}
