import { Header } from '../../components';
import BookList from '../../components/BookList';
import BottomBar from '../../components/BottomBar';
import CarouselImages from './carouselImages';
import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <CarouselImages />
        <BookList />
      </Container>
      <BottomBar />
    </>
  );
}
