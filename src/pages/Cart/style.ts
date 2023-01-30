import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.background_light};
`;

export const Book = styled.View`
  width: ${width - 50};
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 1px;
  height: 100px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.background};

`;

export const BookList = styled.ScrollView`
  height: ${height - 120};
  margin-bottom: 25px;
`;

export const Total = styled.View`
  height: 120px;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-weight: 800;
  font-size: 20;
  color: ${({ theme }) => theme.COLORS.primary};
  padding-left: 25px;
`;
