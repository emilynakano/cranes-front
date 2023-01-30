import { Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { capa } from '../../assets/images';

const { width } = Dimensions.get('window');

const bookWidth = (width - 75) / 2;
const bookHeight = ((width - 75) / 2) + 70;

const Container = styled.TouchableOpacity`
  width: ${bookWidth};
  height: ${bookHeight};
  margin: 25px 0 0 25px;
`;
const Image = styled.Image`
  width: ${bookWidth};
  height: ${bookHeight - 40}
`;
const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.primary};
  white-space: nowrap; 
  width: ${bookWidth}; 
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
