import { Alert } from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';
import Row from './Row';

const Container = styled.View`
  height: 120px;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-weight: 800;
  font-size: 20;
  color: ${({ theme }) => theme.COLORS.primary};
  padding-left: 25px;
`;

interface ITotal {
  price: number
}

function Total({ price }: ITotal) {
  return (
    <Container>
      <Row />
      <Text>
        TOTAL: R$
        {' '}
        {price.toFixed(2).replace('.', ',')}
      </Text>
      <Button handleSubmit={() => Alert.alert('oi')} text="FINALIZAR" />
    </Container>
  );
}

export default Total;
