import React, { memo, useState, useEffect } from 'react'
import logo from '../../assets/images/logo.svg'
import menu from '../../assets/icons/menu.svg'
import {
  HeaderStyled,
  LogoStyled,
  MenuContentStyled,
  MenuIconStyled,
  MenuStyled,
  MenuItemStyled,
  LogoNameStyled,
  HeaderContentWrapperStyled,
  CloseMenuIcon,
} from './style'

function Header() {
  const [show, setShow] = useState(false)
  const [isAdmin, setAdmin] = useState(false)

  useEffect(() => {
    const admin = localStorage.getItem('user')
    if (admin) {
      setAdmin(true)
    }
  }, [isAdmin])

  const toggleMenu = () => {
    setShow(!show)
  }

  return (
    <HeaderStyled>
      <HeaderContentWrapperStyled>
        <LogoStyled>
          <LogoNameStyled exact activeClassName="active" to="/">
            <img src={logo} alt="Logo" width="32px" />
            <h1>Green Lhama</h1>
          </LogoNameStyled>
        </LogoStyled>
        <MenuContentStyled>
          <LogoStyled>
            <LogoNameStyled exact activeClassName="active" to="/">
              <img src={logo} alt="Logo" width="32px" />
              <h1>Green Lhama</h1>
            </LogoNameStyled>
          </LogoStyled>
          <MenuIconStyled onClick={toggleMenu} src={menu} width="28px" />
        </MenuContentStyled>
        <MenuStyled show={show}>
          <CloseMenuIcon onClick={toggleMenu} />
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Home
          </MenuItemStyled>
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/decor"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Decor
          </MenuItemStyled>
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/sweets"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Doces
          </MenuItemStyled>
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/flowers"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Flores
          </MenuItemStyled>
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/photo"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Foto
          </MenuItemStyled>
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/souvenirs"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Lembrancinhas
          </MenuItemStyled>
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/animators"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Animadores
          </MenuItemStyled>
          <MenuItemStyled
            onClick={toggleMenu}
            exact
            activeClassName="active"
            to="/other"
            activeStyle={{
              color: '#1F2633',
            }}
          >
            Outros
          </MenuItemStyled>
          {isAdmin ? (
            <MenuItemStyled
              onClick={toggleMenu}
              exact
              activeClassName="active"
              to="/other"
              activeStyle={{
                color: '#1F2633',
              }}
            >
              Log Out
            </MenuItemStyled>
          ) : null}
        </MenuStyled>
      </HeaderContentWrapperStyled>
    </HeaderStyled>
  )
}

export default memo(Header)
