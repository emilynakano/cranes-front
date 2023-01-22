import {
  SafeAreaView,
} from 'react-native';

import { Header } from '../../components';
import CarouselImages from './carouselImages';

export default function Home() {
  return (
    <SafeAreaView>
      <Header />
      <CarouselImages />
    </SafeAreaView>
  );
}
