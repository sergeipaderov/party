import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.shadow};
  display: flex;
  justify-content: center;
`

export const FooterContentStyled = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.desktop`
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      
  `}
`

export const FooterWrapperStyled = styled.div`
  padding: 20px 60px;
  display: flex;
  color: #888f9b;
  align-items: center;

  ${({ theme }) => theme.desktop`
      padding: 10px 60px;
  `}

  span {
    ${({ theme }) => theme.desktop`
        text-align: center;
    `}
  }
`
