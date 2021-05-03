import React from 'react'
import { Button } from 'baseui/button'
import ChevronDown from 'baseui/icon/chevron-down'

export const ScrollButton = ({ scroll }) => (
  <Button onClick={scroll}>
    <ChevronDown size={32} />
  </Button>
)

export default ScrollButton
