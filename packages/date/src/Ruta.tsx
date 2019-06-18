import * as React from 'react';
import styled from 'styled-components';
import { Title, Container } from '@tvruta/components';

const StyledContainer = styled(Container)`
  height: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  right: 25px;
  bottom: 55px;
  width: 150px;
  height: 150px;
  display: flex;
  position: absolute;  
  align-items: center;
  border-radius: 100px;
  box-sizing: border-box;
  justify-content: center;
  box-shadow: 0px 0px 10px #bbb;  
`;

const Svg = styled.svg`
  width: 90%;
`;

const Numbers = styled.path`
  fill: #4f4f4f;
`;

const Indicator = styled.div`
  bottom: 50%;
  position: absolute;
  border-radius: 10px;
  transform-origin: bottom;
  outline: 1px solid transparent;
`;

const HourIndicator = styled(Indicator)<{rotate: string}>`
  z-index: 4;
  width: 1.5%;
  height: 22.5%;
  background-color: #8f9c6c;    
  transform: ${props => props.rotate};
`;

const MinuteIndicator = styled(Indicator)<{rotate: string}>`
  width: 1%;
  z-index: 3;
  height: 30%;
  background-color: #cd6a51;
  transform: ${props => props.rotate};
`;

const SecondIndicator = styled(Indicator)<{rotate: string}>`
  z-index: 2;
  width: 0.5%;
  height: 37.5%;
  background-color: #dfc48c;
  transform: ${props => props.rotate};
`;

const IndicatorCover = styled.div`
  width: 3%;
  height: 3%;
  z-index: 5;
  bottom: 48.5%;
  border-radius: 50%;
  position: absolute;
  background-color: lightgrey;
`;

export function Ruta() {
  const [hoursDegrees, setHoursDegrees] = React.useState<number>(0);
  const [minutesDegrees, setMinutesDegrees] = React.useState<number>(0);
  const [secondsDegrees, setSecondsDegrees] = React.useState<number>(0);

  React.useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setHoursDegrees(date.getHours() * 30 + date.getMinutes() / 2);
      setMinutesDegrees(date.getMinutes() * 6 + date.getSeconds() / 10);
      setSecondsDegrees(date.getSeconds() * 6);
    }

    window.setInterval(() => {
      updateTime();
    }, 1000);
    updateTime();
  }, []);
  
  return (
    <StyledContainer>
      <DateTitle />
      <Wrapper>
        <HourIndicator rotate={`rotateZ(${hoursDegrees}deg)`} />
        <MinuteIndicator rotate={`rotateZ(${minutesDegrees}deg)`} />
        <SecondIndicator rotate={`rotateZ(${secondsDegrees}deg)`} />
        <IndicatorCover />
        <Svg viewBox="0 0 226.6 233.8">
          <Numbers d="M105.5 22.7V6.4h-5.9V4.3c.8 0 1.5-.1 2.2-.2.7-.1 1.4-.3 2-.7.6-.3 1.1-.8 1.5-1.3.4-.6.7-1.3.8-2.1h2.1v22.7h-2.7zM114.1 4.8c.3-1 .8-1.8 1.4-2.5.6-.7 1.4-1.3 2.4-1.7.9-.4 2-.6 3.2-.6 1 0 1.9.1 2.8.4.9.3 1.6.7 2.3 1.2.6.5 1.1 1.2 1.5 2 .4.8.6 1.7.6 2.8 0 1-.2 1.9-.5 2.7s-.7 1.5-1.2 2.1c-.5.6-1.1 1.2-1.8 1.6-.7.5-1.3 1-2 1.4-.7.4-1.4.8-2.1 1.3s-1.3.9-1.9 1.3c-.6.5-1.1 1-1.5 1.5s-.7 1.2-.8 1.9h11.6v2.4h-14.8c.1-1.3.3-2.5.7-3.4.4-.9.8-1.8 1.4-2.5s1.2-1.3 2-1.9c.7-.5 1.5-1 2.3-1.5 1-.6 1.8-1.1 2.5-1.6s1.3-1 1.8-1.5.8-1.1 1.1-1.7.4-1.3.4-2.1c0-.6-.1-1.2-.4-1.7-.2-.5-.5-.9-.9-1.3s-.9-.6-1.4-.8c-.5-.2-1.1-.3-1.7-.3-.8 0-1.5.2-2 .5-.6.3-1 .8-1.4 1.3-.4.5-.6 1.1-.8 1.8s-.2 1.3-.2 2H114c-.3-1-.2-2.1.1-3.1zM166.5 38.2V21.9h-5.9v-2.2c.8 0 1.5-.1 2.2-.2.7-.1 1.4-.3 2-.7.6-.3 1.1-.8 1.5-1.3.4-.6.7-1.3.8-2.1h2.1v22.7h-2.7zM198.9 59.2c.3-1 .8-1.8 1.4-2.5.6-.7 1.4-1.3 2.4-1.7.9-.4 2-.6 3.2-.6 1 0 1.9.1 2.8.4.9.3 1.6.7 2.3 1.2.6.5 1.1 1.2 1.5 2 .4.8.6 1.7.6 2.8 0 1-.2 1.9-.5 2.7s-.7 1.5-1.2 2.1c-.5.6-1.1 1.2-1.8 1.6-.7.5-1.3 1-2 1.4-.7.4-1.4.8-2.1 1.3s-1.3.9-1.9 1.3c-.6.5-1.1 1-1.5 1.5s-.7 1.2-.8 1.9h11.6V77H198c.1-1.3.3-2.5.7-3.4.4-.9.8-1.8 1.4-2.5s1.2-1.3 2-1.9c.7-.5 1.5-1 2.3-1.5 1-.6 1.8-1.1 2.5-1.6s1.3-1 1.8-1.5.8-1.1 1.1-1.7.4-1.3.4-2.1c0-.6-.1-1.2-.4-1.7-.2-.5-.5-.9-.9-1.3s-.9-.6-1.4-.8c-.5-.2-1.1-.3-1.7-.3-.8 0-1.5.2-2 .5-.6.3-1 .8-1.4 1.3-.4.5-.6 1.1-.8 1.8s-.2 1.3-.2 2h-2.7c-.2-1.1-.1-2.1.2-3.1zM217.6 115.1H218.5c.6 0 1.1-.1 1.6-.2s1-.4 1.4-.7c.4-.3.7-.7.9-1.2.2-.5.4-1 .4-1.6 0-1.2-.4-2.1-1.2-2.7-.8-.6-1.7-.9-2.9-.9-.7 0-1.4.1-1.9.4-.5.3-1 .6-1.3 1.1-.4.4-.6 1-.8 1.6-.2.6-.3 1.2-.3 1.9h-2.7c0-1.1.2-2.1.5-3s.8-1.7 1.3-2.3c.6-.6 1.3-1.1 2.2-1.5.9-.4 1.9-.5 3-.5 1 0 1.9.1 2.7.4s1.6.6 2.2 1.1c.6.5 1.1 1.1 1.5 1.9s.5 1.7.5 2.7c0 1-.3 1.9-.9 2.7-.6.8-1.3 1.4-2.2 1.8v.1c1.4.3 2.4 1 3.1 2 .7 1 1 2.2 1 3.6 0 1.1-.2 2.1-.6 3-.4.9-1 1.6-1.7 2.2s-1.5 1-2.5 1.3-2 .4-3 .4c-1.2 0-2.2-.2-3.1-.5-.9-.3-1.7-.8-2.4-1.4-.7-.6-1.2-1.4-1.5-2.3-.4-.9-.5-2-.5-3.1h2.7c0 1.5.5 2.7 1.3 3.6.8.9 2 1.4 3.6 1.4.7 0 1.3-.1 1.9-.3.6-.2 1.1-.5 1.6-.9s.8-.8 1.1-1.4.4-1.2.4-1.8c0-.7-.1-1.3-.4-1.9s-.6-1-1-1.4-.9-.7-1.5-.8-1.2-.3-1.9-.3c-.6 0-1.1 0-1.6.1V115c-.1.1 0 .1.1.1zM214.2 173.8v2.4h-3.1v5.3h-2.6v-5.3h-10v-2.6l10.3-14.8h2.2v15h3.2zm-5.6-11.1l-7.6 11.1h7.6v-11.1zM163.7 199.4l-1.2 6.5.1.1c.5-.6 1.1-1 1.9-1.2.8-.3 1.6-.4 2.3-.4 1 0 2 .2 2.8.5.9.3 1.7.8 2.3 1.5.7.7 1.2 1.5 1.6 2.4s.6 2.1.6 3.4c0 1-.2 1.9-.5 2.8-.3.9-.8 1.7-1.5 2.4s-1.5 1.3-2.5 1.7-2.1.6-3.5.6c-1 0-1.9-.1-2.8-.4s-1.6-.7-2.3-1.2-1.2-1.2-1.6-2c-.4-.8-.6-1.7-.6-2.8h2.7c0 .6.2 1.1.4 1.6s.6.9 1 1.3.9.7 1.5.9c.6.2 1.2.3 1.9.3.6 0 1.3-.1 1.8-.3.6-.2 1.1-.6 1.5-1 .4-.4.8-1 1-1.7.3-.7.4-1.5.4-2.4 0-.7-.1-1.4-.4-2.1s-.6-1.2-1-1.6-1-.8-1.6-1.1-1.3-.4-2.1-.4c-.9 0-1.7.2-2.4.6-.7.4-1.3.9-1.8 1.6l-2.3-.1 2.1-11.8h11.2v2.4h-9zM116.4 214.1c-.7-.6-1.5-.9-2.6-.9-1.2 0-2.1.3-2.8.8s-1.3 1.3-1.6 2.1-.7 1.8-.8 2.8c-.1 1-.2 1.9-.3 2.8l.1.1c.6-1 1.4-1.8 2.4-2.3.9-.5 2-.7 3.3-.7 1.1 0 2.1.2 2.9.6.9.4 1.6.9 2.2 1.6s1 1.4 1.4 2.3c.3.9.5 1.9.5 2.9 0 .8-.1 1.7-.4 2.6-.3.9-.7 1.7-1.3 2.4-.6.7-1.4 1.3-2.3 1.8-1 .5-2.2.7-3.6.7-1.7 0-3-.3-4.1-1s-1.8-1.6-2.4-2.6c-.6-1.1-.9-2.2-1.1-3.5-.2-1.3-.3-2.5-.3-3.7 0-1.6.1-3.1.4-4.5.3-1.5.7-2.8 1.4-3.9.6-1.1 1.5-2 2.6-2.7 1.1-.7 2.4-1 4-1 1.9 0 3.4.5 4.5 1.5s1.7 2.4 1.9 4.3h-2.7c-.2-1.1-.6-1.9-1.3-2.5zm-4.9 7.5c-.6.3-1.1.6-1.5 1.1-.4.5-.7 1-.9 1.6-.2.6-.3 1.3-.3 2s.1 1.4.3 2c.2.6.5 1.2.9 1.6.4.4.9.8 1.5 1.1.6.3 1.3.4 2 .4s1.4-.1 2-.4c.6-.3 1-.6 1.4-1.1.4-.5.7-1 .9-1.6s.3-1.2.3-1.9-.1-1.4-.3-2c-.2-.6-.5-1.2-.8-1.6-.4-.5-.9-.8-1.4-1.1s-1.2-.4-2-.4c-.9-.1-1.5.1-2.1.3zM64.9 203.4c-1 1.6-1.9 3.2-2.7 5-.8 1.8-1.4 3.6-1.9 5.5s-.8 3.7-.9 5.5h-3c.1-1.9.4-3.8.9-5.6.5-1.8 1.1-3.6 1.9-5.2s1.7-3.3 2.7-4.8c1-1.5 2.1-2.9 3.3-4.1H53.5V197h14.7v2.3c-1.2 1.2-2.3 2.5-3.3 4.1zM15.2 162.1c.4-.7.9-1.3 1.5-1.8s1.3-.9 2.1-1.1c.8-.3 1.6-.4 2.5-.4 1.2 0 2.3.2 3.2.5.9.3 1.6.8 2.1 1.3s.9 1.2 1.2 1.9c.3.7.4 1.4.4 2.1 0 1-.3 2-.8 2.8s-1.3 1.5-2.3 1.9c1.4.4 2.4 1.1 3 2.1s1 2.2 1 3.6c0 1.1-.2 2.1-.6 2.9-.4.9-.9 1.6-1.6 2.2s-1.5 1-2.4 1.3-1.9.4-2.9.4c-1.1 0-2.1-.1-3-.4-.9-.3-1.8-.7-2.4-1.3s-1.2-1.3-1.6-2.2c-.4-.9-.6-1.9-.6-3 0-1.3.3-2.5 1-3.5s1.7-1.7 2.9-2.2c-1-.4-1.7-1-2.3-1.9-.6-.9-.9-1.8-.9-2.8-.1-.9.1-1.7.5-2.4zm2.9 16.2c.9.8 2.1 1.2 3.5 1.2.7 0 1.3-.1 1.9-.3.6-.2 1.1-.5 1.5-.9s.7-.9 1-1.4.3-1.1.3-1.8c0-.6-.1-1.2-.4-1.7s-.6-1-1-1.4-.9-.7-1.5-.9c-.6-.2-1.2-.3-1.8-.3-.7 0-1.3.1-1.9.3-.6.2-1.1.5-1.5.9-.4.4-.8.8-1 1.4-.2.5-.4 1.1-.4 1.8-.1 1.2.3 2.3 1.3 3.1zm-.3-12c.2.5.5.8.9 1.1.4.3.8.5 1.3.7.5.1 1 .2 1.6.2 1.1 0 2-.3 2.7-1 .7-.6 1.1-1.5 1.1-2.7s-.4-2-1.1-2.6c-.7-.6-1.6-.9-2.7-.9-.5 0-1 .1-1.5.2s-.9.4-1.3.7c-.4.3-.6.7-.8 1.1-.2.4-.3.9-.3 1.5-.2.7-.1 1.2.1 1.7zM4.5 125.1c.8.6 1.7.9 2.8.9 1.7 0 2.9-.7 3.7-2.2s1.3-3.6 1.4-6.6l-.1-.1c-.5 1-1.2 1.7-2.2 2.3-.9.6-2 .8-3.1.8-1.2 0-2.2-.2-3.1-.6-.9-.4-1.6-.9-2.3-1.6-.6-.7-1.1-1.5-1.4-2.4-.3-.9-.5-2-.5-3.1s.2-2.1.5-3c.4-.9.9-1.7 1.5-2.3.7-.7 1.5-1.2 2.4-1.5.9-.4 1.9-.5 3-.5s2.1.2 3 .5c.9.3 1.8.9 2.5 1.7.7.8 1.3 1.9 1.7 3.3.4 1.4.6 3.2.6 5.3 0 3.9-.6 6.9-1.9 9-1.2 2.1-3.2 3.2-6 3.2-1.9 0-3.5-.5-4.7-1.4s-2-2.4-2.1-4.4h2.7c.4 1.2.9 2.1 1.6 2.7zm7.2-14.2c-.2-.6-.5-1.2-.9-1.6s-.9-.9-1.5-1.1c-.6-.3-1.2-.4-2-.4s-1.5.1-2.1.4-1 .7-1.4 1.2c-.4.5-.6 1.1-.8 1.7-.2.6-.2 1.3-.2 2 0 .6.1 1.2.3 1.8.2.6.5 1.1.9 1.5.4.4.9.8 1.4 1.1s1.1.4 1.8.4 1.3-.1 1.9-.4 1.1-.6 1.5-1.1c.4-.5.7-1 .9-1.6.2-.6.3-1.2.3-1.9.2-.7.1-1.4-.1-2zM13.6 76V59.8H7.8v-2.2c.8 0 1.5-.1 2.2-.2.7-.1 1.4-.3 2-.7.6-.3 1.1-.8 1.5-1.3.4-.6.7-1.3.8-2.1h2.1V76h-2.8zM21.9 62.3c0-.9.1-1.8.3-2.6.2-.9.4-1.7.7-2.4.3-.8.8-1.4 1.3-2 .6-.6 1.3-1 2.1-1.4s1.9-.5 3-.5c1.2 0 2.2.2 3 .5s1.5.8 2.1 1.4c.6.6 1 1.2 1.3 2 .3.8.6 1.6.7 2.4.2.9.3 1.7.3 2.6s.1 1.8.1 2.6 0 1.7-.1 2.6-.1 1.8-.3 2.6c-.2.9-.4 1.7-.7 2.4s-.8 1.4-1.3 2c-.6.6-1.2 1-2.1 1.4s-1.8.5-3 .5-2.2-.2-3-.5-1.5-.8-2.1-1.4c-.6-.6-1-1.2-1.3-2s-.6-1.6-.7-2.4c-.2-.9-.3-1.7-.3-2.6 0-.9-.1-1.8-.1-2.6.1-.8.1-1.7.1-2.6zm2.9 5.4c.1 1.1.2 2 .5 3 .3.9.8 1.7 1.4 2.4s1.5 1 2.7 1c1.2 0 2-.3 2.7-1s1.1-1.4 1.4-2.4c.3-.9.5-1.9.5-3 .1-1.1.1-2 .1-2.9V63c0-.7-.1-1.3-.2-2s-.2-1.3-.4-2c-.2-.6-.4-1.2-.8-1.7s-.8-.9-1.3-1.2-1.2-.4-2-.4-1.4.1-2 .4c-.5.3-1 .7-1.3 1.2-.4.5-.6 1-.8 1.7-.2.6-.3 1.3-.4 2-.1.7-.1 1.3-.2 2v1.8c.1.9.1 1.9.1 2.9z" />
          <g>
            <Numbers d="M53.5 38.2V21.9h-5.9v-2.2c.8 0 1.5-.1 2.2-.2.7-.1 1.4-.3 2-.7.6-.3 1.1-.8 1.5-1.3.4-.6.7-1.3.8-2.1h2.1v22.7h-2.7zM69.1 38.2V21.9h-5.9v-2.2c.8 0 1.5-.1 2.2-.2.7-.1 1.4-.3 2-.7.6-.3 1.1-.8 1.5-1.3.4-.6.7-1.3.8-2.1h2.1v22.7h-2.7z" />
          </g>
        </Svg>
      </Wrapper>
    </StyledContainer>
  );
}

const DateTitle: React.FC<> = () => {
  const date = new Date();

  const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

  return <Title>{`${days[date.getUTCDay() - 1]}, ${date.getDate()}/${date.getUTCMonth()} - ${date.getUTCFullYear()}`}</Title>
}