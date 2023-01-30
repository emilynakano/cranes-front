import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Book } from './style';
import { Header } from '../../components';

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: 'gray',
  },
});

export default function Cart() {
  return (

    <Container showsHorizontalScrollIndicator={false}>
      <Header />
      <Book style={styles.elevation} />
      <Book />
    </Container>
  );
}
