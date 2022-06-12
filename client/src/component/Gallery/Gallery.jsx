import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={require('../../images/Cheebba Caramel 2.png')} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require('../../images/Cheebba Sleppy.png')} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require('../../images/Cheebba THCV.png')} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require('../../images/Cheebba THCV2.png')} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require('../../images/Cheebba Caramel.png')} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={require('../../images/Cheebba Caramel 2.png')} alt=''/>
     </Carousel.Item>
     <Carousel.Item>
        <img width="100%" src={require('../../images/Cheebba Strawberry.png')} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={require('../../images/Cheebba Strawberry2.png')} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('../../images/cannabis-chocolat-lait-cbd.jpg')} alt=''/>
      <Carousel.Item>
      <img src={require('../../images/cannabis-chocolat-noir-cbd.jpg')} alt=''/>
      <Carousel.Item>
      <img width="32%" src={require('../../images/HaZe-Cannabis-Dark-Chocolate.jpg')} alt=''/>
      </Carousel.Item>
      </Carousel.Item>
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;