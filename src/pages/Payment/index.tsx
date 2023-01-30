import { View, Text } from 'react-native';
import React from 'react';
import { Container } from './styles';
import { Header, Total } from '../../components';

function Payment() {
  return (
    <Container>
      <Header />
      <Text>Payment</Text>
      <Total price={28} />
    </Container>
  );
}

export default Payment;
