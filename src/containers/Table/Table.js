import { connect } from 'react-redux'
import Table from '../../components/Table/Table'
import {
  selectors as tableSelectors,
  actions as tableActions,
} from '../../ducks/tables'
import { selectors as productSelectors } from '../../ducks/products'

const mapStateToProps = (state, ownProps) => {
  const table = tableSelectors.getTableByID(state, ownProps.match.params.id)

  // If table data still loading, let's load an empty list
  const paidProducts = !table
    ? []
    : productSelectors.getTableProducts(state, table)

  const products = productSelectors.getProducts(state)

  return {
    table,
    paidProducts,
    products,
  }
}

const mapDispatchToProps = {
  addPayment: tableActions.addPayment,
  addProduct: tableActions.addProduct,
  removeProduct: tableActions.removeProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
