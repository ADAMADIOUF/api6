import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import deals from '../dataDeals'

const Deals = () => {
  
  const sliderRef = useRef(null)
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='deals-container'>
      <h2>Today's Deals</h2>
      <Slider ref={sliderRef} {...sliderSettings} className='deals-slider'>
        {deals.map((deal) => (
          <div key={deal.id}>
            <Link to={`/products/${deal.id}`}>
              <img src={deal.image} alt={deal.title} />
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Deals
