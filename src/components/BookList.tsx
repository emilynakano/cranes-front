import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import Book from './Book';

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

function BookList() {
  return (
    <Container>
      <Book />
      <Book />
      <Book />
      <Book />
    </Container>
  );
}

export default BookList;
