import React, { memo, useState } from 'react'

import { Card } from './style'

function ProductCard() {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
  }

  return <Card>Card</Card>
}

export default memo(ProductCard)
