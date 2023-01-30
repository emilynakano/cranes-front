import React from 'react';
import styled from 'styled-components/native';
import Book from './Book';

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
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
