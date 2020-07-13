import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${theme.palette.color.primary};
  box-shadow: 1px 1px 10px 1px ${theme.palette.color.shadow};
  display: flex;
  justify-content: center;
`

export const FooterContentStyled = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`

export const FooterWrapperStyled = styled.div`
  padding: 20px 0 20px 20px;
  display: flex;
  color: #888f9b;
  align-items: center;

  @media (max-width: 992px) {
    padding: 10px 60px;
  }

  span {
    @media (max-width: 992px) {
      text-align: center;
    }
  }
`
