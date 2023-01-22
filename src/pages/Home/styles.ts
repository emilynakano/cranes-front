import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SlideShow = styled.ScrollView`
  width: 100%;
  height: 300px;
  background: red;
`;

export const Image = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 300px;
`;
