import React from 'react'

import { FooterStyled, FooterWrapperStyled, FooterContentStyled } from './style'

import CustomIcon from '../CustomIcon'
import { ReactComponent as FbIcon } from '../../assets/icons/fb.svg'
import { ReactComponent as InstaIcon } from '../../assets/icons/insta.svg'
import { ReactComponent as TwiIcon } from '../../assets/icons/twi.svg'

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContentStyled>
        <FooterWrapperStyled>
          <span>Copyright © 2020 greenlhama.com.br</span>
        </FooterWrapperStyled>
        <FooterWrapperStyled>
          <CustomIcon>
            <FbIcon />
          </CustomIcon>
          <CustomIcon>
            <InstaIcon />
          </CustomIcon>
          <CustomIcon>
            <TwiIcon />
          </CustomIcon>
        </FooterWrapperStyled>
      </FooterContentStyled>
    </FooterStyled>
  )
}

export default Footer
