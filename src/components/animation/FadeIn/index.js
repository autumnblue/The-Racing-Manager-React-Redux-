import React from 'react'

import Animate from 'components/animation/Animate'

const FadeIn = (props) => {
  const {
    children
  } = props

  return (
    <Animate
      name='fade-in' >
      {children}
    </Animate>
  )
}

export default FadeIn
