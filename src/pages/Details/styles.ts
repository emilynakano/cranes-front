import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Foundation';
import { Dimensions } from 'react-native';

const { height: heightScreen } = Dimensions.get('screen');
export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background_light};
  padding-bottom: 25px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${heightScreen * 0.45};
`;

export const Text = styled.Text`
  font-weight: 800;
  font-size: 20;
  color: ${({ theme }) => theme.COLORS.primary};
`;

export const Title = styled(Text)`
  padding: 20px 20px 0 20px;
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.COLORS.primary};
`;

export const Price = styled.Text`
  padding: 5px 20px 0 20px;
`;

export const Sinopse = styled.View`
  padding: 5px 20px 0 20px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TextThin = styled.Text`
  text-align: center;
  font-weight: 500;
  font-size: 18;
  color: ${({ theme }) => theme.COLORS.primary};
`;
