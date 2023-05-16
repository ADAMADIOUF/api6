import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      {products.data?.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product?.attributes.title}</h3>
            <img
              src={process.env.REACT_APP_UPLOAD_URL + product?.attributes?.img?.data?.attributes?.url}
              alt=''
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductList
