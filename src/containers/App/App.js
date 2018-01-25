import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions as dataActions } from '../../ducks/data'
import Tables from '../Tables/Tables'
import Table from '../Table/Table'

class App extends Component {
  constructor(props) {
    super(props)

    // If we already have the default table data, do nothing
    if (!this.props.tables.length) {
      this.props.loadData()
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: '#fff', height: '100%' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Tables} />
            <Route path="/table/:id" component={Table} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tables: state.tables,
  }
}

const mapDispatchToProps = {
  loadData: dataActions.loadData,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
