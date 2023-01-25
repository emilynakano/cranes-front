import styled from 'styled-components/native';
import IconsStyle from '@expo/vector-icons/Ionicons';

const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.background};
`;

const Icon = styled(IconsStyle)`
  color: ${({ theme }) => theme.COLORS.primary};
`;

function BottomBar() {
  return (
    <Container>
      <Icon name="search" size={30} />
      <Icon name="md-skull" size={30} />
      <Icon name="heart" size={30} />
      <Icon name="cart" size={30} />
    </Container>
  );
}

export default BottomBar;
