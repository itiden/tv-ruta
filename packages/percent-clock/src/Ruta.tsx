import * as React from 'react';
import styled from 'styled-components';
import { Container } from '@tvruta/components';
import Lottie, { AnimationItem } from 'lottie-web';

import confetti from './confetti.json';

export const Percent = styled.h2`
  margin: 0;
  color: #4f4f4f;
  font-size: 83px;
  text-transform: uppercase;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

const Confetti = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export function Ruta() {
  const [percent, setPercent] = React.useState<number>(0);
  const confettiRef = React.useRef<HTMLDivElement | null>(null);
  const lottie = React.useRef<AnimationItem | null>(null);

  React.useEffect(() => {
    const updatePercent = () => {
      const todayDate = new Date();
      const today = todayDate.getTime();
      const start = new Date(
        new Date(
          todayDate.getUTCFullYear(),
          todayDate.getUTCMonth(),
          todayDate.getDate(),
          8,
          0,
          0
        )
      ).getTime();
      const end = new Date(
        new Date(
          todayDate.getUTCFullYear(),
          todayDate.getUTCMonth(),
          todayDate.getDate(),
          17,
          0,
          0
        )
      ).getTime();
      let percent = Math.floor(((today - start) / (end - start)) * 100);
      if (percent > 100) {
        percent = 100;
      } else if (percent < 0) {
        percent = 0;
      }
      setPercent(percent);
    };

    window.setInterval(() => {
      updatePercent();
    }, 30 * 1000);
    updatePercent();
  }, []);

  React.useEffect(() => {
    if (confettiRef.current && !lottie.current) {
      lottie.current = Lottie.loadAnimation({
        container: confettiRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData: confetti,
      });
    }

    if (lottie.current && percent >= 100) {
      lottie.current.playSegments([0, 127]);
    } else if (lottie.current) {
      lottie.current.goToAndStop(0);
    }
  }, [percent]);

  return (
    <StyledContainer>
      <Percent>{percent}%</Percent>
      <Confetti ref={confettiRef} />
    </StyledContainer>
  );
}
