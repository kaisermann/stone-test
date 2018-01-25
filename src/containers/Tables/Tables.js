import { connect } from 'react-redux'
import Tables from '../../components/Tables/Tables'
import { selectors as tableSelectors } from '../../ducks/tables'

const mapStateToProps = state => {
  return {
    tables: tableSelectors.getTables(state),
  }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
