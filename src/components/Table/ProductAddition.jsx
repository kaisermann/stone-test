import React, { Component } from 'react'
import styled from 'styled-components'
import floatToBRL from '../../utils/floatToBRL'

const ProductList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  overflow-y: auto;
  max-height: 300px;
`

const ProductListItem = styled.li`
  font-size: 14px;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
  background: #fefefe;

  div {
    transition: transform 0.3s ease;
    display: flex;
    justify-content: space-between;
  }

  &:hover,
  &:active {
    background: #ccc;
  }

  &:active div {
    transform: scale(0.95);
  }
`

export default class ProductAddition extends Component {
  addProduct(productID) {
    const { tableID } = this.props
    this.props.addProduct({ tableID, productID })
  }

  render() {
    const productListItems = this.props.products.map((product, i) => (
      <ProductListItem key={i} onClick={() => this.addProduct(product.id)}>
        <div>
          <span>{product.label}</span>
          <strong>{floatToBRL(product.price)}</strong>
        </div>
      </ProductListItem>
    ))
    return <ProductList>{productListItems}</ProductList>
  }
}
