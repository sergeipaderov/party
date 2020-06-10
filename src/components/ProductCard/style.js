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
    padding: 2%;
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

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.secondary};
  padding: 8px 0;
`
export const CardAutor = styled.span`
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  margin-top: 2px;
`

export const CardButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const CardButton = styled.div`
  color: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 3px 10px 4px;
  border-radius: 5px;
  cursor: pointer;
`
