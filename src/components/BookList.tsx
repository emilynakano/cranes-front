import React from 'react';
import styled from 'styled-components/native';
import Book from './Book';

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 25px 0;
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
