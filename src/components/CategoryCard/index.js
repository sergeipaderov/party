import React, { memo } from 'react'

import { Card, CardWrapper, ContentWrapper, CardTitle } from './style'

const CategoryCard = ({ title, bg }) => {
  return (
    <Card style={{ backgroundImage: `url(${bg})` }}>
      <CardWrapper>
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
        </ContentWrapper>
      </CardWrapper>
    </Card>
  )
}

export default memo(CategoryCard)
