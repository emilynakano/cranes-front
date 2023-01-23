import {
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {
  Ref, useRef, useState, useEffect,
} from 'react';
import { SlideShow, Image } from './styles';
import { banner, banner2 } from '../../../../assets/images';

const dim = Dimensions.get('window').width;

export default function CarouselImages() {
  const [autoPlay] = useState(true);
  const scrolRef:Ref<ScrollView> = useRef();

  let offSet = 0;
  useEffect(() => {
    if (autoPlay === true) {
      setInterval(() => {
        if (offSet >= Math.floor(dim * (1))) {
          offSet = 0;
        } else {
          offSet = Math.floor(offSet + dim);
        }
        scrolRef.current.scrollTo({ x: offSet, y: 0 });
      }, 4500);
    } else {
      clearInterval(0);
    }
  }, [autoPlay, scrolRef]);

  return (
    <SlideShow
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scrolRef}
    >
      <Image resizeMode="cover" source={banner} />
      <Image resizeMode="cover" source={banner2} />
    </SlideShow>
  );
}
