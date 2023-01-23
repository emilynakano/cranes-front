import { Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { capa } from '../../assets/images';

const { width } = Dimensions.get('window');

function Book() {
  return (
    <Container>
      <Image source={capa} />
    </Container>
  );
}

const Container = styled.View`
  width: ${(width - 75) / 2};
  height: ${((width - 75) / 2) + 70};
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default Book;
