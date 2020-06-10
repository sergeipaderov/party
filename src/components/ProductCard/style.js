import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Card = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.shadow};
  margin: 10px;
`
