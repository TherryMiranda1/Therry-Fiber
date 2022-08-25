import React from 'react'
import Carousel from 'better-react-carousel'

function CarrouselComponent() {
  return (
    <Carousel cols={3} rows={2} gap={10} loop={true}>
    <Carousel.Item>
      <img width="100%" src="https://picsum.photos/800/600?random=1" />
    </Carousel.Item>
    <Carousel.Item>
      <img width="100%" src="https://picsum.photos/800/600?random=2" />
    </Carousel.Item>
    <Carousel.Item>
      <img width="100%" src="https://picsum.photos/800/600?random=3" />
    </Carousel.Item>
    <Carousel.Item>
      {/* anything you want to show in the grid */}
    </Carousel.Item>
    {/* ... */}
  </Carousel>
  )
}

export default CarrouselComponent