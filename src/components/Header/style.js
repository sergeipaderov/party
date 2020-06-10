import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.shadow};
  position: relative;
  display: flex;
  justify-content: center;
  position: relative;
`

export const HeaderContentWrapperStyled = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const LogoStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 60px;
  /* width: 200px; */
  overflow: hidden;

  ${({ theme }) => theme.desktop`
      margin-left: 0;
  `}
`
export const LogoNameStyled = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.accent};
    margin-left: 10px;
    font-family: 'Pacifico', cursive;
    white-space: nowrap;
    vertical-align: middle;
  }
`

export const MenuContentStyled = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  display: none;
  height: 60px;
  padding: 0 10px;
  justify-content: space-between;
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.shadow};

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-betweem;
    align-items: center;
  }
`

export const MenuIconStyled = styled.img`
  cursor: pointer;
  margin-right: 30px;
`

export const MenuStyled = styled.nav`
  list-style: none;
  margin: 0;
  overflow: hidden;
  font-size: 1.1rem;
  display: flex;
  justify-content: flex-end;
  padding: 0 60px;
  }

  @media (max-width: 1200px) {
        display: ${({ show }) => (show ? 'block' : 'none')};
        position: fixed;
        z-index: 100;
        background-color: ${({ theme }) => theme.primary};
        top: 60px;
        overflow: hidden;
        height: 100%;
        width: 100%;
        padding: 0;

        li {
            width: 100%;
        }
  }
`

export const MenuItemStyled = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  padding: 16px;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transition: 0.8s;
  }
`
