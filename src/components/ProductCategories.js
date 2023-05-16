import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../actions/productAction'
import { Link } from 'react-router-dom'

const ProductCategories = () => {
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, categories } = categoryList

  const [selectedFilter, setSelectedFilter] = useState('')

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const filteredCategories = selectedFilter
    ? categories.filter(
        (category) => category.attributes.title === selectedFilter
      )
    : categories

  return (
    <div className='product-categories-container section-center'>
      <h2 className='product-categories-heading'>Product Categories</h2>
      <div className='product-categories-buttons'>
        <button onClick={() => handleFilterChange('')}>All</button>
        <button onClick={() => handleFilterChange('men')}>Men</button>
        <button onClick={() => handleFilterChange('women')}>Women</button>
      </div>
      {filteredCategories.length > 0 ? (
        <ul className='product-categories-list'>
          {filteredCategories.map((category) => (
            <li key={category.id}>
              <Link to={`/products/${category.id}`}>
                <img
                  className='category-image'
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    category?.attributes?.img?.data?.attributes?.url
                  }
                  alt=''
                />
                <span>{category?.attributes.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No categories found.</div>
      )}
    </div>
  )
}

export default ProductCategories
