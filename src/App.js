import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import SingleProduct from './components/SingleProduct'
import Home from './components/Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App