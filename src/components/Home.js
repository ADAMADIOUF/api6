import React from 'react'
import ProductList from './ProductList'
import ProductCategories from './ProductCategories'
import Banner from './Banner'
import Deals from './Deals'
import SecondBanner from './SecondBanner'

const Home = () => {
  return (
    <div>
      <Banner/>
     <ProductList/>
     <Deals/>
     <ProductCategories/>
     <SecondBanner/>
    </div>
  )
}

export default Home