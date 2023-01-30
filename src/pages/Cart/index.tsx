import { Alert } from 'react-native';
import {
  Container, Book, BookList,
} from './style';
import { Button, Header, Total } from '../../components';
import { generateBoxShadowStyle } from '../../utils/generate-box-shadow';

const shadow = generateBoxShadowStyle(-2, 4, 'white', 0.2, 3, 4, 'white');

export default function Cart() {
  const handleSubmit = () => alert('oi');
  return (
    <Container>
      <Header />
      <BookList showsHorizontalScrollIndicator={false}>
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
        <Book style={shadow} />
      </BookList>
      <Total
        price={26.32}
      />
      <Button
        handleSubmit={handleSubmit}
        text="FINALIZAR"
      />
    </Container>
  );
}
