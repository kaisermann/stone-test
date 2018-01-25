import React, { Component } from 'react'

import NavBar from '../NavBar/NavBar'
import PaymentAddition from './PaymentAddition'
import ProductAddition from './ProductAddition'

import PageWrapper from '../PageWrapper'
import {
  TableHeader,
  HeaderValueSpan,
  TableHeaderCell,
  TableFooter,
  TableActionContainer,
  TableButton,
  ProductList,
  ProductListItem,
} from './StyledComponents'

import floatToBRL from '../../utils/floatToBRL'

class Table extends Component {
  state = {
    /** Hold the view status (adding payment, product or nothing) */
    status: null,
  }

  changeStatus(status) {
    if (this.state.status === status) {
      status = null
    }

    this.setState({
      ...this.state,
      status,
    })
  }

  render() {
    const table = this.props.table

    if (!table) {
      return <div style={{ padding: '15px' }}>Loading...</div>
    }

    const productItems = this.props.paidProducts.map((product, i) => (
      <ProductListItem
        key={i}
        onClick={() =>
          this.props.removeProduct({ index: i, tableID: table.id })
        }
      >
        <div>
          <span>{product.label}</span>
          <strong>{floatToBRL(product.price)}</strong>
        </div>
      </ProductListItem>
    ))

    const currentTableAction = (
      <TableActionContainer>
        {this.state.status === 'ADDING_PRODUCT' ? (
          <ProductAddition
            addProduct={this.props.addProduct}
            tableID={this.props.table.id}
            products={this.props.products}
          />
        ) : this.state.status === 'ADDING_PAYMENT' ? (
          <PaymentAddition
            addPayment={this.props.addPayment}
            tableID={this.props.table.id}
          />
        ) : null}
      </TableActionContainer>
    )

    return (
      <PageWrapper>
        <NavBar title={`Mesa ${table.id}`} history={this.props.history} />
        <TableHeader style={{ display: 'flex' }}>
          <TableHeaderCell vertical>
            <div>
              <div style={{ marginBottom: '5px' }}>Restam</div>
              <HeaderValueSpan big>
                {floatToBRL(table.restValue)}
              </HeaderValueSpan>
            </div>
          </TableHeaderCell>
          <div>
            <TableHeaderCell>
              <span>Pago</span>
              <HeaderValueSpan>{floatToBRL(table.paidValue)}</HeaderValueSpan>
            </TableHeaderCell>
            <TableHeaderCell>
              <span>Total</span>
              <HeaderValueSpan>{floatToBRL(table.total)}</HeaderValueSpan>
            </TableHeaderCell>
          </div>
        </TableHeader>
        <ProductList>{productItems}</ProductList>
        <TableFooter>
          {this.state.status !== null && currentTableAction}
          <TableButton
            onClick={() => this.changeStatus('ADDING_PRODUCT')}
            active={this.state.status === 'ADDING_PRODUCT'}
          >
            Adicionar produto
          </TableButton>
          <TableButton
            onClick={() => this.changeStatus('ADDING_PAYMENT')}
            active={this.state.status === 'ADDING_PAYMENT'}
          >
            Adicionar pagamento
          </TableButton>
        </TableFooter>
      </PageWrapper>
    )
  }
}

export default Table
