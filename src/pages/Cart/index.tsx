import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Book } from './style';
import { Header } from '../../components';
import { generateBoxShadowStyle } from '../../utils/generate-box-shadow';

const shadow = generateBoxShadowStyle(-2, 4, 'white', 0.2, 3, 4, 'white');

export default function Cart() {
  return (
    <Container showsHorizontalScrollIndicator={false}>
      <Header />
      <Book style={shadow} />
      <Book style={shadow} />
      <Book style={shadow} />
      <Book style={shadow} />
      <Book style={shadow} />
      <Book style={shadow} />

    </Container>
  );
}
