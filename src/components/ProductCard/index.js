import React, { memo } from 'react'

import CustomButton from '../CustomButton'
import theme from '../../assets/styles/theme'

import {
  Card,
  CardImageWrapper,
  CardImage,
  CardInfo,
  CardAutor,
  CardButton,
  CardButtonWrapper,
} from './style'

const ProductCard = ({ img, title, autor }) => {
  console.log(theme)
  return (
    <Card>
      <CardImageWrapper>
        <CardImage src={img} alt="Product Image" />
      </CardImageWrapper>
      <CardInfo>
        <span>{title}</span>
        <CardAutor>{autor}</CardAutor>
      </CardInfo>
      <CustomButton color={theme.accent} text="Ver Mais" />
    </Card>
  )
}

export default memo(ProductCard)
