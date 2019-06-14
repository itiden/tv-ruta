import * as React from 'react';
import { startOfWeek, differenceInWeeks } from 'date-fns';
import lottie from 'lottie-web';
import { Title, Text, Container } from '@tvruta/components';
import flower from './flower.json';
import styled from 'styled-components';
import md5 from 'md5';

const startDate = new Date('2019-02-13');
const startWeek = startOfWeek(startDate);
type Gardener = { name: string; email: string };
const gardeners: Gardener[] = [
  { name: 'Andreas', email: 'andreas@itiden.se' },
  { name: 'Albert', email: 'albert@itiden.se' },
  { name: 'Jens', email: 'jens@itiden.se' },
  { name: 'a n d i', email: 'andi@itiden.se' },
  { name: 'Jakob', email: 'jakob@itiden.se' },
  { name: 'Daniel', email: 'daniel@itiden.se' },
];

const Flower = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: -40px;
  right: -40px;
`;

const AvatarCircle = styled.div<{ bg: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${p => p.bg});
  margin-right: ${p => p.theme.space['4']};
`;

const Avatar: React.FC<{ email: string }> = ({ email }) => {
  const gravatar = getGravatar(email, 80);
  return <AvatarCircle bg={gravatar} />;
};

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space['8']};
`;

export function Ruta() {
  const [gardener, setGardener] = React.useState<Gardener | null>(null);
  const timeout = React.useRef<number | null>(null);
  const flowerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function updateGardener() {
      const now = new Date();
      const weeksPassed: number = differenceInWeeks(now, startWeek);
      const newGardener = gardeners[weeksPassed % gardeners.length];

      setGardener(newGardener);

      timeout.current = window.setTimeout(() => {
        updateGardener();
      }, 60 * 1000);
    }

    updateGardener();

    return () => {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }
    };
  }, []);

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
    <Container>
      <Title>Veckans trädgårdsmästare</Title>
      {gardener && (
        <Content>
          <Avatar email={gardener.email} />
          <Text size="4xl" fontWeight="bold">
            {gardener.name}
          </Text>
        </Content>
      )}
      <Flower ref={flowerRef} />
    </Container>
  );
}

function getGravatar(email: string, size: number): string {
  const hash = md5(email);
  return 'http://www.gravatar.com/avatar/' + hash + '.jpg?s=' + (size || 80);
}
