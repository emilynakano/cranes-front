import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container, Book, BookList, Total,
} from './style';
import { Header } from '../../components';
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
      <Total />
    </Container>
  );
}
