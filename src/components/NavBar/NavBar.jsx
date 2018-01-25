import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
  position: relative;
  padding: 10px 5px;
  background-color: #93c748;
  text-align: center;
  user-select: none;
`

const BackBtn = styled.button`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  font-size: 20px;
  color: #123a22;
  cursor: pointer;
`

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: #123a22;
`

export default props => {
  const displayBackBtn =
    props.history && props.history.location.pathname !== '/'
  return (
    <NavBar>
      {displayBackBtn && <BackBtn onClick={props.history.goBack}>◀</BackBtn>}
      {props.title && <Title>{props.title}</Title>}
    </NavBar>
  )
}
