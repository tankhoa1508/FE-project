import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import slide1 from '../../images/slider1.jpg'
import slide2 from '../../images/slider2.jpg'
import slide3 from '../../images/slider4.jpg'


const items = [
  {
    src: slide1,
    altText: 'Trường tồn với thời gian',
    caption: 'Bộ sưu tập đồng hồ, có thể nhận biết trong nháy mắt',
    key: 1,
  },
  {
    src: slide2,
    altText: 'Đẳng cấp là mãi mãi',
    caption: 'Dành riêng cho doanh nhân',
    key: 2,
  },
  {
    src: slide3,
    altText: 'Định hình phong cách',
    caption: 'Tính năng ưu việt và phong cách đẳng cấp',
    key: 3,
  },
];

function Slide(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption 
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slide;