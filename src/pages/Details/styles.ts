import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Foundation';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background_light};
  padding-bottom: 25px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 45vh;
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

export const Row = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.primary};
`;

export const TextThin = styled.View`
  text-align: center;
  font-weight: 500;
  font-size: 18;
  color: ${({ theme }) => theme.COLORS.primary};
`;

export const Buy = styled.View`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.details};   
  align-items: center;
  justify-content: center;
`;
