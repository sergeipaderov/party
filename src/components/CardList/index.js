import React, { memo, useState } from 'react'

import ProductCard from '../ProductCard'

import { Root } from './style'

function CardLIst() {
  // const [show, setShow] = useState(false)

  // const toggleMenu = () => {
  //   setShow(!show)
  // }

  return (
    <Root>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Root>
  )
}

export default memo(CardLIst)
