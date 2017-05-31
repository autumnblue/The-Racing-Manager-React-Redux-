/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 * Button component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const Button = props => {
  const { children, className, style, isDisabled, onClick } = props

  // Modified classes.
  const modifiedClassNames = classNames('button', className)

  return (
    <button
      className={modifiedClassNames}
      style={style}
      onClick={!isDisabled && onClick}
      disabled={isDisabled || !onClick}>
      {children}
    </button>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Button.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
Button.defaultProps = {
  isDisabled: false
}

export default Button