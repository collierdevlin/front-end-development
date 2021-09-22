import React from 'react'
import { Button, SHAPE } from 'baseui/button'
import ChevronDown from 'baseui/icon/chevron-down'
import ChevronUp from 'baseui/icon/chevron-up'

export const ScrollButton = ({ disabled, scroll, up = false }) => (
  <Button
    disabled={disabled}
    onClick={scroll}
    shape={SHAPE.circle}
    style={{ padding: '0.4em', margin: '0.4em' }}>
    { !up ? <ChevronDown size={32} /> : <ChevronUp size={32} /> }
  </Button>
)

export default ScrollButton
