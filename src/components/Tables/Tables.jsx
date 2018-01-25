import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../NavBar/NavBar'
import PageWrapper from '../PageWrapper'
import { TableList, TableListItem } from './StyledComponents'
import floatToBRL from '../../utils/floatToBRL'

class Tables extends Component {
  render() {
    const tableItems = this.props.tables.map(table => {
      return (
        <Link to={`/table/${table.id}`} key={table.id}>
          <TableListItem>
            <div>
              <strong>Mesa {table.id}</strong>
              <span style={{ fontSize: '12px' }}>
                {floatToBRL(table.total)}
              </span>
            </div>
          </TableListItem>
        </Link>
      )
    })

    return (
      <PageWrapper>
        <NavBar title={`Mesas`} history={this.props.history} />
        <TableList>{tableItems}</TableList>
      </PageWrapper>
    )
  }
}

export default Tables
