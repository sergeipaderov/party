import styled from 'styled-components'

export const Card = styled.div`
  height: 260px;
  width: 260px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.shadow};
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.accent};
  }

  ${({ theme }) => theme.extralarge`
    width: 21%;
  `}
    
  ${({ theme }) => theme.large`
    width: 29%;
    // padding: 2%;
  `}
    
  ${({ theme }) => theme.tablet`
    width: 98%;
    margin: 1%;
    box-shadow: none;
  `};
`

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: rgb(255, 255, 255); */
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  height: 92%;
`

export const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.third};
`
