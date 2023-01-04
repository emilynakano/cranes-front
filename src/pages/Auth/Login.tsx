import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import {
  Container, Main, Input, Button,
} from './styleForm';

function Login() {
  const [checkPassword, setCheckPassword] = useState(false);
  return (
    <Container>
      <Main>
        <Input
          label="Email"
        />
        <Input
          label="Password"
          secureTextEntry={!checkPassword}
          right={checkPassword
            ? <TextInput.Icon icon="eye-off" onPress={() => setCheckPassword(!checkPassword)} />
            : <TextInput.Icon icon="eye" onPress={() => setCheckPassword(!checkPassword)} />}
        />
      </Main>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </Container>
  );
}

export default Login;
