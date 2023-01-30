import React from 'react';
import { Button, Header, Row } from '../../components';
import {
  Container, Image, Title, Icon, Price, Text, Sinopse, TextThin, Buy,
} from './styles';
import { capa } from '../../../assets/images';

export default function Details() {
  return (
    <>
      <Container showsHorizontalScrollIndicator={false}>
        <Header />
        <Image source={capa} />
        <Title> Coracao Satanico</Title>
        <Price>
          <Icon name="shopping-cart" size={32} />
          <Text>
            {'  '}
            R$ 59,90
          </Text>
        </Price>
        <Sinopse>
          <Text>
            SINOPSE
          </Text>
          <Row />
          <TextThin>{'Lorem Ipsum '.repeat(240)}</TextThin>
        </Sinopse>
      </Container>
      <Button handleSubmit={() => alert('oi')} text="COMPRAR" />
    </>
  );
}
