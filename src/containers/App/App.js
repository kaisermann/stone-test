import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions as dataActions } from '../../ducks/data'
import Tables from '../Tables/Tables'
import Table from '../Table/Table'

class NoMatch extends Component {
  render() {
    return <div style={{ color: 'white' }}>404</div>
  }
}

class App extends Component {
  componentWillMount() {
    this.props.loadData()
  }

  render() {
    return (
      <div style={{ backgroundColor: '#fff', height: '100%' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Tables} />
            <Route path="/table/:id" component={Table} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
  }
}

const mapDispatchToProps = {
  loadData: dataActions.loadData,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
