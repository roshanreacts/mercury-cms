import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

type CircularProgressProps = {
  width?: string;
  height?: string;
  color?: string;
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const CircularProgress = styled.div<CircularProgressProps>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${props => props.color || '#1EB442'};
  border-radius: 50%;
  width: ${props => props.width || '30px'};
  height: ${props => props.height || '30px'};
  animation: ${spin} 1s linear infinite;
`;
