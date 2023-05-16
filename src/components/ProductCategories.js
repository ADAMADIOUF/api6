import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../actions/productAction'

const ProductCategories = () => {
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, categories } = categoryList
  console.log(categories)

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
    <div>
      <h2>Product Categories</h2>
      <div>
        <button onClick={() => handleFilterChange('')}>All</button>
        <button onClick={() => handleFilterChange('men')}>Men</button>
        <button onClick={() => handleFilterChange('women')}>Women</button>
      </div>
      {filteredCategories.length > 0 ? (
        <ul>
          {filteredCategories.map((category) => (
            <li key={category.id}>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  category?.attributes?.img?.data?.attributes?.url
                }
                alt=''
              />
              {category?.attributes.title}
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

