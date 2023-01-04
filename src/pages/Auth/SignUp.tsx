import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import {
  Container, Main, Input, Button,
} from './styleForm';

function SignUp() {
  const [checkPassword, setCheckPassword] = useState(false);
  return (
    <Container>
      <Main>
        <Input
          mode="outlined"
          label="Name"
        />
        <Input
          mode="outlined"
          label="Email"
        />
        <Input
          mode="outlined"
          label="Password"
          secureTextEntry={!checkPassword}
          right={checkPassword
            ? <TextInput.Icon icon="eye-off" onPress={() => setCheckPassword(!checkPassword)} />
            : <TextInput.Icon icon="eye" onPress={() => setCheckPassword(!checkPassword)} />}
        />
      </Main>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Sign-up
      </Button>
    </Container>
  );
}

export default SignUp;
