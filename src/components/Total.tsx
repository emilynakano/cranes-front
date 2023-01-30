import styled from 'styled-components/native';
import Row from './Row';

const Container = styled.View`
  height: 60px;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-weight: 800;
  font-size: 20;
  color: ${({ theme }) => theme.COLORS.primary};
  padding-left: 25px;
  padding-bottom: 16px;
`;

interface ITotal {
  price: number;
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
    </Container>
  );
}

export default Total;
