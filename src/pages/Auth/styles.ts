import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.background_light};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.primary};
`;

export const UpSide = styled.View`
  flex: 0.4;
  background: ${({ theme }) => theme.COLORS.background};
  border-radius: 30px;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;

  align-items: center;
  justify-content: space-between;
`;

export const DownSide = styled.View`
  flex: 0.6;
`;

export const Logo = styled.View`
  height: calc(100% - 40px);
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 160px; 
  height: 160px;
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
