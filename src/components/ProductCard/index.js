import React, { memo } from 'react'

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
  return (
    <Card>
      <CardImageWrapper>
        <CardImage src={img} alt="Product Image" />
      </CardImageWrapper>
      <CardInfo>
        <span>{title}</span>
        <CardAutor>{autor}</CardAutor>
      </CardInfo>
      <CardButtonWrapper>
        <CardButton>Ver Mais</CardButton>
      </CardButtonWrapper>
    </Card>
  )
}

export default memo(ProductCard)
