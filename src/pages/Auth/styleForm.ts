import styled from 'styled-components/native';
import { TextInput, Button as ButtonStyle } from 'react-native-paper';

export const Container = styled.View`
  padding: 50px 50px;
  height: 100%;
  justify-content: space-between;
`;

export const Main = styled.View`
  gap: 20px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  activeUnderlineColor: `${theme.COLORS.primary}`,
  underlineColor: `${theme.COLORS.primary}`,
}))`
  background-color: ${({ theme }) => theme.COLORS.background_light};
`;

export const Button = styled(ButtonStyle)`
  background-color: ${({ theme }) => theme.COLORS.details};
`;
