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

export const productListReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      
      return {
        loading: false,
        products: action.payload,
      
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: {} }, action) => {
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return { loading: true, ...state }
  }
  if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return { loading: false, product: action.payload }
  }
  if (action.type === PRODUCT_DETAILS_FAIL) {
    return { loading: false, error: action.payload }
  }
  
  return state
}

export const categoryListReducer = (
  state = { categories: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return {
        loading: true,
        categories: [],
      }
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      }
    case CATEGORY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
