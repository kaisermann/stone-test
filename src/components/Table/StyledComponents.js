import styled from 'styled-components'

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: #75aa3f;
  color: #fff;

  & > * {
    width: 50%;

    &:not(:last-child) {
      border-right: 1px solid #fff;
    }
  }
`

export const HeaderValueSpan = styled.span`
  display: block;
  color: #123a22;
  font-weight: bold;
  font-size: ${props => (!!props.big ? '18px' : 'inherit')};
`

export const TableHeaderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  font-size: 14px;

  & + & {
    border-top: 1px solid #fff;
  }
`

export const TableButton = styled.button`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: none;
  background-color: ${props => (props.active ? '#123a22' : '#93c748')};
  padding: 15px 10px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #123a22;
  }

  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`

export const TableActionContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px #000;
  z-index: 0;
`

export const TableFooter = styled.div`
  display: flex;
  position: relative;

  ${TableButton} {
    z-index: 1;
  }
`

export const ProductList = styled.ul`
  flex: 1;
  list-style: none;
  padding-left: 0;
  margin: 0;
  background-color: #f5f5f5;
  overflow-y: auto;
`

export const ProductListItem = styled.li`
  width: 100%;
  padding: 14px 10px;
  font-size: 12px;
  color: #979797;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e3e3e3;
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
    transition: transform 0.3s ease;
  }

  span {
    position: relative;
    &::after {
      content: '×';
      position: absolute;
      right: -15px;
      top: 0;
      font-size: 16px;
      font-weight: bold;
      line-height: 16px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &:hover {
    span::after {
      opacity: 1;
    }
  }

  &:active {
    div {
      transform: scale(0.95);
    }
  }
`
