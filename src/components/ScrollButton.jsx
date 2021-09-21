import React from 'react'
import { Button } from 'baseui/button'
import ChevronDown from 'baseui/icon/chevron-down'
import ChevronUp from 'baseui/icon/chevron-up'
import { useStyletron } from 'baseui'

export const ScrollButton = ({ disabled, scroll, up = false }) => {
  const [css] = useStyletron()
  return (
    <Button className={
      css({
        background: '#ffc000',
        color: '#1d2542'
      })
    } onClick={scroll} disabled={disabled} style={{ border: 0, borderRadius: '50%', padding: '0.4em', margin: '0.4em' }}>
      { !up ? <ChevronDown size={32} /> : <ChevronUp size={32} /> }
    </Button>
  )
}

export default ScrollButton
