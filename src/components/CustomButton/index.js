import React, { memo } from 'react'

import { CardButtonWrapper, CardButton } from './style'

const CustomButton = ({ text, color, onClick }) => {
  return (
    <CardButtonWrapper>
      <CardButton
        onClick={onClick}
        style={{
          color: `${color}`,
          border: `1px solid ${color}`,
        }}
      >
        {text}
      </CardButton>
    </CardButtonWrapper>
  )
}

export default memo(CustomButton)
