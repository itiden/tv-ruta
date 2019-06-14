import * as React from 'react';
import { startOfWeek, differenceInWeeks } from 'date-fns';
import lottie from 'lottie-web';
import { Title, Text, Container } from '@tvruta/components';
import flower from './flower.json';
import styled from 'styled-components';
import md5 from 'md5';

const startDate = new Date('2019-02-13');
const startWeek = startOfWeek(startDate);
const gardeners: { name: string; email: string }[] = [
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

const Gardener = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space['8']};
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
    <Container>
      <Title>Veckans trädgårdsmästare</Title>
      <Gardener>
        <Avatar email={gardener.email} />
        <Text size="4xl" fontWeight="bold">
          {gardener.name}
        </Text>
      </Gardener>
      <Flower ref={flowerRef} />
    </Container>
  );
}

function getGravatar(email: string, size: number): string {
  const hash = md5(email);
  return 'http://www.gravatar.com/avatar/' + hash + '.jpg?s=' + (size || 80);
}
