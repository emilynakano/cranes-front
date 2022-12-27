import { Text } from '@react-native-material/core';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  AuthOption,
  AuthOptions, Container, DownSide, Row, UpSide,
} from './styles';

export default function Auth() {
  const authOptions: [string, string] = ['Login', 'Sign-up'];
  const [authSelected, setAuthSelected] = useState('Sign-up');
  return (
    <Container>
      <UpSide>
        <Text>
          logo
        </Text>
        <AuthOptions>
          {authOptions.map((_auth) => (
            <AuthOption onPress={() => setAuthSelected(_auth)} activeOpacity={1}>
              <Text>
                {_auth}
              </Text>
              <Row authSelected={authSelected} authActual={_auth} />
            </AuthOption>
          ))}
        </AuthOptions>
      </UpSide>
      <DownSide />
    </Container>
  );
}
