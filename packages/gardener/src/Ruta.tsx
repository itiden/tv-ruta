import * as React from 'react';
import { startOfWeek, differenceInWeeks } from 'date-fns';
import lottie from 'lottie-web';
import { Title } from '../../components/src';
import flower from './flower.json';
import styled from 'styled-components';

const startDate = new Date('2019-02-13');
const startWeek = startOfWeek(startDate);
const gardeners: string[] = [
  'Andreas',
  'Albert',
  'Jens',
  'a n d i',
  'Jakob',
  'Daniel',
];

const Flower = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Name = styled.div`
  position: absolute;
  top: 150px;
  left: 40px;
  font-size: 28px;
  color: #222;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export function Ruta() {
  const now = new Date();
  const weeksPassed: number = differenceInWeeks(now, startWeek);
  const gardener = gardeners[weeksPassed % gardeners.length];
  const flowerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (flowerRef.current) {
      lottie.loadAnimation({
        container: flowerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: flower,
      });
    }
  }, [flowerRef]);

  return (
    <div>
      <Title>Veckans trädgårdsmästare</Title>
      <Name>{gardener}</Name>
      <Flower ref={flowerRef} />
    </div>
  );
}
