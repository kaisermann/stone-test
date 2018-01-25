import { createAction } from 'redux-actions'

/* Initial State */
export const initialState = {}

/* Action types */
export const types = {
  PRODUCTS_POPULATE: 'PRODUCTS/POPULATE',
}

/* Action creators */
export const actions = {
  populate: createAction(types.PRODUCTS_POPULATE),
}

/* Selectors */
export const selectors = {
  /** Get the products from a specific table */
  getTableProducts(state, table) {
    const { products: productIDs } = table
    const { products } = state

    return productIDs.map(productID => products[productID])
  },
  /** Get products listed alphabetically */
  getProducts(state) {
    return Object.values(state.products).sort((p1, p2) =>
      p1.label.localeCompare(p2.label)
    )
  },
}

/* Reducer */
/** Here state indicates the products dictionary {id:productObj} */
export default (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_POPULATE:
      return action.payload.reduce((acc, product) => {
        acc[product.id] = product
        return acc
      }, {})

    default:
      return state
  }
}
