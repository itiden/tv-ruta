import * as React from 'react';
import styled from 'styled-components';
import { Container } from '@tvruta/components';

export const Percent = styled.h2`
  margin: 0;
  color: #4F4F4F;
  font-size: 83px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

export function Ruta() {
  const [percent, setPercent] = React.useState<number>();
  React.useEffect(() => {
    const updatePercent = () => {
      const todayDate = new Date();
      const today = todayDate.getTime();
      const start = new Date(new Date(todayDate.getUTCFullYear(), todayDate.getUTCMonth(), todayDate.getDate(), 9, 0, 0)).getTime();
      const end = new Date(new Date(todayDate.getUTCFullYear(), todayDate.getUTCMonth(), todayDate.getDate(), 17, 0, 0)).getTime();

      setPercent(Math.round(((today - start) / (end - start)) * 100));
    }

    window.setInterval(() => {
      updatePercent();
    }, 1000 * 60 * 60);
    updatePercent();
  }, []);

  return (
    <StyledContainer>
      <Percent>{percent}%</Percent>
    </StyledContainer>
  );
}
