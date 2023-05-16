import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  UPDATE_PRODUCT_DETAILS,
} from '../constants/productConstant'

export const listProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST })
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/products?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRAPI_KEY}`,
        },
      }
    )
    const products = response.data
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails =
  (id, selectOnly = false) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })

      // Check if the selected product is already in the state
      const { products } = getState().productList
      const selectedProduct = Array.isArray(products)
        ? products.find((product) => product.id === id)
        : null

      if (selectedProduct && selectOnly) {
        // If the product is already in the state and selectOnly is true,
        // just dispatch a success action with the selected product
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: selectedProduct })
      } else {
        // If the product is not in the state or selectOnly is false,
        // make a request to the server to get the product details
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/products/${id}?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_STRAPI_KEY}`,
            },
          }
        )
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
      }
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST })

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/categories/?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRAPI_KEY}`,
        },
      }
    )

    if (!Array.isArray(data.data)) {
      throw new Error('Invalid response format: data is not an array.')
    }

    const categories = data.data // Extract the categories from the response data

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: categories,
    })
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
