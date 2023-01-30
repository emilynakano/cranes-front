import styled from 'styled-components/native';
import React from 'react';

const Container = styled.Pressable`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.details};   
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-weight: 800;
  font-size: 20;
  color: ${({ theme }) => theme.COLORS.primary};
`;

function Button({ handleSubmit, text }: {
  handleSubmit: () => void;
  text: string;
}) {
  return (
    <Container onPress={handleSubmit}>
      <Text>
        {text}
      </Text>
    </Container>
  );
}

export default Button;
