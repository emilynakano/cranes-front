import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.background};
`;

export const UpSide = styled.View`
  flex: 0.4;
  background: ${({ theme }) => theme.COLORS.background_light};
  border-radius: 30px;
`;

export const DownSide = styled.View`
  flex: 0.6;
`;
