import React, { memo } from 'react'

import CustomButton from '../CustomButton'
import theme from '../../assets/styles/theme'

import { Card, CardWrapper, ContentWrapper, CardTitle } from './style'

const CategoryCard = ({ title, bg }) => {
  return (
    <Card style={{ backgroundImage: `url(${bg})` }}>
      <CardWrapper>
        <ContentWrapper>
          <CardTitle>{title}</CardTitle>
          {/* <CustomButton color={theme.third} text="Ver Mais" /> */}
        </ContentWrapper>
      </CardWrapper>
    </Card>
  )
}

export default memo(CategoryCard)
