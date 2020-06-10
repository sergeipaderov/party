import React, { memo } from 'react'

import { Card, CardImageWrapper, CardImage } from './style'

const ProductCard = ({ img, title, autor }) => {
  return (
    <Card>
      <CardImageWrapper
      // style={{
      //   background: `url("https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_960_720.jpg") no-repeat content `,
      // }}
      >
        <CardImage src={img} alt="Product Image" />
      </CardImageWrapper>
    </Card>
  )
}

export default memo(ProductCard)
