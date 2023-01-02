import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Container, Main } from './styleForm';

function Login() {
  const [checkPassword, setCheckPassword] = useState(false);
  return (
    <Container>
      <Main>
        <TextInput
          mode="outlined"
          label="Email"
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={!checkPassword}
          right={checkPassword
            ? <TextInput.Icon icon="eye-off" onPress={() => setCheckPassword(!checkPassword)} />
            : <TextInput.Icon icon="eye" onPress={() => setCheckPassword(!checkPassword)} />}
        />
      </Main>
      <Button style={{ backgroundColor: '#FA4A0C' }} mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </Container>
  );
}

export default Login;
