import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Card = styled.div`
  height: 260px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 10px 1px ${theme.palette.color.shadow};
  margin: 1%;
  padding: 0.5% 0.5% 0.8%;
  width: 21%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1600px) {
    width: 21%;
  }

  @media (max-width: 1170px) {
    width: 29%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
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
  color: ${theme.palette.color.secondary};
  padding: 0 0 8px 0;
`
export const CardAutor = styled.span`
  color: ${theme.palette.color.accent};
  cursor: pointer;
  margin-top: 2px;
`
