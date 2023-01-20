/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components/native';
import { logo } from '../../assets/images';

function Header() {
  return (
    <Container>
      <Logo />
      <Text>
        Crânes
      </Text>
      <LogoTranslate />
    </Container>
  );
}
const Container = styled.View`
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.background_light};
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.Image.attrs(() => ({
  source: `${logo}`,
}))`
  width: 50px;
  height: 50px;
`;

const LogoTranslate = styled(Logo)`
  transform: scaleX(-1);
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.primary};
  font-weight: 800;
  font-size: 24px;
`;

export default Header;
