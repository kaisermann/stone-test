import { actions as productActions } from './products'
import { actions as tableActions } from './tables'

/* Initial State */
export const initialState = null

/* Action types */
export const types = {
  DATA_POPULATE: 'DATA/POPULATE',
}

/* Action creators */
export const actions = {
  loadData: () => {
    return async (dispatch, getState) => {
      const payload = await import('../default-data.json')
      const { products, tables } = payload
      dispatch(productActions.populate(products))
      dispatch(tableActions.populate(tables))
    }
  },
}
