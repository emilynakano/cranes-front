import { Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { capa } from '../../assets/images';

const { width } = Dimensions.get('window');

const Container = styled.TouchableOpacity`
  width: ${(width - 75) / 2};
  height: ${((width - 75) / 2) + 70};
`;
const Image = styled.Image`
  width: ${(width - 75) / 2};
  height: ${((width - 75) / 2) + 70 - 40}
`;
const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.primary};
  white-space: nowrap; 
  width: ${(width - 75) / 2}; 
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 800;
`;
const Details = styled.View`
  height: 40px;
  padding: 5px 0;
`;

function Book() {
  const { navigate } = useNavigation();
  return (
    <Container onPress={() => navigate('details')}>
      <Image source={capa} />
      <Details>
        <Title>Coracao Satanico</Title>
        <Title>R$ 59,90</Title>
      </Details>
    </Container>
  );
}

export default Book;
