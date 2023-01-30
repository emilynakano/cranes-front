import React from 'react';
import {
  Container, Book, BookList, Total,
} from './style';
import { Header, Row } from '../../components';
import { generateBoxShadowStyle } from '../../utils/generate-box-shadow';

const shadow = generateBoxShadowStyle(-2, 4, 'white', 0.2, 3, 4, 'white');

export default function Cart() {
  return (
    <Container>
      <Header />
      <BookList showsHorizontalScrollIndicator={false}>
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
      </BookList>
      <Total>
        <Row />
      </Total>
    </Container>
  );
}
