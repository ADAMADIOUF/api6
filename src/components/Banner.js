import React from 'react'
import b from "../assets/banner.png"
const Banner = () => {
  return (
    <div className='banner'>
      <img
        src={b}
        alt='Banner Image'
        className='banner-image'
      />
      <div className='banner-content'>
        <h1 className='banner-title'>Welcome to Perfume World</h1>
        <p className='banner-description'>
          Discover the perfect scent for every occasion
        </p>
        <a href='#' className='banner-button'>
          Shop Now
        </a>
      </div>
    </div>
  )
}

export default Banner
