import { Header } from '../../components';
import BookList from '../../components/BookList';
import CarouselImages from './carouselImages';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <CarouselImages />
      <BookList />
    </Container>
  );
}
