import styled from 'styled-components'

export const Card = styled.div`
  height: 260px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.shadow};
  margin: 1%;
  padding: .5% .5% .8%;
  width: 21%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    width: 100%;
  `};
`

export const CardImageWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  height: 40%;
  height: 70%;
  max-height: 160px;
`

export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.secondary};
  padding: 0 0 8px 0;
`
export const CardAutor = styled.span`
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  margin-top: 2px;
`
