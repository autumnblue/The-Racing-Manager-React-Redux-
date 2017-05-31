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
 *  Image
 *  @param  {String} options.source
 *  @param  {String} options.className
 *  @return {React.Component}
 */
const Image = ({source, className, alt, isLoaded}) => {
  /**
   *  @type {String}
   */
  const modifiedClassNames = classNames('image', className, 'normal', {
    loaded: isLoaded
  })

  return (
    <img src={source} alt={alt} className={modifiedClassNames} />
  )
}

Image.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isLoaded: PropTypes.bool
}

export default Image