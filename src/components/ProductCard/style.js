import styled from 'styled-components'

export const Card = styled.div`
  height: 300px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.shadow};
  margin: 10px;
  padding: .5%;
  width: 21%;

  ${({ theme }) => theme.extralarge`
    width: 21%;
  `}
    ${({ theme }) => theme.large`
    width: 29%;
  `}
    ${({ theme }) => theme.tablet`
    width: 100%;
  `};
`

export const CardImageWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  height: 40%;
  height: 70%;
`

export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`
