import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  )
console.log(product);
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <img
        src={
          process.env.REACT_APP_UPLOAD_URL + product?.data?.attributes?.img?.data?.attributes?.url
        }
        alt=''
      />
      <h3>{product?.data?.attributes?.title}</h3>

      <p>{product?.data?.attributes?.desc}</p>
      <p>{product?.data?.attributes?.price}</p>
    </div>
  )
}

export default ProductDetails
