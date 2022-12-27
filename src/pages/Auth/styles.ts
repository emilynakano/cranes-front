import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.background};
`;

export const UpSide = styled.View`
  flex: 0.4;
  background: ${({ theme }) => theme.COLORS.background_light};
  border-radius: 30px;

  align-items: center;
  justify-content: space-between;
`;

export const DownSide = styled.View`
  flex: 0.6;
`;

export const AuthOptions = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px;
  gap: 10px;
`;

export const AuthOption = styled.TouchableOpacity`
  width: 50%;
  height: 36px;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${(props) => (props.authSelected === props.authActual ? props.theme.COLORS.details : 'transparent')};
  transition: 0.3s ease-out;
`;
