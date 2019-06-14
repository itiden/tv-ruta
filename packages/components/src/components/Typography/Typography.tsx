import styled from 'styled-components';
import { color, fontSize } from '../../helpers/style';

export const Title = styled.h2`
  color: #4f4f4f;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 26px;
  margin: 0;
  text-transform: uppercase;
`;

interface TextProps {
  color?: string;
  size?: number | string;
  fontWeight?: string | number;
}

export const Text = styled.span<TextProps>`
  color: #333;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  ${color}
  ${fontSize}
  font-weight: ${p => p.fontWeight || 'auto'};
`;
