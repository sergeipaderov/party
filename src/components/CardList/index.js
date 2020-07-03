import React, { memo } from 'react'

import ProductCard from '../ProductCard'

import { Root } from './style'

function CardLIst() {
  // const [show, setShow] = useState(false)

  // const toggleMenu = () => {
  //   setShow(!show)
  // }

  return (
    <Root>
      <ProductCard
        img="https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />

      <ProductCard
        img="https://cdn.pixabay.com/photo/2012/03/03/23/02/autumn-21498_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2019/03/31/19/47/hare-4093851_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2014/06/30/11/40/birthday-cake-380178_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2016/11/23/14/37/baked-goods-1853261_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2014/09/22/00/57/chinese-lantern-455760_960_720.jpg"
        title="Melhor coisa"
        autor="Abraam Linkoln"
      />
    </Root>
  )
}

export default memo(CardLIst)
