import React from 'react'
import styled from 'styled-components'

import mockupImg from './nexus.png'

const Mockup = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 481px) {
    width: 362px;
    height: 734px;
    padding: 77px 22px 88px 20px;
    background-image: url(${mockupImg});
    background-size: 362px 734px;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const MockupScreen = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 481px) {
    width: 320px;
    height: 569px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: #000;
    overflow: hidden;
  }
`

export default props => (
  <Mockup>
    <MockupScreen>{props.children}</MockupScreen>
  </Mockup>
)
