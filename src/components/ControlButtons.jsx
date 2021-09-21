import React from 'react'
import ScrollButton from './ScrollButton'

export const ControlButtons = ({ disablePrevious, disableNext, scrollPrevious, scrollNext }) => {
  return (
    <div>
      <ScrollButton disabled={disablePrevious} up scroll={scrollPrevious} />
      <ScrollButton disabled={disableNext} scroll={scrollNext} />
    </div>
  )
}

export default ControlButtons
