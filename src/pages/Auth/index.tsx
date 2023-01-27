import React, { useState } from 'react';
import { logo as logoImg } from '../../../assets/images';
import {
  AuthOption, Text, Image,
  AuthOptions, Container, DownSide, Row, UpSide, Logo,
} from './styles';
import SignUp from './SignUp';
import Login from './Login';

export default function Auth() {
  const authOptions: [string, string] = ['Login', 'Sign-up'];
  const [authSelected, setAuthSelected] = useState('Login');
  return (
    <Container>
      <UpSide>
        <Logo>
          <Image source={logoImg} />
        </Logo>
        <AuthOptions>
          {authOptions.map((_auth, index) => (
            <AuthOption key={index} onPress={() => setAuthSelected(_auth)} activeOpacity={1}>
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
