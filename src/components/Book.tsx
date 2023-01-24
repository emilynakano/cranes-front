import { Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { capa } from '../../assets/images';

const { width } = Dimensions.get('window');

const Container = styled.View`
  width: ${(width - 75) / 2};
  height: ${((width - 75) / 2) + 70};
`;
const Image = styled.Image`
  width: 100%;
  height: calc(100% - 40px);
`;
const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.primary};
  white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 800;
`;
const Details = styled.View`
  height: 40px;
  padding: 5px 0;
`;

function Book() {
  return (
    <Container>
      <Image source={capa} />
      <Details>
        <Title>Coracao Satanico</Title>
        <Title>R$ 59,90</Title>
      </Details>
    </Container>
  );
}

export default Book;