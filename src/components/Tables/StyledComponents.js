import styled from 'styled-components'

export const TableList = styled.ul`
  flex: 1;
  background-color: #ddd;
  margin: 0;
  padding-left: 0;
  color: #123a22;
  list-style: none;

  a {
    color: inherit;
  }
`

export const TableListItem = styled.li`
  padding: 15px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background 0.3s ease;
  border-bottom: 1px solid #dedede;

  div {
    display: flex;
    justify-content: space-between;
    transition: 0.3s transform;
  }

  &:hover {
    background-color: #ccc;
  }

  &:active {
    div {
      transform: scale(0.95);
    }
  }
`
