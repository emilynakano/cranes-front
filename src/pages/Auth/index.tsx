import { Text } from '@react-native-material/core';
import React, { useState } from 'react';

import {
  AuthOption,
  AuthOptions, Container, DownSide, Row, UpSide,
} from './styles';

import SignUp from './SignUp';
import Login from './Login';

export default function Auth() {
  const authOptions: [string, string] = ['Login', 'Sign-up'];
  const [authSelected, setAuthSelected] = useState('Login');
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
      <DownSide>
        {authSelected === 'Login' ? <Login /> : <SignUp />}
      </DownSide>
    </Container>
  );
}
