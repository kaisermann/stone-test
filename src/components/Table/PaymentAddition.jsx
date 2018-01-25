import React, { Component } from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 10px;
`

const PaymentInput = styled.input`
  flex: 1;
  border: none;
  color: #063c21;
  height: 40px;
`

const PaymentAddBtn = styled.button`
  border: none;
  background-color: #063c21;
  color: #fff;
  flex-basis: 40px;
  height: 40px;
  cursor: pointer;
`

export default class PaymentAdddition extends Component {
  state = { value: 0.0 }

  addPayment() {
    if (this.state.value === 0.0) return
    this.props.addPayment({
      tableID: this.props.tableID,
      value: parseFloat(this.state.value),
    })
    this.setState({ value: 0.0 })
  }

  render() {
    return (
      <FormWrapper>
        <PaymentInput
          type="number"
          placeholder="R$ 0,00"
          value={this.state.value === 0.0 ? '' : this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <PaymentAddBtn onClick={() => this.addPayment()}>+</PaymentAddBtn>
      </FormWrapper>
    )
  }
}
