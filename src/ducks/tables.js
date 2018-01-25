import { createAction } from 'redux-actions'

/* Initial State */
export const initialState = []

/* Action types */
export const types = {
  TABLES_POPULATE: 'TABLES/POPULATE',
  TABLE_ADD_PRODUCT: 'TABLE/ADD_PRODUCT',
  TABLE_ADD_PAYMENT: 'TABLE/TABLE_ADD_PAYMENT',
  TABLE_REMOVE_PRODUCT: 'TABLE/TABLE_REMOVE_PRODUCT',
}

/* Action creators */
export const actions = {
  populate: createAction(types.TABLES_POPULATE),
  addProduct: createAction(types.TABLE_ADD_PRODUCT),
  addPayment: createAction(types.TABLE_ADD_PAYMENT),
  removeProduct: createAction(types.TABLE_REMOVE_PRODUCT),
}

/* Helpers */
const getTableWithInfos = (products, table) => {
  const total = table.products.reduce(
    (acc, productID) => acc + parseFloat(products[productID].price),
    0
  )
  const paidValue = table.paid.reduce((acc, value) => acc + value, 0)
  const restValue = total - paidValue

  return {
    ...table,
    total,
    paidValue,
    restValue,
  }
}

/* Selectors */
export const selectors = {
  getTableByID(state, id) {
    const { tables, products } = state
    const table = tables.find(table => table.id === id)
    if (table) {
      return getTableWithInfos(products, table)
    }
  },
  getTables(state) {
    const { tables, products } = state
    return tables.map(table => getTableWithInfos(products, table))
  },
}

/* Reducer */
/** Here state indicates the tables list */
export default (state = initialState, action) => {
  switch (action.type) {
    case types.TABLES_POPULATE:
      return action.payload.map(table => {
        return {
          ...table,
          id: table.id.toString().padStart(2, '0'),
        }
      })

    case types.TABLE_ADD_PAYMENT:
      return state.map(table => {
        if (table.id !== action.payload.tableID) return table
        return {
          ...table,
          paid: [...table.paid, action.payload.value],
        }
      })

    case types.TABLE_ADD_PRODUCT:
      return state.map(table => {
        if (table.id !== action.payload.tableID) return table
        return {
          ...table,
          products: [...table.products, action.payload.productID],
        }
      })

    case types.TABLE_REMOVE_PRODUCT:
      return state.map(table => {
        if (table.id !== action.payload.tableID) return table
        return {
          ...table,
          products: table.products.filter(
            (productID, i) => action.payload.index !== i
          ),
        }
      })

    default:
      return state
  }
}
