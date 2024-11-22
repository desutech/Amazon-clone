import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import Catagory from '../../components/Catagory/Catagory'
import Product from '../../components/Product/Product'
import CarouselEffect from '../../components/Carousel/Carousel'


const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  )
}

export default Landing;
