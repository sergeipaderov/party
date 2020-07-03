import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Card = styled.div`
  height: 260px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 10px 1px ${theme.palette.color.shadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:hover {
    box-shadow: 1px 1px 10px 1px ${theme.palette.color.accent};
  }
`

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

export const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #fff;
  background-color: rgb(0, 0, 0, 0.6);
  box-shadow: 1px 1px 10px 10px rgb(0, 0, 0, 0.6);
  padding: 10px;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`
