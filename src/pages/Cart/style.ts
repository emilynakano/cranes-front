import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');
export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background_light};
  padding: 25px 0;
`;

export const Book = styled.View`
  width: ${width - 50};
  margin-left: 25px;
  margin-top: 25px;
  height: 100px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.background};
`;
